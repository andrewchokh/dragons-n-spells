import { NAMESPACES, WOOD_TYPES } from 'recipes/sawmill/shared.js'
import { RECIPE_TYPES, add_recipe } from 'recipes/sawmill/recipe_types.js'

const DREADWOOD_LOGS = {
  LOG: 'iceandfire:dreadwood_log'
}

const DREADWOOD_PLANKS = {
  PLANKS: 'iceandfire:dreadwood_planks',
  VERTICAL_PLANKS: 'everycomp:q/iceandfire/vertical_dreadwood_planks'
}

ServerEvents.recipes(event => {
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_PLANKS, 
    NAMESPACES.ICEANDFIRE, 
    WOOD_TYPES.DREADWOOD,
    Object.values(DREADWOOD_LOGS),
  )

  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_VERTICAL_PLANKS, 
    NAMESPACES.ICEANDFIRE, 
    WOOD_TYPES.DREADWOOD,
    Object.values(DREADWOOD_LOGS),
    DREADWOOD_PLANKS.VERTICAL_PLANKS
  )

  add_recipe(
    event, 
    RECIPE_TYPES.PLANKS_TO_VERTICAL_PLANKS, 
    NAMESPACES.ICEANDFIRE, 
    WOOD_TYPES.DREADWOOD,
    [DREADWOOD_PLANKS.PLANKS],
    DREADWOOD_PLANKS.VERTICAL_PLANKS
  )

  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.ICEANDFIRE,
    WOOD_TYPES.DREADWOOD,
    [DREADWOOD_PLANKS.VERTICAL_PLANKS],
    DREADWOOD_PLANKS.PLANKS
  )

  // SIGN POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGN_POSTS,
    NAMESPACES.ICEANDFIRE,
    WOOD_TYPES.DREADWOOD,
    Object.values(DREADWOOD_LOGS),
    'supplementaries:iceandfire/sign_post_dreadwood'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGN_POSTS,
    NAMESPACES.ICEANDFIRE,
    WOOD_TYPES.DREADWOOD,
    Object.values(DREADWOOD_PLANKS),
    'supplementaries:iceandfire/sign_post_dreadwood'
  )

  // LADDERS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_LADDERS,
    NAMESPACES.ICEANDFIRE,
    WOOD_TYPES.DREADWOOD,
    Object.values(DREADWOOD_LOGS),
    'everycomp:q/iceandfire/dreadwood_ladder'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_LADDERS,
    NAMESPACES.ICEANDFIRE,
    WOOD_TYPES.DREADWOOD,
    Object.values(DREADWOOD_PLANKS),
    'everycomp:q/iceandfire/dreadwood_ladder'
  )
})