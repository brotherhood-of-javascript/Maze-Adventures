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
    cantWalk: ['1', '0', '2', '8'],
    pickableItems: ['4', '5', '6'],
    NPC: ['8'],
    itemsToWin: ['7'],
    itemsWindow: false,
    dialogWindow: false,
    openInventory: false,
    herroWeight: 60,
    totalWeight: 0,
    fullBag: false,
    gameWinned: false,
    items: {
      ' ': new classes.Items('', 0, ''),
      '0': new classes.Items('Tree', 0, 'tree'),
      '1': new classes.Items('Wall', 0, 'wall'),
      '2': new classes.Items('Monster', 0, 'monster'),
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
      '8': (() => {
        const gnome = new classes.Dialog({
          0: { message: '', links: [1] },
          1: { message: 'Hello my name is Gnome', links: [2] },
          2: { message: 'Can you bring me 3 food? And ill pass you to the trasure', links: [3, 4, 5] },
          3: { message: 'Ok you bring me all items you can go', links: [3] },
          4: { message: 'I ask you for 3 food but you bring me only ', links: [3, 4] },
          5: { message: 'I ask you for bring food, but you have nothing', links: [3, 4, 5] },
          food: 0,
          status: 0
        })
        gnome.name = 'Gnome'
        gnome.weight = 0
        gnome.class = 'gnome'
        gnome.info = 'If you collect this you win the game'
        return gnome
      })()
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
