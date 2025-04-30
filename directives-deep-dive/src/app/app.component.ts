import { Component, computed, type Signal } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { AuthDirective } from './auth/auth.directive';
import { AuthService } from './auth/auth.service';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    AuthComponent,
    LearningResourcesComponent,
    AuthDirective,
    LogDirective,
  ],
})
export class AppComponent {
  isAdmin: Signal<boolean>;

  constructor(private authService: AuthService) {
    this.isAdmin = computed(() => authService.activePermission() === 'admin');
  }
}
