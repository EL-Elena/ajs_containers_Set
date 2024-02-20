import Bowman from '../bowman';

const character = new Bowman('Lili', 'bowman');

const result = {
  name: 'Lili',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Testing creating Bowman', () => {
  expect(character).toEqual(result);
});
