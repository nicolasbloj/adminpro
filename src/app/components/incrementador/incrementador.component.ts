import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild("txtProgress") txtProgress: ElementRef


  @Input("nombre")
  leyenda = 'Leyenda';

  @Input()
  progreso = 10;

  @Output()
  cambioValor = new EventEmitter<number>();

  constructor() {
    //console.log(this.progreso);
  }

  ngOnInit() {
    //console.log(this.progreso);

  }

  onChange(newValue) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(elemHTML.value);

    //console.log(this.txtProgress.value);
    // error en firefox  ?

    if (newValue) {
      if (newValue < 0) {
        this.progreso = 0

      } else {
        if (newValue >= 100) {
          this.progreso = 100;
        }
      }
    } else {
      this.progreso = 0;
    }

    //elemHTML.value = Number(this.progreso);
    //elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    // de esta forma no tendremos problema con diferenciar el elemento padre que lo contiene.

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number): void {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    } else if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);


    this.txtProgress.nativeElement.focus();
  }

}
