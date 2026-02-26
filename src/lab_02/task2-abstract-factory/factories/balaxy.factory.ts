import { Injectable } from '@nestjs/common';
import { TechFactory } from '../contracts/tech-factory.interface';
import { Brand } from '../contracts/brand.enum';
import { ILaptop } from '../contracts/ devices/laptop.interface';
import { BalaxyLaptop } from '../products/balaxy/balaxy.laptop';
import { IEbook } from '../contracts/ devices/ebook.interface';
import { BalaxyEbook } from '../products/balaxy/balaxy.ebook';
import { INetbook } from '../contracts/ devices/netbook.interface';
import { BalaxyNetBook } from '../products/balaxy/balaxy.netbook';
import { ISmartPhone } from '../contracts/ devices/smartphone.interface';
import { BalaxySmartPhone } from '../products/balaxy/balaxy.smartphone';

@Injectable()
export class BalaxyFactory implements TechFactory {
  readonly brand: Brand = Brand.Balaxy;

  createLaptop(): ILaptop {
    return new BalaxyLaptop();
  }
  createEbook(): IEbook {
    return new BalaxyEbook();
  }
  createNetBook(): INetbook {
    return new BalaxyNetBook();
  }
  createSmartPhone(): ISmartPhone {
    return new BalaxySmartPhone();
  }
}
