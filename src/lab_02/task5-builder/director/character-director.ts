import { EnemyBuilder } from '../builders/enemy.builder';
import { HeroBuilder } from '../builders/hero.builder';
import { GameCharacter } from '../models/game-character';

export class CharacterDirector {
  public createDreamHero(builder: HeroBuilder): GameCharacter {
    return builder
      .reset()
      .setName('Aeloria Dawnshield')
      .setGender('Female')
      .setHeightCm(178)
      .setBodyType('Athletic')
      .setHairColor('Silver')
      .setEyeColor('Emerald')
      .setArmor('Radiant Plate')
      .setWeapon('Sunblade Spear')
      .setCompanion('Sky Wolf "Nox"')
      .addInventoryItem('Healing Potion')
      .addInventoryItem('Ancient Map')
      .addSkill('Light Barrier')
      .addSkill('Tactical Leadership')
      .protectCitizens()
      .addGoodDeed('Restored peace in three kingdoms')
      .build();
  }

  public createMostDangerousEnemy(builder: EnemyBuilder): GameCharacter {
    return builder
      .reset()
      .setName('Morvath the Ash Tyrant')
      .setGender('Male')
      .setHeightCm(205)
      .setBodyType('Massive')
      .setHairColor('Black')
      .setEyeColor('Crimson')
      .setArmor('Obsidian Carapace')
      .setWeapon('Soul Reaver Axe')
      .setCompanion('Void Drake "Skarn"')
      .addInventoryItem('Cursed Relic')
      .addInventoryItem('Shadow Crystal')
      .addSkill('Fear Projection')
      .addSkill('Fortress Breaker')
      .spreadChaos()
      .addEvilDeed('Captured and corrupted ancient shrines')
      .build();
  }
}
