"use client"
import { Component } from "@/components/component";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Job } from "@/components/component";

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
      <Component jobs={jobs} />
    </div>
  );
}
