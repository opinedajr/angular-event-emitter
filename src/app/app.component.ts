import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  name = 'Angular';
  familia: Object[];
  familiaFiltrada: Object[];

  constructor() {
      this.familia = [
        {
          nome: 'Vitor',
          sobreNome: 'Borges'
        },
        {
          nome: 'Emerson',
          sobreNome: 'Daniel'
        },        
        {
          nome: 'Raphella',
          sobreNome: "Souza"
        },
        {
          nome: 'Thiago',
          sobreNome: 'Contre!'
        }
      ];

      this.familiaFiltrada = this.familia;
    }

     ngOnInit() {       
        console.log('Objeto original', this.familia);
    }

    // função para receber emit Output do Filho
    reciverFeedback(respostaFilho) {
      
      console.log('Objeto Filtrado', respostaFilho);
      this.familiaFiltrada = respostaFilho;           
    }
}
