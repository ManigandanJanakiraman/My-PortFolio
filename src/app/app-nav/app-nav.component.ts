import { Component, EventEmitter, Output, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioService } from '../portfolio.service';
import { CommonModule } from '@angular/common';
import '../interface'
@Component({
  selector: 'app-app-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    CommonModule,
  ],

  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss',
})
export class AppNavComponent {
  @Output() updateTheme = new EventEmitter<string>()
  data!: my_Data;
  themes!: string[]
  currentTheme: string = ""
  systemTheme: string = ""
  constructor(private pfService: PortfolioService) { }
  profileImagePath = 'https://lh3.googleusercontent.com/ogw/AF2bZyjowvj14sw-qUU5PLZWjgqoQ3jkPsVExTMV1rHAGGPp3GI=s32-c-mo';
  ngOnInit() {
    this.systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.currentTheme = "system"
    this.pfService.getData().subscribe({
      next: (response) => {
        this.data = response;
        console.log('this.data', this.data);
        this.themes = this.data.icons
        console.log('this.themes', this.themes);

      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  toggleTheme(theme: string): void {
    debugger
    this.currentTheme = theme
    const Theme = theme == "system" ? this.systemTheme : theme
    this.updateTheme.emit(Theme)
  }
}
