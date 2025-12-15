import { NAMESPACES, WOOD_TYPES } from 'recipes/sawmill/shared.js'
import { RECIPE_TYPES, add_recipe } from 'recipes/sawmill/recipe_types.js'

ServerEvents.recipes(event => {
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_PLANKS, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET, 
  )

  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_VERTICAL_PLANKS, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET, 
  )

  add_recipe(
    event, 
    RECIPE_TYPES.PLANKS_TO_VERTICAL_PLANKS, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET
  )

  // HOLLOW LOGS
  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET
  )

  // WOODS
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_WOOD, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event, 
    RECIPE_TYPES.STRIPPED_LOGS_TO_STRIPPED_WOOD, 
    NAMESPACES.QUARK, 
    WOOD_TYPES.TRUMPET
  )

  // STRIPPED LOGS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STRIPPED_LOGS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  // STAIRS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STAIRS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'quark:blossom_planks_stairs'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_STAIRS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'quark:blossom_planks_stairs'
  )
  
  // SLABS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SLABS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'quark:blossom_planks_slab'
  )
  
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_VERTICAL_SLABS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'quark:blossom_planks_vertical_slab'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SLABS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'quark:blossom_planks_slab'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_VERTICAL_SLABS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'quark:blossom_planks_vertical_slab'
  )

  // POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_POST,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STRIPPED_POST,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  // FENCES
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_FENCES,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_FENCES,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  // FENCE GATES
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_FENCE_GATES,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_FENCE_GATES,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  // SIGNS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGNS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGNS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  // SIGN POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGN_POSTS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'supplementaries:quark/sign_post_blossom'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGN_POSTS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET,
    undefined,
    'supplementaries:quark/sign_post_blossom'
  )

  // LADDERS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_LADDERS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_LADDERS,
    NAMESPACES.QUARK,
    WOOD_TYPES.TRUMPET
  )
})