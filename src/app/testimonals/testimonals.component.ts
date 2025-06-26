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
      text: 'Charan quickly became an invaluable part of our team at Sodexo. His problem solving skills, professionalism, and initiative stood out from day one.',
      name: 'Megan Gorski',
      position: 'IT Manager at Sodexo',
      image: 'mg.jpg'
    }
  ];
}