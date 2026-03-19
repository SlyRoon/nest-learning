export type Alignment = 'Good' | 'Evil';
export type CharacterRole = 'Hero' | 'Enemy';

export interface GameCharacter {
  name: string;
  role: CharacterRole;
  gender: string;
  heightCm: number;
  bodyType: string;
  hairColor: string;
  eyeColor: string;
  armor: string;
  weapon: string;
  inventory: string[];
  skills: string[];
  companion?: string;
  goodDeeds: string[];
  evilDeeds: string[];
  alignment: Alignment;
}
