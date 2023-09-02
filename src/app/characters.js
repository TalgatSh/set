import characters from './app';

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('the name must contain from 2 to 10 characters');
    }

    if (characters.some((item) => item === type.toLowerCase())) {
      this.type = type;
    } else {
      throw new Error('a non-existent game character');
    }

    this.health = 100;
    this.level = 1;
  }
}
