import { BaseCharacterBuilder } from './base-character.builder';

export class HeroBuilder extends BaseCharacterBuilder {
  constructor() {
    super('Hero', 'Good');
  }

  public addGoodDeed(deed: string): this {
    this.character.goodDeeds.push(deed);
    return this;
  }

  public protectCitizens(): this {
    return this.addGoodDeed('Protected citizens from danger').addSkill(
      'Guardian Aura',
    );
  }
}
