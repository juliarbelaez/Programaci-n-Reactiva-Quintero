import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/core/services/estudiantes.service';
import { Observable, of } from 'rxjs';
import { Student } from '../../core/services/estudiantes.service';

@Component({
  selector: 'app-listaestudiantes',
  templateUrl: './listaestudiantes.component.html',
  styleUrls: ['./listaestudiantes.component.scss'],
})
export class ListaestudiantesComponent implements OnInit {
  public estudiantes$: Observable<Student[]> = of([]);

  constructor(private estudianteService: EstudiantesService) {}

  ngOnInit() {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantes();
  }
}
