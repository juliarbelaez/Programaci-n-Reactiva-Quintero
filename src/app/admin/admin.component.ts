import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoLoginComponent } from './dialogo-login/dialogo-login.component';
import { AuthService } from '../core/services/auth.service';
import { Usuario } from '../core/models/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnDestroy {
  showFiller = false;

  authUser: Usuario | null = null;
  suscriptionAuthUser: Subscription | null = null;
  public mostrarTexto = false;

  constructor(public dialog: MatDialog, private authService: AuthService) {
    this.authService
      .obtenerUsuarioAutenticado()
      .subscribe((usuario) => (this.authUser = usuario));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogoLoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`El diálogo fue cerrado. Resultado: ${result}`);
      this.mostrarTexto = true;
    });
  }

  ngOnDestroy(): void {
    this.suscriptionAuthUser?.unsubscribe();
  }
}
