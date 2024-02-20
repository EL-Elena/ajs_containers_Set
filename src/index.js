export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(teammate) {
    this.members.forEach((i) => {
      if (i.type === teammate.type) {
        throw new Error('Такой персонаж уже есть');
      }
    });
    this.members.add(teammate);
  }

  addAll(...teammates) {
    const arr = this.toArray();
    teammates.forEach((i) => {
      if (arr.find((el) => el.type === `${i.type}`)) {
        return;
      }
      this.members.add(i);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
