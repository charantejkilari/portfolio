// testimonials.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './testimonals.component.html', // Make sure path is correct
  styleUrls: ['./testimonals.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'Charan transformed our legacy system into a modern cloud-native application, while improving scalability. His expertise in Azure and .NET was invaluable to our project.',
      name: 'Yogesh Shukla',
      position: 'Associate Director at PwC',
      image: 'ys.jpeg'
    },
    {
      text: 'Working with charan on our Kubernetes migration was a pleasure. He not only delivered the project ahead of schedule but also mentored our team on cloud best practices. Highly recommended for any cloud development work.',
      name: 'Megan Gorski',
      position: 'IT Manager at Sodexo',
      image: 'mg.jpg'
    }
  ];
}