const COPPER_GEAR = [
    'iceandfire:armor_copper_metal_helmet',
    'iceandfire:armor_copper_metal_chestplate',
    'iceandfire:armor_copper_metal_leggings',
    'iceandfire:armor_copper_metal_boots',
    'iceandfire:copper_sword',
    'iceandfire:copper_pickaxe',
    'iceandfire:copper_axe',
    'iceandfire:copper_shovel',
    'iceandfire:copper_hoe',
]

const IRON_GEAR = [
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'minecraft:iron_sword',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_shovel',
    'minecraft:iron_hoe',
]

const SILVER_GEAR = [
    'iceandfire:armor_silver_metal_helmet',
    'iceandfire:armor_silver_metal_chestplate',
    'iceandfire:armor_silver_metal_leggings',
    'iceandfire:armor_silver_metal_boots',
    'iceandfire:silver_sword',
    'iceandfire:silver_pickaxe',
    'iceandfire:silver_axe',
    'iceandfire:silver_shovel',
    'iceandfire:silver_hoe',
]

ServerEvents.recipes(event => {
  // Remove ice and fire tide armor recipes
  IRON_GEAR.forEach(item => {
    event.remove({ output: item })
  })
  SILVER_GEAR.forEach(item => {
    event.remove({ output: item })
  })

  // Add smithing recipes for ice and fire tide armor
  IRON_GEAR.forEach((item, index) => {
    event.smithing(
      item,
      'minecraft:leather',
      COPPER_GEAR[index],
      'minecraft:iron_block'
    )
  })
  SILVER_GEAR.forEach((item, index) => {
    event.smithing(
      item,
      'minecraft:leather',
      COPPER_GEAR[index],
      'iceandfire:silver_block'
    )
  })  
})