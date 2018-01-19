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
    cantWalk: ['1', '0', '2', '8'],
    pickableItems: ['4', '5', '6'],
    NPC: ['8'],
    itemsToWin: ['7'],
    itemsWindow: false,
    openInventory: false,
    herroWeight: 60,
    totalWeight: 0,
    fullBag: false,
    gameWinned: false,
    items: {
      ' ': { name: '', weight: 0, class: '' },
      '0': { name: 'Tree', weight: 0, class: 'tree' },
      '1': { name: 'Wall', weight: 0, class: 'wall' },
      '2': { name: 'Monster', weight: 0, class: 'monster' },
      '3': { name: 'Hero', weight: 1, class: 'hero' },
      '4': {
        name: 'Diamond',
        weight: 50,
        class: 'diamond',
        info: 'They are known particularly for their use in jewelry, such as rings or necklaces'
      },
      '5': {
        name: 'Gold',
        weight: 4,
        class: 'gold',
        info: 'Apples are extremely rich in important antioxidants, flavanoids, and dietary fiber'
      },
      '6': {
        name: 'Food',
        weight: 1,
        class: 'food',
        info: 'You need only to view the movie Super Size Me to understand how foods impact the body'
      },
      '7': {
        name: 'Main trasure',
        weight: 0,
        class: 'mainTrasure',
        info: 'If you collect this you win the game'
      },
      '8': {
        name: 'Gnome',
        weight: 0,
        class: 'gnome',
        info: 'If you collect this you win the game',
        dialog: {
          1: { message: 'Hello my name is Gnome', links: [2] },
          2: { message: 'Can you bring me 3 food? And ill pass you to the trasure', links: [3, 4] },
          3: { message: 'Ok you bring me all items you can go', links: [3] },
          4: { message: 'I ask you for 3 food but you bring me only ', links: [4, 3] },
          food: 0,
          status: 1
        }
      }
    },
    start: true,
    initialState: '',
    terran: [
      ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
      ['1', ' ', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ' ', '1', ' ', ' ', ' ', '0', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '6', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', ' ', '1', '4', ' ', '5', '5', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', '5', '1'],
      ['1', ' ', '1', ' ', ' ', ' ', ' ', '1', '1', '1', '0', '0', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', '2', '1', ' ', ' ', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', ' ', '0', ' ', '2', ' ', ' ', ' ', ' ', ' ', ' ', '0', '4', ' ', ' ', '0', ' ', ' ', ' ', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', '0', ' ', '0', ' ', '1', '1', '1', '1', '1', '1', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', '6', ' ', ' ', ' ', '5', ' ', ' ', '1'],
      ['1', ' ', '1', ' ', ' ', '4', '0', ' ', '1', '2', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', '6', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', '4', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', '1', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', '2', ' ', ' ', '1'],
      ['1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', ' ', '0', ' ', ' ', '2', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', '0', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', '4', ' ', ' ', '1'],
      ['1', '1', '1', '1', '1', '1', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', '6', '1'],
      ['1', '1', '1', '1', '1', ' ', '1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', '7', ' ', ' ', ' ', ' ', ' ', '8', ' ', ' ', ' ', '1'],
      ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    ]
  }
}
