import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Daemon from '../daemon';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';

import Team from '../team';



const bowerman = new Bowerman('Valdemar', 'Bowerman');
const swordsman = new Swordsman('Saveliy', 'Swordsman');
const daemon = new Daemon('Vasiliy', 'Daemon');
const magician = new Magician('Svetlana', 'Magician');
const zombie = new Zombie('Sergey', 'Zombie');
const undead = new Undead('Alena', 'Undead');

const team = new Team();
 
test('method add', () => {
    team.add(bowerman);
    team.add(bowerman);

    const result = team.members.size;
    
    expect(result).toBe(1);
})

test('method add Error', () => {
  team.add(bowerman);
  team.add(bowerman);
  expect(team.members.error).toBe(`Персонажи Bowerman, уже есть в команде повторное добавление не возможно`);
})

test('method addAll', () => {
    team.addAll(bowerman, swordsman, daemon, magician, zombie, zombie, undead, undead);

    const result = team.members.size;

    expect(result).toBe(6);
})

test('method addAll', () => {
  team.addAll(bowerman, swordsman);

  expect(team.members.error).toBe(`Персонажи Bowerman, Swordsman, уже есть в команде повторное добавление не возможно`);
})

test('method toArray', () => {
    const result = team.toArray();
    
    expect(result).toEqual([
           {
             "attack": 25,
             "defence": 25,
             "health": 100,
             "level": 1,
             "name": "Valdemar",
             "type": "Bowerman",
           },
           {
             "attack": 40,
             "defence": 10,
             "health": 100,
             "level": 1,
             "name": "Saveliy",
             "type": "Swordsman",
           },
           {
             "attack": 10,
             "defence": 40,
             "health": 100,
             "level": 1,
             "name": "Vasiliy",
             "type": "Daemon",
           },
           {
             "attack": 10,
             "defence": 40,
             "health": 100,
             "level": 1,
             "name": "Svetlana",
             "type": "Magician",
           },
           {
             "attack": 40,
             "defence": 10,
             "health": 100,
             "level": 1,
             "name": "Sergey",
             "type": "Zombie",
           },
           {
             "attack": 25,
             "defence": 25,
             "health": 100,
             "level": 1,
             "name": "Alena",
             "type": "Undead",
           },
          ])
})