import { NAMESPACES, WOOD_TYPES } from 'recipes/sawmill/shared.js'
import { RECIPE_TYPES, add_recipe } from 'recipes/sawmill/recipe_types.js'

const WARPED_LOGS = {
  log: 'warped_stem',
  stripped_log: 'stripped_warped_stem',
  wood: 'warped_hyphae',
  stripped_wood: 'stripped_warped_hyphae'
}

ServerEvents.recipes(event => {
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED, 
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_VERTICAL_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED, 
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event, 
    RECIPE_TYPES.PLANKS_TO_VERTICAL_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED
  )

  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED
  )

  // HOLLOW LOGS
  add_recipe(
    event, 
    RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED, 
    [
      WARPED_LOGS.log,
    ], 
    'quark:hollow_warped_stem'
  )

  // WOODS
  add_recipe(
    event, 
    RECIPE_TYPES.LOGS_TO_WOOD, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED, 
    [
      WARPED_LOGS.log,
    ], 
    'minecraft:warped_hyphae'
  )

  add_recipe(
    event, 
    RECIPE_TYPES.STRIPPED_LOGS_TO_STRIPPED_WOOD, 
    NAMESPACES.MINECRAFT, 
    WOOD_TYPES.WARPED, 
    [
      WARPED_LOGS.log,
      WARPED_LOGS.stripped_log,
    ], 
    'minecraft:stripped_warped_hyphae'
  )

  // STRIPPED LOGS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STRIPPED_LOGS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    [
      WARPED_LOGS.log,
    ],
    'minecraft:stripped_warped_stem'
  )

  // STAIRS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STAIRS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_STAIRS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )
  
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )
  
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_VERTICAL_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_VERTICAL_SLABS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )

  // POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_POST,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    [
      WARPED_LOGS.log,
      WARPED_LOGS.wood,
    ]
  )

  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_STRIPPED_POST,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  // FENCES
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_FENCES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_FENCES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )

  // FENCE GATES
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_FENCE_GATES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_FENCE_GATES,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )

  // SIGNS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGNS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGNS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )

  // SIGN POSTS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_SIGN_POSTS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED,
    Object.values(WARPED_LOGS)
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_SIGN_POSTS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.WARPED
  )

  // LADDERS
  add_recipe(
    event,
    RECIPE_TYPES.LOGS_TO_LADDERS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.ACACIA
  )

  add_recipe(
    event,
    RECIPE_TYPES.PLANKS_TO_LADDERS,
    NAMESPACES.MINECRAFT,
    WOOD_TYPES.ACACIA
  )
})