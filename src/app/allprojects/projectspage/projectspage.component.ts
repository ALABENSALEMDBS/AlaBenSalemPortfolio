import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  imports: [CommonModule, RouterLink],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css',
  standalone: true
})
export class ProjectspageComponent {
  selectedFilter: string = 'all';

  projects: Project[] = [
    {
      titre: 'Signature électronique Angular',
      sujet: "Développement du front-end d'une mini application web avec Angular. Elle permet de créer et personnaliser une signature électronique de manière simple et rapide.",
      image: 'images/imgprojet1.png',
      skillLearned: "Ce projet m'a permis d'apprendre à utiliser un serveur de base de données local avec Angular afin de tester la logique front-end. J'ai exploité json-server (json-server --watch db.json) pour simuler une API avant l'intégration d'un système de base de données externe.",
      lien: '',
      type: 'front'
    },

    {
      titre: 'Pipeline CI/CD DevOps',
      sujet: "Mise en place d’un pipeline CI/CD DevOps utilisant Jenkins, GitHub, SonarQube et Docker. Automatisation de la construction, des tests et du déploiement des applications sur Ubuntu WSL.",
      image: 'images/imgprojet4.png',
      skillLearned: "Ce projet m’a permis de la mise en place d’un pipeline CI/CD DevOps avec automatisation des tests et du déploiement.",
      lien: '',
      type: 'devops'
    },


     {
      titre: 'Plateforme football : entraînements, tactiques et analyses',
      sujet: "Projet full-stack Spring Boot Angular réalisé en groupe de 5 personnes, avec collaboration active et répartition des rôles. J’ai développé les deux modules Tactiques et Formations de la plateforme football, côté front-end et back-end.",
      image: 'images/imgprojet5.png',
      skillLearned: "Ce projet m’a permis d’acquérir de l’expérience en travail d’équipe, d’intégrer le front-end avec le back-end et de maîtriser la consommation d’API et de créer un modèle d’IA pour la prédiction.",
      lien: '',
      type: 'fullstack'
    },

    {
      titre: 'Site web – Portfolio',
      sujet: "Développement d'un site web Front-end pour un portfolio de Designer graphique, en transformant les maquettes Figma en interface fonctionnelle. Mise en œuvre d'un design moderne, responsive et attractif, optimisé pour l'expérience utilisateur.",
      image: 'images/imgprojet6.png',
      skillLearned: "Ce projet m'a permis de transformer un design Figma en composants Angular et d'intégrer l'API EmailJS pour l'envoi d'e-mails et de déployer le site via GitHub et Netlify.",
      type: 'front',
      lien: 'https://yassine-ben-salem.netlify.app'
    },

    {
      titre: 'Application Gestion Foyer',
      sujet: "Développement du backend d’une application de gestion de foyer avec Spring Boot.Intégration d’une base de données MySQL pour gérer les utilisateurs, les ressources et les opérations quotidiennes.",
      image: 'images/imgprojet2.png',
      skillLearned: "Ce projet m’a permis d’apprendre à utiliser l’architecture SOA, à créer et tester des API avec Postman, et à rédiger leur documentation avec Swagger.",
      lien: '',
      type: 'back'
    },

    {
      titre: 'Gestion Bibliothèque Symfony',
      sujet: "Développement full stack d’une application web de gestion de bibliothèque avec Symfony. Intégration d’une base de données MySQL pour gérer les livres, les utilisateurs et les emprunts.",
      image: 'images/imgprojet3.png',
      skillLearned: "Ce projet m’a permis de comprendre et d’appliquer l’architecture monolithique, où le front-end et le back-end sont intégrés dans une seule application web complète.",
      lien: '',
      type: 'fullstack'
    },

    {
      titre: 'Mini projet Microservices avec Spring Boot',
      sujet: "Développement d’un mini projet microservices avec Spring Boot, intégrant un API Gateway, Eureka et un serveur de configuration centralisé. Mise en place de l’authentification sécurisée avec Keycloak.",
      image: 'images/imgprojet8.png',
      skillLearned: "Ce projet m’a permis d’apprendre à concevoir et développer une architecture microservices, à mettre en place un API Gateway et la découverte de services avec Eureka, et à implémenter une authentification sécurisée avec Keycloak.",
      lien: '',
      type: 'back'
    },

    {
      titre: 'Amélioration de gestion de réclamation en ligne tunisie telecom',
      sujet: "Projet de stage d’ingénieur full-stack visant à refondre et améliorer la rubrique de réclamation en ligne, côté front-end et back-end. Mise en place de fonctionnalités améliorées, optimisation de l’interface utilisateur et gestion efficace des données.",
      image: 'images/imgprojet7.png',
      skillLearned: "Ce projet m’a permis d’utiliser Spring Security pour sécuriser mes endpoints et renforcer la sécurité de l’application, et de mettre en place un système d’envoi d’e-mails pour les notifications et la gestion des réclamations.",
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
