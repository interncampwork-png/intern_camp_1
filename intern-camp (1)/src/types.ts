export type Job = {
  id: number;
  company: string;
  position: string;
  industry: string;
  location: string;
  timePosted: string;
  salary: string;
  jobType: string;
  link: string;
  responsibilities: string[];
  requirements: string[];
  companyDesc: string;
  score: string;
  aiVerification: string;
  status: string;
  link_1_url: string;
  link_1_platform: string;
};

export type UserProfile = {
  uid: string;
  name: string;
  email: string;
  photoFileName: string;
  createdAt: any;
  updatedAt: any;
};

export type TeamMember = {
  name: string;
  title: string;
  avatar: string;
  letter: string;
};

export type AuthMode = 'login' | 'register' | 'verify' | 'reset' | 'resetSuccess';
export type PageType = 'jobs' | 'cv-editing' | 'mock-interview' | 'assessment-test' | 'case-studies' | 'career-bundle' | 'newsletter' | 'profile' | 'media' | 'about';
