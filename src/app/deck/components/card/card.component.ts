import { Component, OnInit, Input } from '@angular/core';
import { ICard } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  @Input() isDeck = false;
  constructor() { }

  ngOnInit() {
  }

}
