import { Component, computed, signal, type Signal } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, NgIf],
})
export class AppComponent {
  isAdmin: Signal<boolean>;

  constructor(private authService: AuthService) {
    this.isAdmin = computed(() => authService.activePermission() === 'admin');
  }
}
