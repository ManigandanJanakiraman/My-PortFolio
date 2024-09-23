import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavComponent } from "./app-nav/app-nav.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
  constructor() { }

  ngOnInit() {
    this.toggleTheme('dark')
  }

  toggleTheme(event: string) {
    debugger
    if (event == 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else if (event == 'system') {
      this.applySystemTheme()
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  applySystemTheme() {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.toggleTheme(systemTheme);
  }
}
