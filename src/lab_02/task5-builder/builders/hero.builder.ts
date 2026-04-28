import { CharacterBuilder } from './character-builder.interface';
import { GameCharacter } from '../models/game-character';

export class HeroBuilder implements CharacterBuilder {
  private hero = new GameCharacter();

  constructor() {
    this.hero.role = 'Hero';
  }

  setName(name: string): this {
    this.hero.name = name;
    return this;
  }

  setHeight(height: number): this {
    this.hero.height = height;
    return this;
  }

  setBodyType(bodyType: string): this {
    this.hero.bodyType = bodyType;
    return this;
  }

  setHairColor(hairColor: string): this {
    this.hero.hairColor = hairColor;
    return this;
  }

  setEyeColor(eyeColor: string): this {
    this.hero.eyeColor = eyeColor;
    return this;
  }

  setClothes(clothes: string): this {
    this.hero.clothes = clothes;
    return this;
  }

  setWeapon(weapon: string): this {
    this.hero.weapon = weapon;
    return this;
  }

  addInventoryItem(item: string): this {
    this.hero.inventory.push(item);
    return this;
  }

  addGoodDeed(deed: string): this {
    this.hero.goodDeeds.push(deed);
    return this;
  }

  build(): GameCharacter {
    return this.hero;
  }
}
