import { Component, ElementRef, AfterViewInit, OnDestroy, inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements AfterViewInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      this.setupObserver();
    } else {
      // Fallback: show immediately if SSR or no Observer support
      this.showAll();
    }
  }

  private setupObserver() {
    const options = {
      root: null,
      threshold: 0.15, // Trigger when 15% visible
      rootMargin: '0px 0px -50px 0px' 
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.observer?.unobserve(entry.target); // Animate once
        }
      });
    }, options);

    const elements = this.elementRef.nativeElement.querySelectorAll('.section-animate');
    elements.forEach((el: Element) => this.observer?.observe(el));
  }

  private showAll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.section-animate');
    elements.forEach((el: Element) => el.classList.add('in-view'));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
