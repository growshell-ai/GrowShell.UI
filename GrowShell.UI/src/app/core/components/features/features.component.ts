import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ElementRef, inject, OnDestroy, PLATFORM_ID, QueryList } from '@angular/core';
import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
 
}
