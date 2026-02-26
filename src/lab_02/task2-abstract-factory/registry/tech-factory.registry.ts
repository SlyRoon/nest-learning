import { Injectable } from '@nestjs/common';
import { BalaxyFactory } from '../factories/balaxy.factory';
import { IproneFactory } from '../factories/iprone.factory';
import { KiaomiFactory } from '../factories/kiaomi.factory';
import { TechFactory } from '../contracts/tech-factory.interface';
import { Brand } from '../contracts/brand.enum';
@Injectable()
export class TechFactoryRegistry {
  constructor(
    private readonly balaxy: BalaxyFactory,
    private readonly iprone: IproneFactory,
    private readonly kiaomi: KiaomiFactory,
  ) {}
  getFactory(brand: Brand): TechFactory {
    switch (brand) {
      case Brand.Balaxy:
        return this.balaxy;
      case Brand.IProne:
        return this.iprone;
      case Brand.Kiaomi:
        return this.kiaomi;
    }
  }
}
