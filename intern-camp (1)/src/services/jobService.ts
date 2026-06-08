import Papa from 'papaparse';
import { Job } from '../types';
import { supabase } from '../lib/supabase';
import { JOBS_CSV_URL } from '../constants';
import { resolve, splitPipes } from '../lib/utils';

export const jobService = {
  async fetchJobsFromCSV(): Promise<Job[]> {
    try {
      const response = await fetch(JOBS_CSV_URL);
      const text = await response.text();
      
      return new Promise((resolvePromise, reject) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const jobs: Job[] = (results.data as any[]).map((row, index) => {
              const companyVal = resolve(row, 'company', 'congty', 'name', 'doanhnghiep') || '';
              const positionVal = resolve(row, 'position', 'title', 'vitri', 'role') || '';
              const industryVal = resolve(row, 'industry', 'linhvuc', 'sector', 'nganh') || '';
              const locationVal = resolve(row, 'location', 'diadiem', 'diachi', 'address', 'khuvuc') || '';
              const timeVal = resolve(row, 'timeposted', 'posted', 'ngaydang', 'time', 'date', 'posted_at', '_source_date') || '';
              const salaryVal = resolve(row, 'salary', 'luong', 'thuong') || '';
              const typeVal = resolve(row, 'jobtype', 'loaihinh', 'type', 'job_type') || '';
              const linkVal = resolve(row, 'link', 'duongdan', 'apply', 'url', 'link_1_url') || '';
              const responsibilitiesVal = resolve(row, 'responsibilities', 'mota', 'description', 'job_desc', 'nhiemvu') || '';
              const requirementsVal = resolve(row, 'requirements', 'yeucau', 'tieuchuan') || '';
              const companyDescVal = resolve(row, 'company_desc', 'companydesc', 'gioithieu', 'about') || '';
              const scoreVal = resolve(row, 'score', 'diem', 'danhgia') || '';
              const aiVerificationVal = resolve(row, 'ai_verification', 'verification', 'xacthuc', 'ai_verify') || '';
              const statusVal = resolve(row, 'status', 'trangthai') || '';

              return {
                id: row.id || `csv-${index}`,
                company: companyVal,
                position: positionVal,
                industry: industryVal,
                location: locationVal,
                timePosted: timeVal,
                salary: salaryVal,
                jobType: typeVal,
                link: linkVal,
                link_1_url: linkVal,
                link_1_platform: resolve(row, 'link_1_platform', 'platform') || '',
                responsibilities: typeof responsibilitiesVal === 'string' ? splitPipes(responsibilitiesVal) : (Array.isArray(responsibilitiesVal) ? responsibilitiesVal : []),
                requirements: typeof requirementsVal === 'string' ? splitPipes(requirementsVal) : (Array.isArray(requirementsVal) ? requirementsVal : []),
                companyDesc: companyDescVal,
                score: String(scoreVal),
                aiVerification: aiVerificationVal,
                status: statusVal
              } as Job;
            }).filter(j => j.company && j.position);
            resolvePromise(jobs);
          },
          error: (error) => reject(error)
        });
      });
    } catch (error) {
      console.error('Error fetching jobs from fallback CSV:', error);
      return [];
    }
  },

  async fetchJobs(): Promise<Job[]> {
    try {
      if (!supabase) {
        console.warn('Supabase client not initialized. Falling back to Google Sheets CSV data source.');
        return await this.fetchJobsFromCSV();
      }

      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.warn('Supabase fetch failed. Falling back to Google Sheets CSV:', error);
        return await this.fetchJobsFromCSV();
      }

      if (!data || data.length === 0) {
        return await this.fetchJobsFromCSV();
      }

      return data.map((row: any) => ({
        id: row.id,
        company: row.company || '',
        position: row.title || row.Title || row.position || '',
        industry: row.industry || '',
        location: row.location || '',
        timePosted: row._source_date || row.posted_at || '',
        salary: row.salary || '',
        jobType: row.job_type || row.jobType || '',
        link: row.link || '',
        link_1_url: row.link_1_url || row.link || '',
        link_1_platform: row.link_1_platform || '',
        responsibilities: Array.isArray(row.responsibilities) 
          ? row.responsibilities 
          : (typeof row.responsibilities === 'string' ? row.responsibilities.split('|').filter(Boolean) : []),
        requirements: Array.isArray(row.requirements) 
          ? row.requirements 
          : (typeof row.requirements === 'string' ? row.requirements.split('|').filter(Boolean) : []),
        companyDesc: row.company_desc || row.companyDesc || '',
        score: String(row.score || ''),
        aiVerification: row.ai_verification || row.aiVerification || '',
        status: row.status || ''
      } as Job));
    } catch (error) {
      console.error('Error fetching jobs from Supabase, falling back immediately:', error);
      return await this.fetchJobsFromCSV();
    }
  }
};
