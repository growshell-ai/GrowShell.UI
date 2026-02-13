import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  imports: [CommonModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  readonly items = [
    { company: 'Amazon', role: 'Data Scientist', time: '4h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/amazon/FF9900' },
    { company: 'Meta', role: 'Frontend Developer', time: '5h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/meta/0668E1' },
    { company: 'Apple', role: 'iOS Engineer', time: '6h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/apple/000000' },
    { company: 'Netflix', role: 'Backend Engineer', time: '7h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/netflix/E50914' },
    { company: 'Stripe', role: 'Full Stack Developer', time: '8h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/stripe/008CDD' },
    { company: 'Airbnb', role: 'UX Designer', time: '9h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/airbnb/FF5A5F' },
    { company: 'Spotify', role: 'ML Engineer', time: '10h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/spotify/1DB954' },
    { company: 'Uber', role: 'Product Manager', time: '12h ago', bg: 'bg-gray-50', logoUrl: 'https://cdn.simpleicons.org/uber/000000' }
  ];
}
