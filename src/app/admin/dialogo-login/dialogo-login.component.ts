import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { Validators } from '@angular/forms';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-dialogo-login',
  templateUrl: './dialogo-login.component.html',
  styleUrls: ['./dialogo-login.component.scss'],
})
export class DialogoLoginComponent {
  emailControl = new FormControl('', [Validators.required]);
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  authForm = new FormGroup({
    email: this.emailControl,
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    password: this.passwordControl,
  });

  emailChanges(): void {
    this.emailControl.valueChanges
      .pipe(
        tap((v) => {
          console.log(v);
        }),
        tap((v) => console.log(v))
      )
      .subscribe((valor) => console.log(valor));
  }
  constructor(private authService: AuthService) {}

  login(): Promise<Usuario> {
    return new Promise<Usuario>((resolve, reject) => {
      this.authService.login({
        ...(this.authForm.value as any),
      });
    });
  }
}
