import { EnemyBuilder } from './builders/enemy.builder';
import { HeroBuilder } from './builders/hero.builder';
import { CharacterDirector } from './director/character-director';

export function runTask5BuilderDemo(): void {
  console.log('=== Task 5: Builder ===');

  const director = new CharacterDirector();

  const hero = director.createHero(new HeroBuilder());
  const enemy = director.createEnemy(new EnemyBuilder());

  console.log('Hero:', hero.describe());
  console.log('Hero inventory:', hero.inventory.join(', '));
  console.log('Hero good deeds:', hero.goodDeeds.join(', '));

  console.log('Enemy:', enemy.describe());
  console.log('Enemy inventory:', enemy.inventory.join(', '));
  console.log('Enemy evil deeds:', enemy.evilDeeds.join(', '));
}
