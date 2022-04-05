import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anuncio: any = {preca: 'Todos los derechos reservados por:'};
  public autor: any = {nombre1: 'Julio', apellido1: 'González', 
                      nombre2: 'Leonardo', apellido2: 'Marcelo',
                      nombre3: 'Arturo', apellido3: 'Ríos'};
  constructor() { }

  ngOnInit(): void {
  }

}
