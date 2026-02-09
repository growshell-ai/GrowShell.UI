import { Injectable, signal } from '@angular/core';

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  level: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  matchScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  readonly jobs = signal<Job[]>([
    {
      id: '1',
      title: 'Senior Frontend Engineer',
      company: 'TechFlow',
      logo: 'TF',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$160k - $210k',
      posted: '2 days ago',
      level: 'Senior',
      workType: 'Remote',
      matchScore: 98
    },
    {
      id: '2',
      title: 'Product Designer',
      company: 'Creative AI',
      logo: 'CA',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $180k',
      posted: '4 hours ago',
      level: 'Mid-Senior',
      workType: 'Hybrid',
      matchScore: 92
    },
    {
      id: '3',
      title: 'Growth Marketing Manager',
      company: 'ScaleUp',
      logo: 'SU',
      location: 'Austin, TX',
      type: 'Contract',
      salary: '$100k - $140k',
      posted: '1 week ago',
      level: 'Mid',
      workType: 'On-site',
      matchScore: 85
    },
    {
      id: '4',
      title: 'Backend Engineer (Go)',
      company: 'StreamLine',
      logo: 'SL',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$170k - $230k',
      posted: '3 days ago',
      level: 'Senior',
      workType: 'Remote',
      matchScore: 88
    },
     {
      id: '5',
      title: 'AI Research Scientist',
      company: 'DeepMindX',
      logo: 'DM',
      location: 'Palo Alto, CA',
      type: 'Full-time',
      salary: '$250k - $400k',
      posted: '1 day ago',
      level: 'Principal',
      workType: 'Hybrid',
      matchScore: 99
    }
  ]);

  getJobs() {
    return this.jobs;
  }
}
