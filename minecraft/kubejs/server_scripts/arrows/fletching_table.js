const BASIC_ARROW_MATERIALS = [
  'minecraft:flint',
  'minecraft:iron_ingot',
  'minecraft:gold_ingot',
  'minecraft:diamond',
  'minecraft:netherite_ingot'
]

const XTRA_ARROW_TYPE_MATERIALS = {
  'atlantean': 'minecraft:prismarine_shard',
  'ender': 'minecraft:ender_pearl',
  'explosive': 'xtraarrows:tnt_arrow_lining',
  'slime': 'minecraft:slime_ball',
  'lightning': 'xtraarrows:copper_arrow_lining',
  'vexing': 'xtraarrows:vex_wing',
  'tracking': 'minecraft:ender_eye',
  'torch': 'minecraft:torch',
  'redstone_torch': 'minecraft:redstone_torch',
  'soul_torch': 'minecraft:soul_torch',
  'freezing': 'xtraarrows:compressed_snow',
  'life_steal': 'xtraarrows:bat_skin',
  'lantern': 'minecraft:lantern',
  'soul_lantern': 'minecraft:soul_lantern'
}

function fletching(event, output, top, middle, bottom, count) {
  event.custom({
    type: 'fletchingrecipe:fletching',
    top: {
      ingredient: { item: top },
      count: 1
    },
    middle: {
      ingredient: { item: middle },
      count: 1
    },
    bottom: {
      ingredient: { item: bottom },
      count: 1
    },
    output: { item: output, count: count }
  })
}

ServerEvents.recipes(event => {
  // Remove existing fletching table recipe mod
  event.remove({ mod: 'fletchingrecipe' })
  
  // Add recipe for fletching table
  // ...aparrantly it wasn't there in vanilla minecraft.
  event.shaped(
    Item.of('minecraft:fletching_table', 1),
    [
      'GF',
      'PP',
    ],
    {
      F: 'minecraft:feather',
      G: 'minecraft:flint',
      P: '#minecraft:planks'
    }
  )

  BASIC_ARROW_MATERIALS.forEach((material, index) => {
    let arrow = 'minecraft:arrow'

    if (material !== 'minecraft:flint'){
      let material_clean = material.replace('minecraft:', '').split('_')[0].replace('gold', 'golden')
      arrow = `xtraarrows:${material_clean}_arrow`
    }
    
    fletching(
      event, arrow, 
      material, 'minecraft:stick', 'minecraft:feather', 8
    )
  })

  for (const [arrow_type, bottom_material] of Object.entries(XTRA_ARROW_TYPE_MATERIALS)) {
    BASIC_ARROW_MATERIALS.forEach((top_material) => {
      const top_material_clean = top_material.replace('minecraft:', '').split('_')[0]

      const arrow =  `xtraarrows:${top_material_clean.replace('gold', 'golden')}_${arrow_type}_arrow` 
        
      fletching(
        event, arrow, 
        top_material, 'minecraft:stick', bottom_material, 4
      )
    })
  }
})