import { Component, Input, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-booked-chair-component',
  templateUrl: './booked-chair-component.component.html',
  styleUrls: ['./booked-chair-component.component.scss'],
})
export class BookedChairComponentComponent implements OnInit {
  
  @Input() takeChair:any;
  delChair(value){
    const index = this.takeChair.findIndex((i)=>i.SoGhe === value.SoGhe);
    value.TrangThai = false;
    this.takeChair.splice(index,1);
  }
  
  constructor() {}

  ngOnInit(): void {}
}
