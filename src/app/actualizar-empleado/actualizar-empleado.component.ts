import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado: Empleado =new Empleado();
  id: number;

  constructor(private router: Router, private empleadoServicio: EmpleadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.empleado)
    this.id = this.route.snapshot.params['id'];
    if(this.id)
    {
      this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe((data:Empleado)=>{
        this.empleado=data;
      });
    }
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato=> {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error=> console.log(error));
    swal(
      'Actualizado con éxito',
      'El empleado ha sido actualizado con éxito',
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
