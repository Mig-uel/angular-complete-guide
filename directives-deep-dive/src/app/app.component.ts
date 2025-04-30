import { Component, computed, type Signal } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent],
})
export class AppComponent {
  isAdmin: Signal<boolean>;

  constructor(private authService: AuthService) {
    this.isAdmin = computed(() => authService.activePermission() === 'admin');
  }
}
