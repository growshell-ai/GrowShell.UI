import { Component, ElementRef, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
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
      this.showAll();
    }
  }

  private setupObserver() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.reveal-on-scroll');
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' 
    });

    elements.forEach((el: Element) => this.observer?.observe(el));
  }

  private showAll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el: Element) => el.classList.add('is-visible'));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
