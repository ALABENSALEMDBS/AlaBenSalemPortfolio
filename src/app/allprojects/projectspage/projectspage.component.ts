import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  titre: string;
  sujet: string;
  image: string;
  skillLearned: string;
  lien: string;
  type: 'front' | 'back' | 'fullstack' | 'devops';
}

@Component({
  selector: 'app-projectspage',
  imports: [CommonModule, RouterLink,TranslateModule],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css',
  standalone: true
})
export class ProjectspageComponent {
  selectedFilter: string = 'all';

  projects: Project[] = [
    {
      titre: 'allprojects.Projects-List.0.titre',
      sujet: "allprojects.Projects-List.0.sujet",
      image: 'images/imgprojet1.png',
      skillLearned: "allprojects.Projects-List.0.skillLearned",
      lien: '',
      type: 'front'
    },

    {
      titre: 'allprojects.Projects-List.1.titre',
      sujet: "allprojects.Projects-List.1.sujet",
      image: 'images/imgprojet4.png',
      skillLearned: "allprojects.Projects-List.1.skillLearned",
      lien: '',
      type: 'devops'
    },


     {
      titre: 'allprojects.Projects-List.2.titre',
      sujet: "allprojects.Projects-List.2.sujet",
      image: 'images/imgprojet5.png',
      skillLearned: "allprojects.Projects-List.2.skillLearned",
      lien: '',
      type: 'fullstack'
    },

    {
      titre: 'allprojects.Projects-List.3.titre',
      sujet: "allprojects.Projects-List.3.sujet",
      image: 'images/imgprojet6.png',
      skillLearned: "allprojects.Projects-List.3.skillLearned",
      type: 'front',
      lien: 'https://yassine-ben-salem.netlify.app'
    },

    {
      titre: 'allprojects.Projects-List.4.titre',
      sujet: "allprojects.Projects-List.4.sujet",
      image: 'images/imgprojet2.png',
      skillLearned: "allprojects.Projects-List.4.skillLearned",
      lien: '',
      type: 'back'
    },

    {
      titre: 'allprojects.Projects-List.5.titre',
      sujet: "allprojects.Projects-List.5.sujet",
      image: 'images/imgprojet3.png',
      skillLearned: "allprojects.Projects-List.5.skillLearned",
      lien: '',
      type: 'fullstack'
    },

    {
      titre: 'allprojects.Projects-List.6.titre',
      sujet: "allprojects.Projects-List.6.sujet",
      image: 'images/imgprojet8.png',
      skillLearned: "allprojects.Projects-List.6.skillLearned",
      lien: '',
      type: 'back'
    },

    {
      titre: 'allprojects.Projects-List.7.titre',
      sujet: "allprojects.Projects-List.7.sujet",
      image: 'images/imgprojet7.png',
      skillLearned: "allprojects.Projects-List.7.skillLearned",
      lien: '',
      type: 'fullstack'
    },
  ];

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.type === this.selectedFilter);
  }

  filterProjects(type: string): void {
    this.selectedFilter = type;
  }
}
