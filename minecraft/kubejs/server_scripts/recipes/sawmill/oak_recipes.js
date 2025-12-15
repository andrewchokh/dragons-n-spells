import { NAMESPACES, WOOD_TYPES } from 'recipes/sawmill/shared.js'
import { RECIPE_TYPES, add_recipe } from 'recipes/sawmill/recipe_types.js'

ServerEvents.recipes(event => {
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK, 
  )

  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_VERTICAL_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK, 
  )

  add_recipe(
    event, 
    RECIPE_TYPES.PLANKS_TO_VERTICAL_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK
  )

  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK
  )

  // HOLLOW LOGS
  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK
  )

  // WOODS
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_WOOD, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK
  )

  add_recipe(
    event, 
    RECIPE_TYPES.STRIPPED_LOGS_TO_STRIPPED_WOOD, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.OAK
  )

  // STRIPPED LOGS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STRIPPED_LOGS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // STAIRS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STAIRS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_STAIRS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )
  
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )
  
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_VERTICAL_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_VERTICAL_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_POST,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STRIPPED_POST,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // FENCES
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_FENCES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_FENCES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // FENCE GATES
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_FENCE_GATES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_FENCE_GATES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // SIGNS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGNS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGNS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // SIGN POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGN_POSTS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGN_POSTS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK
  )

  // LADDERS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_LADDERS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK,
    undefined,
    'minecraft:ladder'
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_LADDERS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.OAK,
    undefined,
    'minecraft:ladder'
  )
})