"use client"
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { JobCard, Job } from "@/components/jobcard";

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
      <JobCard jobs={jobs} />
    </div>
  );
}
