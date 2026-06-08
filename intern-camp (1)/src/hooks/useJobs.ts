import { useState, useEffect, useMemo } from 'react';
import { jobService } from '../services/jobService';
import { teamService } from '../services/teamService';
import { Job, TeamMember } from '../types';
import { PAGE_SIZE } from '../constants';
import { 
  parseTimeToDate, 
  isToday 
} from '../lib/utils';

export function useJobs(searchQuery: string, filterLocation: string, filterDate: string, currentPage: number) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchDataData = async () => {
      try {
        const [fetchedJobs, fetchedTeam] = await Promise.all([
          jobService.fetchJobs(),
          teamService.fetchTeamMembers()
        ]);
        setJobs(fetchedJobs);
        setTeamMembers(fetchedTeam);
      } catch (error) {
        console.error('Error fetching data via services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataData();
  }, []);

  const filteredJobs = useMemo(() => {
    const now = new Date().getTime();
    const dayMs = 24 * 60 * 60 * 1000;

    const filtered = jobs.filter(job => {
      const matchesSearch = job.company.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.position.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = filterLocation === 'all' || job.location === filterLocation;
      
      let matchesDate = true;
      if (filterDate !== 'all') {
        const jobDate = parseTimeToDate(job.timePosted).getTime();
        const diff = now - jobDate;
        
        if (filterDate === 'today') matchesDate = diff <= dayMs;
        else if (filterDate === '3days') matchesDate = diff <= (dayMs * 3);
        else if (filterDate === 'week') matchesDate = diff <= (dayMs * 7);
        else if (filterDate === 'month') matchesDate = diff <= (dayMs * 30);
      }

      return matchesSearch && matchesLocation && matchesDate;
    });

    return filtered.sort((a, b) => {
      const timeA = parseTimeToDate(a.timePosted);
      const timeB = parseTimeToDate(b.timePosted);
      return timeB.getTime() - timeA.getTime();
    });
  }, [jobs, searchQuery, filterLocation, filterDate]);

  const locations = useMemo(() => {
    const set = new Set(jobs.map(j => j.location).filter(Boolean));
    return Array.from(set).sort();
  }, [jobs]);

  const currentJobs = filteredJobs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const stats = useMemo(() => {
    const companies = new Set(jobs.map(j => j.company).filter(Boolean)).size;
    const newToday = jobs.filter(j => isToday(parseTimeToDate(j.timePosted))).length;
    return { total: jobs.length, companies, newToday };
  }, [jobs]);

  return {
    jobs,
    loading,
    teamMembers,
    filteredJobs,
    locations,
    currentJobs,
    stats
  };
}
