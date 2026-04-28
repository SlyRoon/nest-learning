import { GameCharacter } from '../models/game-character';

export interface CharacterBuilder {
  setName(name: string): this;
  setHeight(height: number): this;
  setBodyType(bodyType: string): this;
  setHairColor(hairColor: string): this;
  setEyeColor(eyeColor: string): this;
  setClothes(clothes: string): this;
  setWeapon(weapon: string): this;
  addInventoryItem(item: string): this;
  build(): GameCharacter;
}
