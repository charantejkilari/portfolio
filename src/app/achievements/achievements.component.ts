// achievements.component.ts
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  @ViewChild('scroller') scroller!: ElementRef;
  
  achievements = [
    {
      icon: 'fas fa-certificate',
      title: 'Microsoft Certified: Azure Developer Associate',
      description: 'Earned by demonstrating expertise in developing Azure solutions'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Microsoft Certified: Azure Administrator',
      description: 'Certified in managing and monitoring Azure cloud environments, including configuring resources, securing access, and ensuring service availability.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Dazzling Debut Award at PwC',
      description: 'Recognized for outstanding performance and significant contributions during the initial phase of employment, demonstrating strong skills, initiative, and impact.'
    },
    {
      icon: 'fas fa-code',
      title: 'Hackathon Winner',
      description: 'Winner of an Generative AI based hackathon for bulding smart bot, click to know more'
    },
    {
      icon: 'fas fa-users',
      title: 'President',
      description: 'Serving as President of the Computer Science Graduate Student Organization at Binghamton University, leading career workshops, coding challenges, and networking events.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Outstanding contributor Recognition',
      description: 'Served as Lead Developer for a ChatGPT based DevOps automation PoC, recognized for driving innovation and delivering impactful results.'
    }
  ];

  autoScrollInterval: any;
  isPaused = false;
  scrollPosition = 0;
  scrollDirection: 'left' | 'right' = 'right';
  
  // Add platformId for SSR detection
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.stopAutoScroll();
    
    this.autoScrollInterval = setInterval(() => {
      if (!this.isPaused && this.scroller?.nativeElement) {
        this.scrollPosition = this.scroller.nativeElement.scrollLeft;
        
        if (this.scrollDirection === 'right') {
          if (this.scrollPosition < this.scroller.nativeElement.scrollWidth - this.scroller.nativeElement.clientWidth) {
            this.scroller.nativeElement.scrollBy({ left: 1, behavior: 'auto' });
          } else {
            this.scrollDirection = 'left';
          }
        } else {
          if (this.scrollPosition > 0) {
            this.scroller.nativeElement.scrollBy({ left: -1, behavior: 'auto' });
          } else {
            this.scrollDirection = 'right';
          }
        }
      }
    }, 30);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  toggleAutoScroll() {
    this.isPaused = !this.isPaused;
    
    if (!this.isPaused && !this.autoScrollInterval) {
      this.startAutoScroll();
    }
  }

  scrollLeft() {
    this.scroller.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    this.isPaused = true;
    this.stopAutoScroll();
  }

  scrollRight() {
    this.scroller.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    this.isPaused = true;
    this.stopAutoScroll();
  }
  resumeAutoScroll() {
    this.isPaused = false;
    this.startAutoScroll();
  }
}