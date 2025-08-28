// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './project.component.html', // Make sure path is correct
  styleUrls: ['./project.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Powered ChatBot for Educational Institutions(Hackathon Winner)[2023]',
      description: 'Developed and deployed a ChatGPT-integrated chatbot for automating FAQs, password resets via OTP, and appointment scheduling.',
      technologies: ['.NET Core', 'Whatsapp API', 'ChatGPT', 'Prompt Engineering', 'SQL Server', 'Excel API and Automation'],
      // image: 'assets/project1.jpg',
      demoLink: 'https://lnkd.in/gjV5T53R',
      // codeLink: 'https://github.com/example'
    },
    {
      title: 'Auto Provisioning Assistant[2023]',
      description: 'A fully serverless e-commerce backend using Azure Functions and Durable Entities for order processing and inventory management.',
      technologies: ['.Net 6', 'Angular', 'ChatGPT' , 'Prompt Engineering', 'Azure Devops', 'PowerShell', 'C#', 'SQL Server', 'Azure API Management'],
      // image: 'assets/project2.jpg',
      demoLink: 'https://www.linkedin.com/posts/charantejakilari_pwcindia-onecloud-ai-activity-7072465365384978433-fWt3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJx-3UBIh7bF4ODsb2yGLnvKnEIWrDKgfc'
    },
    {
      title: 'Smart Hire[2024]',
      description: 'Automate student assignment to departments by uploading Excel data. Enable criteria flexibility with customizable department-specific requirements (e.g., minimum/maximum number of employees). Manage student roles, pay, and hire status efficiently via an admin panel.',
      technologies: ['.Net 8', 'Angular', 'SQL Server', 'EF Core', 'OAuth 2.0'],
      image: 'assets/project3.jpg',
      // codeLink: 'https://github.com/example'
    },
    {
      title: 'Anti Cheat Quiz Application[2021]',
      description: 'Developed during the COVID-19 lockdown to prevent online exam cheating. Restricted copy & paste, auto submitted the quiz on multiple tab switches, and updated scores in real time. Faculties(admins) could manage questions and view results graphically.',
      technologies: ['firebase', 'html', 'css', 'javascript'],
      image: 'assets/project3.jpg',
      codeLink: 'https://github.com/charantejkilari/AntiCheatQuizApplication_-firebase-'
    },
    {
      title: 'Faculty Research Management System[2020]',
      description: 'This application helps faculty to manage and track their progress on research and update the latest papers. This also contains student portal where every student can know about faculties and also can download their research papers.',
      technologies: ['html', 'css', 'bootstrap', 'php'],
      image: 'assets/project3.jpg',
      codeLink: 'https://github.com/charantejkilari/FacultyResearchManagementSystem'
    }
  ];
}

//test comment to check github pages