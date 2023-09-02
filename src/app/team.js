export default class Team {
  constructor() {
    this.members = new Set();
  }

  checkingAvailability(element) {
    const setCharacters = [];
    const set = new Set(element);
    set.forEach((item) => {
      if (this.members.has(item)) {
        setCharacters.push(item.type);
      }
    });

    const textForError = setCharacters.length !== 0 ? `Персонажи ${setCharacters.join(', ')}, уже есть в команде повторное добавление не возможно` : false;

    return textForError;
  }

  add(character) {
    const checkingResult = this.checkingAvailability([character]);
    if (checkingResult) {
      this.members.error = checkingResult;
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));

    const checkingResult = this.checkingAvailability(characters);
    if (checkingResult) {
      this.members.error = checkingResult;
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
