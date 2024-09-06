"use client"
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Component } from '@/components/component';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      let { data: jobs, error } = await supabase
        .from('jobs')
        .select('*');
      if (error) console.log('Error:', error);
      else setJobs(jobs || []);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {/* <JobCard jobs={jobs} /> */}
      <Component />
    </div>
  );
}
