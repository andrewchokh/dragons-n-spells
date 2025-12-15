const DIG_SPEED_MODIFIER = 5.5

const COPPER_DIG_TOOLS = [
  'iceandfire:copper_pickaxe',
  'iceandfire:copper_axe',
  'iceandfire:copper_shovel',
  'iceandfire:copper_hoe'
]

ItemEvents.modification(event => {
  COPPER_DIG_TOOLS.forEach(tool => {
    event.modify(tool, item => {
      item.digSpeed = DIG_SPEED_MODIFIER
    })
  })
})