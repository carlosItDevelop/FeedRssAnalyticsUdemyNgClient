import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  title: string = 'Web Scraping com Asp.Net Core & Angular';
  showDiv: boolean = true;
  btnTitle: string = 'Ocultar Div';
  /* ---/ ---------------------- */
  contadorClique: number = 0;
  urlImage: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';
  altura: number = 60;
  largura: number = 60;
  alt: string = 'Logo do Angular';
  nome: string = 'Edmund Burker';
  status: string = 'Normal';
  /* ---/ ---------------------- */
  progressBar: Array<string> = [];
  sliceBar: string = 'width: 20px; height: 20px; background-color: red;';

  constructor() {}

  ngOnInit(): void {
    this.mostrarDiv();
  }

  incrementarclique(): void {
    this.contadorClique++;
    if (this.contadorClique <= 12) this.progressBar.push(this.sliceBar);

    this.imageLenghtControl('subindo');
    this.metricaQualquer();
  }

  decrementarClique(): void {
    this.contadorClique--;
    if (this.progressBar.length > 0 && this.contadorClique < 12)
      this.progressBar.pop();

    this.imageLenghtControl('descendo');
    this.metricaQualquer();
  }

  zerarClique(): void {
    this.contadorClique = 0;
    this.nome = '';
    this.progressBar = [];

    this.altura = 60;
    this.largura = 60;
    this.status = 'Normal';
    this.ngClassBtn = 'btn btn-info btn-lg';
  }

  ngClassBtn: string = 'btn btn-info btn-lg';

  setNgClassBtn(ngClassBtn: string): void {
    this.ngClassBtn = ngClassBtn;
  }

  metricaQualquer(): void {
    if (this.contadorClique >= 9) {
      this.status = 'Crítico';
      this.setNgClassBtn('btn btn-danger btn-lg');
    } else if (this.contadorClique >= 5) {
      this.status = 'Alto';
      this.setNgClassBtn('btn btn-warning btn-lg');
    } else if (this.contadorClique >= 3) {
      this.status = 'Irregular';
      this.setNgClassBtn('btn btn-success btn-lg');
    } else {
      this.status = 'Normal';
      this.setNgClassBtn('btn btn-info btn-lg');
    }
  }

  imageLenghtControl(direcao: string): void {
    if (this.contadorClique > 0 && this.contadorClique < 11) {
      if (direcao === 'subindo') {
        this.altura += 20;
        this.largura += 20;
      } else {
        this.altura -= 20;
        this.largura -= 20;
      }
    }
  }

  mostrarDiv(): void {
    this.showDiv = !this.showDiv;
  }

  toggleVisibleDiv() {
    this.mostrarDiv();
    if (this.showDiv) {
      this.btnTitle = 'Ocultar Div';
    } else {
      this.btnTitle = 'Mostrar Div';
    }
  }
}
