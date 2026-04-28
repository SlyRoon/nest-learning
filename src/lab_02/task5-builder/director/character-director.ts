import { EnemyBuilder } from '../builders/enemy.builder';
import { HeroBuilder } from '../builders/hero.builder';
import { GameCharacter } from '../models/game-character';

export class CharacterDirector {
  createHero(builder: HeroBuilder): GameCharacter {
    return builder
      .setName('Arthur')
      .setHeight(185)
      .setBodyType('Strong')
      .setHairColor('Blond')
      .setEyeColor('Blue')
      .setClothes('Knight armor')
      .setWeapon('Sword')
      .addInventoryItem('Shield')
      .addInventoryItem('Health potion')
      .addGoodDeed('Saved the village')
      .addGoodDeed('Helped the king')
      .build();
  }

  createEnemy(builder: EnemyBuilder): GameCharacter {
    return builder
      .setName('Morgoth')
      .setHeight(200)
      .setBodyType('Massive')
      .setHairColor('Black')
      .setEyeColor('Red')
      .setClothes('Dark armor')
      .setWeapon('Axe')
      .addInventoryItem('Dark crystal')
      .addInventoryItem('Poison')
      .addEvilDeed('Burned the village')
      .addEvilDeed('Stole the crown')
      .build();
  }
}
