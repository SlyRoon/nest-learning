import { GameCharacter } from '../models/game-character';

export interface CharacterBuilder {
  reset(): this;
  setName(name: string): this;
  setGender(gender: string): this;
  setHeightCm(heightCm: number): this;
  setBodyType(bodyType: string): this;
  setHairColor(hairColor: string): this;
  setEyeColor(eyeColor: string): this;
  setArmor(armor: string): this;
  setWeapon(weapon: string): this;
  addInventoryItem(item: string): this;
  addSkill(skill: string): this;
  setCompanion(companion: string): this;
  build(): GameCharacter;
}
