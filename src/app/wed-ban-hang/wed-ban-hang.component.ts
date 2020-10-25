import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-wed-ban-hang',
  templateUrl: './wed-ban-hang.component.html',
  styleUrls: ['./wed-ban-hang.component.scss'],
})
export class WedBanHangComponent implements OnInit, DoCheck {
  smartPhones: {}[] = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      invetory: 10,
      rating: 3,
      soLuong: 1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      image:
        'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      invetory: 15,
      rating: 5,
      soLuong: 1,
    },
    {
      id: 3,
      name: 'Iphone XS',
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-195420-015457-400x400.jpg',
      description: 'Sản phẩm của US',
      price: 600,
      invetory: 20,
      rating: 4,
      soLuong: 1,
    },
  ];

  gioHang = [];
  tongTien: number;

  sortProduct() {
    let newList: any = this.smartPhones.sort((spTiepTheo: any, sp: any) => {
      let tenSP = sp.name.toLowerCase();
      let tenSPTiepTheo = spTiepTheo.name.toLowerCase();
      if (tenSPTiepTheo > tenSP) {
        return 1;
      }
      if (tenSPTiepTheo < tenSP) {
        return -1;
      }
    });
    console.log(newList);
  }

  takeProduct(sp: any) {
    let newsp = { ...sp };
    let index = this.gioHang.findIndex((item) => item.id === sp.id);
    if (index < 0) {
      this.gioHang.push(newsp);
    }
    if (index >= 0) {
      this.gioHang[index].soLuong += 1;
    }
  }

  tangGiam(sp, tangGiam) {
    if (tangGiam) {
      sp.soLuong += 1;
    } else {
      if (sp.soLuong > 1) {
        sp.soLuong -= 1;
      } else {
        alert('Số lượng sản phẩm phải lớn hơn 1');
      }
    }
  }

  delProduct(sp) {
    let index = this.gioHang.findIndex((item) => item.id === sp.id);
    if (index !== -1) {
      this.gioHang.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.tongTien = this.gioHang.reduce((tt, item, index) => {
      return (tt += item.price * item.soLuong);
    }, 0);
  }
}
