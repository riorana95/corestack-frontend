import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

/**
 * Minimal auth surface.
 *
 * No navbar, no app-shell chrome — just a branded background and a
 * `<router-outlet>` for the auth flow. Used by `/corestack/login`.
 * Keeping this surface bare prevents the previous bug where the
 * CoreStack `Navbar` (with logout button) was visible on the login
 * screen before the user was even authenticated.
 *
 * Route group: `/corestack/login`
 */
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
