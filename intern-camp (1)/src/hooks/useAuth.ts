import { useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  User 
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { UserProfile, AuthMode } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const syncUserProfile = async (currentUser: User) => {
    // Firestore sync removed as requested. Deriving minimal profile from Auth user.
    setUserProfile({
      uid: currentUser.uid,
      name: currentUser.displayName || 'Thành viên mới',
      email: currentUser.email || '',
      photoFileName: '',
      createdAt: null as any,
      updatedAt: null as any
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.emailVerified) {
          await syncUserProfile(currentUser);
          if (authMode === 'verify') setAuthMode('login');
        } else {
          setAuthMode('verify');
          setUserProfile(null);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setIsAuthChecking(false);
    });
    return () => unsubscribe();
  }, [authMode]);

  const login = async (email: string, pword: string) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pword);
      if (!userCredential.user.emailVerified) {
        setAuthMode('verify');
        return false;
      }
      return true;
    } catch (err: any) {
      console.error('Login error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setAuthError('Password or Email Incorrect');
      } else {
        setAuthError('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.');
      }
      return false;
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (email: string, pword: string, name: string) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pword);
      // Removed Firestore setDoc call as requested
      await sendEmailVerification(userCredential.user);
      setAuthMode('verify');
      return true;
    } catch (err: any) {
      console.error('Register error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setAuthError('User already exists. Sign in?');
      } else {
        setAuthError('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.');
      }
      return false;
    } finally {
      setAuthLoading(false);
    }
  };

  const resendVerification = async () => {
    if (auth.currentUser) {
      setAuthLoading(true);
      try {
        await sendEmailVerification(auth.currentUser);
        return true;
      } catch (err) {
        console.error('Resend error:', err);
        setAuthError('Không thể gửi lại email lúc này. Vui lòng thử lại sau.');
        return false;
      } finally {
        setAuthLoading(false);
      }
    }
    return false;
  };

  const checkVerificationStatus = async () => {
    if (auth.currentUser) {
      setAuthLoading(true);
      try {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          setUser(auth.currentUser);
          // Removed Firestore sync
          return true;
        }
        return false;
      } catch (err) {
        console.error('Check verification error:', err);
        return false;
      } finally {
        setAuthLoading(false);
      }
    }
    return false;
  };

  const resetPassword = async (email: string) => {
    if (!email) {
      setAuthError('Vui lòng nhập email');
      return false;
    }
    setAuthLoading(true);
    setAuthError('');
    try {
      await sendPasswordResetEmail(auth, email);
      setAuthMode('resetSuccess');
      return true;
    } catch (err: any) {
      console.error('Reset password error:', err);
      if (err.code === 'auth/user-not-found') {
        setAuthError('Email không tồn tại trong hệ thống');
      } else {
        setAuthError('Có lỗi xảy ra. Vui lòng thử lại.');
      }
      return false;
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const updateProfileData = async (newName: string, newPhotoFileName: string) => {
    if (!user) return false;
    // Firestore logic removed. Updating local state only.
    setUserProfile(prev => prev ? { ...prev, name: newName, photoFileName: newPhotoFileName } : null);
    return true;
  };

  const deleteAccount = async () => {
    if (!user) return false;
    try {
      await deleteUser(user);
      setUser(null);
      setUserProfile(null);
      return true;
    } catch (err: any) {
      console.error('Error deleting account:', err);
      throw err;
    }
  };

  return {
    user,
    userProfile,
    isAuthChecking,
    authMode,
    setAuthMode,
    authLoading,
    authError,
    setAuthError,
    login,
    register,
    resendVerification,
    checkVerificationStatus,
    resetPassword,
    logout,
    updateProfileData,
    deleteAccount
  };
}
