import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {


  empleado: Empleado =new Empleado();

  constructor(private empleadoServicio: EmpleadoService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.empleado);
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato=> {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error=> console.log(error));
    swal(
      'Agregado con éxito',
      'El empleado ha sido agregado con éxito',
      'success'
    );
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
