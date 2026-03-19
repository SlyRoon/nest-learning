import {
  Alignment,
  CharacterRole,
  GameCharacter,
} from '../models/game-character';
import { CharacterBuilder } from './character-builder.interface';

export abstract class BaseCharacterBuilder implements CharacterBuilder {
  protected character!: GameCharacter;

  protected constructor(
    private readonly role: CharacterRole,
    private readonly alignment: Alignment,
  ) {
    this.reset();
  }

  public reset(): this {
    this.character = {
      name: 'Unnamed',
      role: this.role,
      gender: 'Unknown',
      heightCm: 170,
      bodyType: 'Average',
      hairColor: 'Brown',
      eyeColor: 'Brown',
      armor: 'Cloth',
      weapon: 'None',
      inventory: [],
      skills: [],
      companion: undefined,
      goodDeeds: [],
      evilDeeds: [],
      alignment: this.alignment,
    };

    return this;
  }

  public setName(name: string): this {
    this.character.name = name;
    return this;
  }

  public setGender(gender: string): this {
    this.character.gender = gender;
    return this;
  }

  public setHeightCm(heightCm: number): this {
    this.character.heightCm = heightCm;
    return this;
  }

  public setBodyType(bodyType: string): this {
    this.character.bodyType = bodyType;
    return this;
  }

  public setHairColor(hairColor: string): this {
    this.character.hairColor = hairColor;
    return this;
  }

  public setEyeColor(eyeColor: string): this {
    this.character.eyeColor = eyeColor;
    return this;
  }

  public setArmor(armor: string): this {
    this.character.armor = armor;
    return this;
  }

  public setWeapon(weapon: string): this {
    this.character.weapon = weapon;
    return this;
  }

  public addInventoryItem(item: string): this {
    this.character.inventory.push(item);
    return this;
  }

  public addSkill(skill: string): this {
    this.character.skills.push(skill);
    return this;
  }

  public setCompanion(companion: string): this {
    this.character.companion = companion;
    return this;
  }

  public build(): GameCharacter {
    const result: GameCharacter = {
      ...this.character,
      inventory: [...this.character.inventory],
      skills: [...this.character.skills],
      goodDeeds: [...this.character.goodDeeds],
      evilDeeds: [...this.character.evilDeeds],
    };

    this.reset();
    return result;
  }
}
