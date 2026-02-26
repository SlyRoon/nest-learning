import { IEbook } from './ devices/ebook.interface';
import { ILaptop } from './ devices/laptop.interface';
import { INetbook } from './ devices/netbook.interface';
import { ISmartPhone } from './ devices/smartphone.interface';
import { Brand } from './brand.enum';

export interface TechFactory {
  readonly brand: Brand;
  createEbook(): IEbook;
  createSmartPhone(): ISmartPhone;
  createLaptop(): ILaptop;
  createNetBook(): INetbook;
}
