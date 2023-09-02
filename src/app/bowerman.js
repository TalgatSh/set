import Character from './characters';

export default class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);

    this.attack = 25;
    this.defence = 25;
  }
}
