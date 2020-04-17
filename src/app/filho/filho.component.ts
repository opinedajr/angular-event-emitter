import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
     console.log('Objeto RECEBIDO', this.recebeFamilia);
     //this.feedback();
  }

  feedback() {

    let novaFamilia: Object[];

    novaFamilia = [
      {"nome": "Raphella", "sobreNome": "Souza"}
    ];

    console.log('Resposta para App component', this.respostaFamilia.emit(novaFamilia));
  }

}