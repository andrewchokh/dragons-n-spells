const TIDE_COLORS = [
  'red', 'blue', 'bronze', 'deepblue', 'green', 'purple', 'teal'
]

const TIDE_ELEMENTS = [
  'helmet', 'chestplate', 'leggings', 'boots',
]

ServerEvents.recipes(event => {
  // Remove ice and fire tide armor recipes
  TIDE_COLORS.forEach(color => {
    for (const element of TIDE_ELEMENTS) {
      event.remove({ mod: 'iceandfire', output: `iceandfire:tide_${color}_${element}` })
    }
  })

  // Add smithing recipes for ice and fire tide armor
  TIDE_COLORS.forEach(color => {
    for (const element of TIDE_ELEMENTS) {
      event.smithing(
        `iceandfire:tide_${color}_${element}`,
        `iceandfire:pixie_dust`,
        `minecraft:iron_${element}`,
        `iceandfire:sea_serpent_scale_block_${color}`
      )
    }
  })

  TIDE_COLORS.forEach(color => {
    for (const element of TIDE_ELEMENTS) {
      event.smithing(
        `iceandfire:tide_${color}_${element}`,
        `iceandfire:pixie_dust`,
        `iceandfire:armor_silver_metal_${element}`,
        `iceandfire:sea_serpent_scale_block_${color}`
      )
    }
  })
})