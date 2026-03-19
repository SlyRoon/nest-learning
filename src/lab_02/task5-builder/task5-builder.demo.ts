import { EnemyBuilder } from './builders/enemy.builder';
import { HeroBuilder } from './builders/hero.builder';
import { CharacterDirector } from './director/character-director';

export function runTask5BuilderDemo(): void {
  console.log('\n=== Task 5: Builder / Game Characters ===');

  const director = new CharacterDirector();

  const hero = director.createDreamHero(new HeroBuilder());
  const enemy = director.createMostDangerousEnemy(new EnemyBuilder());

  console.log('Dream hero:');
  console.log(JSON.stringify(hero, null, 2));

  console.log('Most dangerous enemy:');
  console.log(JSON.stringify(enemy, null, 2));
}
