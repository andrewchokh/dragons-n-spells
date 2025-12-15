const NAMESPACES = {
  MINECRAFT: 'minecraft',
  QUARK: 'quark',
  ICEANDFIRE: 'iceandfire'
}

const WOOD_TYPES = {
  OAK: 'oak',
  SPRUCE: 'spruce',
  BIRCH: 'birch',
  JUNGLE: 'jungle',
  ACACIA: 'acacia',
  DARK_OAK: 'dark_oak',
  MANGROVE: 'mangrove',
  CRIMSON: 'crimson',
  WARPED: 'warped',
  CHERRY: 'cherry',
  DREADWOOD: 'dreadwood',
  TRUMPET: 'blossom',
  ASHEN: 'ancient',
  AZALEA: 'azalea'
}

const GROUPS = {
  'logs': 'logs',
  'planks': 'planks',
}

function sawmill(event, group, ingredients, output, count) {
  event.custom({
    type: 'sawmill:woodcutting',
    group: group,
    ingredient: ingredients.map(i => ({ item: i, tag: i.startsWith('#') ? i.substring(1) : undefined }))
      .map(obj => obj.tag ? {tag: obj.tag} : {item: obj.item}),
    result: output,
    count: count
  })
}

ServerEvents.recipes(event => {
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STICKS
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_STICKS
  ) 
})
