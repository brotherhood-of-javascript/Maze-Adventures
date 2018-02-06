import * as classes from './gameclasses'
export default function() {
  return {
    cells: [{ text: 'foo' }, { text: 'bazz' }, { text: 'bar' }],
    hero: {
      x: 1,
      y: 1,
      img: 'https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif'
    },
    inventory: [
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ']
    ],
    cantWalk: ['1', '0', '2', '8', '3'],
    pickableItems: ['4', '5', '6'],
    NPC: ['8'],
    bot: ['2'],
    itemsToWin: ['7'],
    itemsWindow: false,
    dialogWindow: false,
    fightWindow: false,
    openInventory: false,
    herroWeight: 60,
    totalWeight: 0,
    fullBag: false,
    gameWinned: false,
    items: {
      ' ': new classes.Items('', 0, ''),
      '0': new classes.Items('Tree', 0, 'tree'),
      '1': new classes.Items('Wall', 0, 'wall'),
      // '2': new classes.Items('Monster', 0, 'monster'),
      '3': new classes.Items('Enigma', 0, 'enigma'), // this.quest.gnome_mystery.enigma
      '4': new classes.Items(
        'Diamond',
        50,
        'diamond',
        'They are known particularly for their use in jewelry, such as rings or necklaces'
      ),
      '5': new classes.Items(
        'Gold',
        4,
        'gold',
        'Apples are extremely rich in important antioxidants, flavanoids, and dietary fiber'
      ),
      '6': new classes.Items(
        'Food',
        1,
        'food',
        'You need only to view the movie Super Size Me to understand how foods impact the body'
      ),
      '7': new classes.Items('Main trasure', 0, 'mainTrasure', 'If you collect this you win the game'),
      '*': new classes.Items('Key', 0, 'key', 'This key help you open treasure chest'), // prize from quest enigma
      '8': (() => {
        const gnome = new classes.Dialog({
          0: { message: '', links: [1] },
          1: { message: 'Hello my name is Gnome', links: [2] },
          2: { message: 'Can you bring me 3 food? And i will pass you to the treasure', links: [3, 4, 5] },
          3: { message: 'Ok you bring me all items you can go', links: [3] },
          4: { message: 'I ask you for 3 food but you bring me only ', links: [3, 4, 5] },
          5: { message: 'I ask you for bring food, but you have nothing', links: [3, 4, 5] },
          food: 0,
          status: 0
        })
        gnome.name = 'Gnome'
        gnome.weight = 0
        gnome.class = 'gnome'
        gnome.info = 'If you collect this you win the game'
        return gnome
      })(),
      '2': (() => {
        const monster = new classes.Fight({
          0: { message: '', links: [1, 2] },
          1: { message: 'hero loose!', links: [1, 2] },
          2: { message: 'hero win!', links: [1, 2] },
          statusOfWin: 0
        })
        // 'Freddy', 100, 'monster', 'scary person with  long arms'
        monster.name = 'Freddy'
        monster.class = 'monster'
        monster.info = ''
        monster.target = 'hero-rarget'
        return monster
      })(),
      '9': (() => {
        const chest = new classes.Items('Chest', 0, 'chest', 'In chest you can collect items')
        chest.store = [
          [' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ']
        ]
        return chest
      })()
    },
    jurnalConversation: [],
    nameQuest: '',
    quest: {
      status: {
        enigma: 'You need have passed it'
      },
      number: ['3'],
      window: false,
      enigma: {
        done: 'You are sttarting', // each quest must have!
        name: 'Cheshire Cat', // each quest must have!
        class: 'enigma', // each quest must have!
        start: 0, // each quest must have!
        badAnsver: '',
        getPrize: false,
        classPrize: 'enigma-key',
        0: {
          mess: 'Hello. A you ready play with me in the enigma?',
          options: ['yes', 'no'],
          links: [1],
          badAnsver: false,
          ansver: 'yes'
        },
        1: {
          mess: '№1 What is found over your head but under your hat?',
          options: ['Hair', 'Calvity', 'Flea'],
          links: [2],
          badAnsver: [4],
          ansver: 'Hair'
        },
        2: {
          mess: '№2 I am round like an apple Flat as a chip I have eyes But I can’t see one bit',
          options: ['Badge', 'Round battery', 'Button'],
          links: [3],
          badAnsver: [4],
          ansver: 'Button'
        },
        3: {
          mess: " №3 What's black when you get it, red when you use it, and white when you're all through with it",
          options: ['Stone', 'Charcoal', 'Iron'],
          links: [5],
          badAnsver: [4],
          ansver: 'Charcoal'
        },
        4: {
          mess: 'This is not the right answer'
        },
        5: {
          mess: 'You win! Now i will give you key',
          prize: '*'
        }
      }
    },

    start: true,
    initialState: '',
    terran: [
      ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
      ['1', '9', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ' ', '1', ' ', ' ', ' ', '0', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '6', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', ' ', '1', '4', ' ', '5', '5', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', '5', '1'],
      ['1', ' ', '1', ' ', ' ', ' ', ' ', '1', '1', '1', '0', '0', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', '2', '1', ' ', ' ', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', '4', ' ', ' ', '0', ' ', ' ', ' ', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', '0', ' ', '0', ' ', '1', '1', '1', '1', '1', '1', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', '6', ' ', ' ', ' ', '5', ' ', ' ', '1'],
      ['1', ' ', '1', ' ', ' ', '4', '0', ' ', '1', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', '6', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', '4', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', '0', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', '3', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', '4', ' ', ' ', '1'],
      ['1', ' ', ' ', '1', '1', '1', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', '6', '1'],
      ['1', '1', '1', '1', '1', ' ', '1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', '7', ' ', ' ', ' ', ' ', ' ', '8', ' ', ' ', ' ', '1'],
      ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    ]
  }
}
