const GOLD_ITEMS = [
  'minecraft:golden_helmet',
  'minecraft:golden_chestplate',
  'minecraft:golden_leggings',
  'minecraft:golden_boots',
  'minecraft:golden_sword',
  'minecraft:golden_pickaxe',
  'minecraft:golden_axe',
  'minecraft:golden_shovel',
  'minecraft:golden_hoe'
]

function depthSmithing(event, result, baseItem) {
  event.smithing(
    result,
    'minecraft:prismarine',  
    baseItem, 
    'seadwellers:depth_ingot'
  )
}

ServerEvents.recipes(event => {
  GOLD_ITEMS.forEach(item => {
    const id = item.split('_')[1]
    event.remove({ id: `seadwellers:depth_${id}` })
  })

  GOLD_ITEMS.forEach(item => {
    const id = item.split(':')[1].replace('golden_', '') 
    const result = `seadwellers:depth_${id}`
    depthSmithing(event, result, item)
  })
})