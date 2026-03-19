import { BaseCharacterBuilder } from './base-character.builder';

export class EnemyBuilder extends BaseCharacterBuilder {
  constructor() {
    super('Enemy', 'Evil');
  }

  public addEvilDeed(deed: string): this {
    this.character.evilDeeds.push(deed);
    return this;
  }

  public spreadChaos(): this {
    return this.addEvilDeed('Spread chaos across the realm').addSkill(
      'Dark Surge',
    );
  }
}
