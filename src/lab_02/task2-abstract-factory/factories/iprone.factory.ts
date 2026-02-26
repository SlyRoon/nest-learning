import { Injectable } from '@nestjs/common';
import { TechFactory } from '../contracts/tech-factory.interface';
import { Brand } from '../contracts/brand.enum';
import { ILaptop } from '../contracts/ devices/laptop.interface';
import { IproneLaptop } from '../products/iphone/iprone.laptop';
import { IEbook } from '../contracts/ devices/ebook.interface';
import { IproneEbook } from '../products/iphone/iprone.ebook';
import { INetbook } from '../contracts/ devices/netbook.interface';
import { IproneNetBook } from '../products/iphone/iprone.netbook';
import { ISmartPhone } from '../contracts/ devices/smartphone.interface';
import { IproneSmartPhone } from '../products/iphone/iprone.smartphone';

@Injectable()
export class IproneFactory implements TechFactory {
  readonly brand: Brand = Brand.IProne;

  createLaptop(): ILaptop {
    return new IproneLaptop();
  }
  createEbook(): IEbook {
    return new IproneEbook();
  }
  createNetBook(): INetbook {
    return new IproneNetBook();
  }
  createSmartPhone(): ISmartPhone {
    return new IproneSmartPhone();
  }
}
