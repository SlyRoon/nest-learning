export class GameCharacter {
  name = '';
  role = '';
  height = 0;
  bodyType = '';
  hairColor = '';
  eyeColor = '';
  clothes = '';
  weapon = '';
  inventory: string[] = [];
  goodDeeds: string[] = [];
  evilDeeds: string[] = [];

  describe(): string {
    return `${this.role}: ${this.name}, height=${this.height}, weapon=${this.weapon}, clothes=${this.clothes}`;
  }
}
