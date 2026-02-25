import { IEbook } from './ devices/ebook.interface';
import { ILaptop } from './ devices/laptop.interface';
import { INetbook } from './ devices/netbook.interface';
import { ISmartPhone } from './ devices/smartphone.interface';

export interface TechFactory {
  readonly brand: string;
  createEbook(): IEbook;
  createSmartPhone(): ISmartPhone;
  createLaptop(): ILaptop;
  createNetBook(): INetbook;
}
