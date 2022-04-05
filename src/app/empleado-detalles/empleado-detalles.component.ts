import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id: any;
  empleado: Empleado = new Empleado();

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id)
    {
      this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe((data:Empleado)=>{
        this.empleado=data;
        swal(`Detalles del empleado ${this.empleado.nombre}`);
      });
    }
  }

}
