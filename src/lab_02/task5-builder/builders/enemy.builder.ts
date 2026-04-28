import { CharacterBuilder } from './character-builder.interface';
import { GameCharacter } from '../models/game-character';

export class EnemyBuilder implements CharacterBuilder {
  private enemy = new GameCharacter();

  constructor() {
    this.enemy.role = 'Enemy';
  }

  setName(name: string): this {
    this.enemy.name = name;
    return this;
  }

  setHeight(height: number): this {
    this.enemy.height = height;
    return this;
  }

  setBodyType(bodyType: string): this {
    this.enemy.bodyType = bodyType;
    return this;
  }

  setHairColor(hairColor: string): this {
    this.enemy.hairColor = hairColor;
    return this;
  }

  setEyeColor(eyeColor: string): this {
    this.enemy.eyeColor = eyeColor;
    return this;
  }

  setClothes(clothes: string): this {
    this.enemy.clothes = clothes;
    return this;
  }

  setWeapon(weapon: string): this {
    this.enemy.weapon = weapon;
    return this;
  }

  addInventoryItem(item: string): this {
    this.enemy.inventory.push(item);
    return this;
  }

  addEvilDeed(deed: string): this {
    this.enemy.evilDeeds.push(deed);
    return this;
  }

  build(): GameCharacter {
    return this.enemy;
  }
}
