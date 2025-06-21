// experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'Aug/2024 - Present',
      position: 'Student Intern',
      company: 'Sodexo',
      description: 'As an intern at Sodexo, I provided IT support by troubleshooting software and system issues to ensure continuous operations. I enhanced system reliability by optimizing queries, which reduced query response time by 25%. Additionally, I developed internal applications for inventory management and reporting using .NET Core, Angular, and SQL Server. I also automated repetitive tasks using scripting tools, significantly reducing manual effort and improving overall operational efficiency. Throughout my tenure, I documented solutions and best practices to streamline future issue resolution.',
      technologies: ['HTML', 'CSS', 'JavaScript','PowerShell']
    },
    {
      date: 'Jan/2022 - Dec/2024',
      position: 'Technology Consulting Associate',
      company: 'PricewaterhouseCoopers(PwC)',
      description: 'led a team under the guidance of a director to develop an AI-powered Auto Provisioning Assistant leveraging ChatGPT. This solution automated cloud application deployment and reduced provisioning time by 40%, earning recognition from the Microsoft Jury for its innovation and impact. I built responsive and accessible user interfaces using Bootstrap and Angular to enhance user experience. I actively utilized Microsoft Azure services for real-time cloud integration and infrastructure management. My responsibilities included managing version control with Git, resolving merge conflicts, and maintaining a clean codebase. I also automated deployment workflows using CI/CD pipelines in Azure, reducing deployment time by 40%. These automation efforts led to a 30% increase in operational efficiency and a 40% reduction in human errors. I was honored with the Dazzling Debut award for my contributions.',
      technologies: ['C#', '.Net', , 'Angular', 'EF Core', 'OAuth 2.0', 'CI/CD' ,'Azure', 'Generative AI', 'PowerShell', 'SQL Server']
    }
  ];
}