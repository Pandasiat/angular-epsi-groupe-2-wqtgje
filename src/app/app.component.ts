import { Component } from '@angular/core';
import {SessionService} from './core/services/session.service';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  signout() {
    // supprimer les données de sessions et retourner à la page de login
    this._snackBar.open("Deconnexion est réussie !", "💥", {
      duration: 4000,
    });
    this.router.navigate(['/auth/signin']).then(() => {
      this.sessionService.clear();
      AuthService.user = null;
    });
  }

}
