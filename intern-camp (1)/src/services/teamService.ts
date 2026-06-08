import Papa from 'papaparse';
import { TeamMember } from '../types';
import { TEAM_CSV_URL } from '../constants';
import { resolve, convertDriveUrl } from '../lib/utils';

export const teamService = {
  async fetchTeamMembers(): Promise<TeamMember[]> {
    try {
      const response = await fetch(TEAM_CSV_URL);
      const text = await response.text();
      
      return new Promise((resolvePromise, reject) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const members: TeamMember[] = (results.data as any[]).map((row) => ({
              name: resolve(row, 'name', 'ten', 'hoten', 'fullname') || '',
              title: resolve(row, 'title', 'chucvu', 'vitri', 'role', 'position') || '',
              avatar: convertDriveUrl(resolve(row, 'avatar', 'image', 'photo', 'anh', 'picture', 'img', 'anhdai', 'anhthe') || ''),
              letter: resolve(row, 'letter', 'tamthu', 'message', 'noidung', 'content', 'thu') || '',
            })).filter(m => m.name);
            resolvePromise(members);
          },
          error: (error) => reject(error)
        });
      });
    } catch (error) {
      console.error('Error fetching team members:', error);
      return [];
    }
  }
};
