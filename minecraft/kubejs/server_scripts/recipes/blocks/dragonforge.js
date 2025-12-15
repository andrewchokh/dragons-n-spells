const DRAGON_COLORS = ['fire', 'ice', 'lightning']

const DRAGON_HEARTS = [
  'iceandfire:fire_dragon_heart',
  'iceandfire:ice_dragon_heart',
  'iceandfire:lightning_dragon_heart'
]

const DRAGON_BRICKS = [
  'iceandfire:dragonforge_fire_brick',
  'iceandfire:dragonforge_ice_brick',
  'iceandfire:dragonforge_lightning_brick'
]

const DRAGON_CORES = [
  'iceandfire:dragonforge_fire_core_disabled',
  'iceandfire:dragonforge_ice_core_disabled',
  'iceandfire:dragonforge_lightning_core_disabled'
]

const ASSOCIATED_BLOCKS = [
  'minecraft:magma_block',
  'minecraft:packed_ice',
  'minecraft:crying_obsidian'
]

ServerEvents.recipes(event => {
  DRAGON_CORES.forEach(core => {
    event.remove({ output: core })
  })

  DRAGON_BRICKS.forEach(brick => {
    event.remove({ output: brick })
  })

  DRAGON_CORES.forEach((core, index) => {
    event.shaped(
      Item.of(core, 1),
      [
        'BNB',
        'NHN',
        'BNB'
      ],
      {
        H: DRAGON_HEARTS[index],
        B: DRAGON_BRICKS[index],
        N: 'minecraft:netherite_ingot',
      }
    )
  })

  DRAGON_BRICKS.forEach((brick, index) => {
    event.shaped(
      Item.of(brick, 2),
      [
        'AB',
        'BS',
      ],
      {
        S: `#forge:storage_blocks/scales/dragon/${DRAGON_COLORS[index]}`,
        B: 'minecraft:stone_bricks',
        A: ASSOCIATED_BLOCKS[index]
      }
    )
  })
})