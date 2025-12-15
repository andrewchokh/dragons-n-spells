const low_food_tag= 'dragons_n_spells:low_nourished_food'
const medium_food_tag= 'dragons_n_spells:medium_nourished_food'
const high_food_tag= 'dragons_n_spells:high_nourished_food'

const nourishment_effect = 'farmersdelight:nourishment'

const low_food_mods = {
  'effect': 'minecraft:regeneration',
  'duration': 600,
  'amplifier': 0,
  'chance': 1.0
}

const medium_food_mods = {
  'effect': 'minecraft:regeneration',
  'duration': 1800,
  'amplifier': 0,
  'chance': 1.0
}

const high_food_mods = {
  'effect': 'minecraft:regeneration',
  'duration': 3000,
  'amplifier': 0,
  'chance': 1.0
}

ItemEvents.modification(event => {
  //////////////////////////////////////////////
  // Low nourished food
  //////////////////////////////////////////////
  event.modify('farmersdelight:bacon_and_eggs', item => {
    item.foodProperties = food => {
      food.effect(
        low_food_mods.effect, 
        low_food_mods.duration, 
        low_food_mods.amplifier, 
        low_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })
  event.modify('farmersdelight:ratatouille', item => {
    item.foodProperties = food => {
      food.effect(
        low_food_mods.effect, 
        low_food_mods.duration, 
        low_food_mods.amplifier, 
        low_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  //////////////////////////////////////////////
  // Medium nourished food
  //////////////////////////////////////////////
  event.modify("farmersdelight:pasta_with_meatballs", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:pasta_with_mutton_chop", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:mushroom_rice", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:steak_and_potatoes", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:grilled_salmon", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("moredelight:cooked_rice_with_chicken_cuts", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("moredelight:cooked_rice_with_beef", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("moredelight:cooked_rice_with_porkchop", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("moredelight:creamy_pasta_with_ham", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("moredelight:creamy_pasta_with_chicken_cuts", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("brewinandchewin:vegetable_omelet", item => {
    item.foodProperties = food => {
      food.effect(
        medium_food_mods.effect,
        medium_food_mods.duration,
        medium_food_mods.amplifier,
        medium_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  //////////////////////////////////////////////
  // High nourished food
  //////////////////////////////////////////////
  event.modify("farmersdelight:roasted_mutton_chops", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:vegetable_noodles", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:squid_ink_pasta", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:roast_chicken", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:stuffed_pumpkin", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:honey_glazed_ham", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("farmersdelight:shepherds_pie", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("brewinandchewin:cheesy_pasta", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("brewinandchewin:horror_lasagna", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        high_food_mods.duration,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })

  event.modify("brewinandchewin:scarlet_pierogi", item => {
    item.foodProperties = food => {
      food.effect(
        high_food_mods.effect,
        4200,
        high_food_mods.amplifier,
        high_food_mods.chance
      )
      food.removeEffect(nourishment_effect)
    }
  })
})