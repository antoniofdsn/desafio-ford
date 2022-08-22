import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
  title: string;
  messageTitle: string;
  message?: string;

  constructor() { }

  ngOnInit(): void {
    this.title = `Sistema de dados FORD`;
    this.messageTitle = `Seja bem vindo(a)!`;
  }

}
