import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  icon: string;
  category: string;
  isImage?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  activeFilter: string = 'All';

  filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Others'];

  skills: Skill[] = [
    { name: 'Angular', icon: 'images/iconSkills/angularjs-plain.png', category: 'Frontend', isImage: true },
    { name: 'HTML5', icon: 'images/iconSkills/html5-original.png', category: 'Frontend', isImage: true },
    { name: 'CSS3', icon: 'images/iconSkills/css3-original.png', category: 'Frontend', isImage: true },
    { name: 'TypeScript', icon: 'images/iconSkills/typescript-original.png', category: 'Frontend', isImage: true },
    { name: 'JavaScript', icon: 'images/iconSkills/javascript-original.png', category: 'Frontend', isImage: true },
    { name: 'Responsive Design', icon: 'images/iconSkills/responsive-design.png', category: 'Frontend', isImage: true },
    { name: 'Java', icon: 'images/iconSkills/java-original.png', category: 'Backend', isImage: true },
    { name: 'Spring Boot', icon: 'images/iconSkills/spring-original.png', category: 'Backend', isImage: true },
    { name: 'Spring Security', icon: 'images/iconSkills/spring-security.png', category: 'Backend', isImage: true },
    { name: 'Microservices', icon: 'images/iconSkills/microservice.png', category: 'Backend', isImage: true },
    { name: 'REST API', icon: 'images/iconSkills/rest-api.png', category: 'Backend', isImage: true },
    { name: 'DevOps', icon: 'images/iconSkills/devops.png', category: 'Others', isImage: true },
    { name: 'Visual Studio Code', icon: 'images/iconSkills/vscode-original.png', category: 'Tools', isImage: true },
    { name: 'Visual Studio', icon: 'images/iconSkills/visualstudio-plain.png', category: 'Tools', isImage: true },
    { name: 'IntelliJ IDEA', icon: 'images/iconSkills/intellij-plain.png', category: 'Tools', isImage: true },
    { name: 'Git', icon: 'images/iconSkills/git.png', category: 'Tools', isImage: true },
    { name: 'Oracle', icon: 'images/iconSkills/oracle-original.png', category: 'Database', isImage: true },
    { name: 'MySQL', icon: 'images/iconSkills/mysql-original.png', category: 'Database', isImage: true },
    { name: 'MongoDB', icon: 'images/iconSkills/mongodb-original.png', category: 'Database', isImage: true }
  ];

  get filteredSkills(): Skill[] {
    if (this.activeFilter === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
