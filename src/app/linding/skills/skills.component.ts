import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  activeFilter: string = 'All';

  filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Others'];

  skills: Skill[] = [
    { name: 'Angular', icon: '🅰️', category: 'Frontend' },
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend' },
    { name: 'JavaScript', icon: '📜', category: 'Frontend' },
    { name: 'Responsive Design', icon: '📱', category: 'Frontend' },
    { name: 'Java', icon: '☕', category: 'Backend' },
    { name: 'Spring Boot', icon: '🍃', category: 'Backend' },
    { name: 'Spring Security', icon: '🔒', category: 'Backend' },
    { name: 'Microservices', icon: '⚙️', category: 'Backend' },
    { name: 'REST API', icon: '🔌', category: 'Backend' },
    { name: 'DevOps', icon: '🚀', category: 'Others' },
    { name: 'Visual Studio Code', icon: '💻', category: 'Tools' },
    { name: 'Visual Studio', icon: '🖥️', category: 'Tools' },
    { name: 'IntelliJ IDEA', icon: '🧠', category: 'Tools' },
    { name: 'Git', icon: '🌿', category: 'Tools' },
    { name: 'Oracle', icon: '🗄️', category: 'Database' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' }
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
