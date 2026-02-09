import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { JobService } from '../../../shared/services/job.service';

@Component({
  selector: 'app-jobsearch',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './jobsearch.component.html',
  styleUrl: './jobsearch.component.css'
})
export class JobsearchComponent {
  jobService = inject(JobService);

  getLogoColor(id: string): string {
    const colors = [
      'bg-yellow-100 text-yellow-700',
      'bg-blue-100 text-blue-700',
      'bg-pink-100 text-pink-700',
      'bg-green-100 text-green-700',
      'bg-orange-100 text-orange-700'
    ];
    return colors[parseInt(id) % colors.length];
  }
}
