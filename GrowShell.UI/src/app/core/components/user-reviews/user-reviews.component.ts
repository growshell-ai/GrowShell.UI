import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Review {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-user-reviews',
  imports: [CommonModule],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.css'
})
export class UserReviewsComponent {

  private reviews1: Review[] = [
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager at Microsoft',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'The auto-apply feature saved me countless hours. I went from applying to 5 jobs a week to 50+. Landed my dream role at Microsoft!'
    },
    {
      name: 'David Park',
      role: 'Senior Developer at Amazon',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'The job matching algorithm is spot on. Every recommendation felt tailored to my exact skills and career goals.'
    },
    {
      name: 'Robert Fox',
      role: 'Data Scientist at Meta',
      company: 'Meta',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'GrowShell found opportunities I missed on other platforms. The AI insights for my resume were a game changer.'
    }
  ];

  private reviews2: Review[] = [
    {
      name: 'Sarah Chen',
      role: 'UX Designer at Google',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Best investment in my career. The AI mock interviews prepared me perfectly. Went from nervous to confident in just 2 weeks.'
    },
    {
      name: 'James Wilson',
      role: 'Backend Engineer at Stripe',
      company: 'Stripe',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Switched careers from finance to tech with GrowShell\'s help. The skills gap analysis was incredibly helpful.'
    },
    {
      name: 'Emily Zhang',
      role: 'Frontend Dev at Vercel',
      company: 'Vercel',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'I love how it automates the repetitive parts of job hunting. I could focus purely on preparing for my interviews.'
    }
  ];

  private reviews3: Review[] = [
    {
      name: 'Amanda Foster',
      role: 'Marketing Lead at Netflix',
      company: 'Netflix',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Found my dream role in 3 weeks. The salary insights feature helped me negotiate a 30% higher offer. Absolutely game-changing!'
    },
    {
      name: 'Nina Patel',
      role: 'Product Lead at Airbnb',
      company: 'Airbnb',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'The platform is intuitive and effective. I received interview calls from top tier tech companies within days.'
    },
    {
      name: 'Thomas Anderson',
      role: 'System Architect at Oracle',
      company: 'Oracle',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      text: 'Simple, fast, and effective. It took the stress out of my job search. Highly recommended for any senior engineer.'
    }
  ];

  // Duplicate arrays for seamless scrolling loop
  col1 = [...this.reviews1, ...this.reviews1];
  col2 = [...this.reviews2, ...this.reviews2];
  col3 = [...this.reviews3, ...this.reviews3];

}
