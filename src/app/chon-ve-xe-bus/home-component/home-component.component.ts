import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent implements OnInit {
  listChair: {}[] = [];

  constructor() {}

  takeChair(prod) {
    prod.TrangThai = true;
    const index = this.listChair.findIndex((item:any) => item.SoGhe === prod.SoGhe);
    index === -1 && this.listChair.push(prod);
    console.log(this.listChair);
  }

  ngOnInit(): void {}
}
