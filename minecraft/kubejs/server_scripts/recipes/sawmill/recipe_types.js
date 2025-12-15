import { GROUPS, sawmill } from 'recipes/sawmill/shared.js'

const RECIPE_TYPES = {
  LOGS_TO_PLANKS: 0,
  LOGS_TO_VERTICAL_PLANKS: 1,
  PLANKS_TO_VERTICAL_PLANKS: 2,
  VERTICAL_PLANKS_TO_PLANKS: 3,
  LOGS_TO_HOLLOW_LOGS: 4,
  LOGS_TO_WOOD: 5,
  STRIPPED_LOGS_TO_STRIPPED_WOOD: 6,
  LOGS_TO_STRIPPED_LOGS: 7,
  LOGS_TO_STAIRS: 8,
  PLANKS_TO_STAIRS: 9,
  LOGS_TO_SLABS: 10,
  LOGS_TO_VERTICAL_SLABS: 11,
  PLANKS_TO_SLABS: 12,
  PLANKS_TO_VERTICAL_SLABS: 13,
  LOGS_TO_POST: 14,
  LOGS_TO_STRIPPED_POST: 15,
  LOGS_TO_FENCES: 16,
  PLANKS_TO_FENCES: 17,
  LOGS_TO_FENCE_GATES: 18,
  PLANKS_TO_FENCE_GATES: 19,
  LOGS_TO_SIGNS: 20,
  PLANKS_TO_SIGNS: 21,
  LOGS_TO_SIGN_POSTS: 22,
  PLANKS_TO_SIGN_POSTS: 23,
  LOGS_TO_LADDERS: 24,
  PLANKS_TO_LADDERS: 25,
  LOGS_TO_STICKS: 26,
  PLANKS_TO_STICKS: 27
}

function add_recipe(event, recipe_type, namespace, wood_type, ingredients, output, count) {
  switch (recipe_type) {
    case RECIPE_TYPES.LOGS_TO_PLANKS:
      logs_to_planks(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_VERTICAL_PLANKS:
      logs_to_vertical_planks(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_VERTICAL_PLANKS:
      planks_to_vertical_planks(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.VERTICAL_PLANKS_TO_PLANKS:
      vertical_planks_to_planks(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_HOLLOW_LOGS:
      logs_to_hollow_logs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_WOOD:
      logs_to_wood(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.STRIPPED_LOGS_TO_STRIPPED_WOOD:
      stripped_logs_to_stripped_wood(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_STRIPPED_LOGS:
      logs_to_stripped_logs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_STAIRS:
      logs_to_stairs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_STAIRS:
      planks_to_stairs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_SLABS:
      logs_to_slabs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_VERTICAL_SLABS:
      logs_to_vertical_slabs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_SLABS:
      planks_to_slabs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_VERTICAL_SLABS:
      planks_to_vertical_slabs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_POST:
      logs_to_post(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_STRIPPED_POST:
      logs_to_stripped_post(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_FENCES:
      logs_to_fences(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_FENCES:
      planks_to_fences(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_FENCE_GATES:
      logs_to_fence_gates(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_FENCE_GATES:
      planks_to_fence_gates(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_SIGNS:
      logs_to_signs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_SIGNS:
      planks_to_signs(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_SIGN_POSTS:
      logs_sign_posts(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_SIGN_POSTS:
      planks_to_sign_posts(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_LADDERS:
      logs_to_ladders(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_LADDERS:
      planks_to_ladders(event, namespace, wood_type, ingredients, output, count)
      break
    case RECIPE_TYPES.LOGS_TO_STICKS:
      logs_to_sticks(event, ingredients, output, count)
      break
    case RECIPE_TYPES.PLANKS_TO_STICKS:
      planks_to_sticks(event, ingredients, output, count)
      break
  }
}

function logs_to_planks(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `${namespace}:${wood_type}_planks`, count || 4
  )
}

function logs_to_vertical_planks(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `quark:vertical_${wood_type}_planks`, count || 4
  )
}

function planks_to_vertical_planks(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
    ],
    output || `quark:vertical_${wood_type}_planks`, count || 1
  )
}

function vertical_planks_to_planks(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `${namespace}:${wood_type}_planks`, count || 1
  )
}

function logs_to_hollow_logs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
    ],
    output || `quark:hollow_${wood_type}_log`, count || 2
  )
}

function logs_to_wood(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
    ],
    output || `${namespace}:${wood_type}_wood`, count || 2
  )
}

function stripped_logs_to_stripped_wood(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
    ],
    output || `${namespace}:stripped_${wood_type}_wood`, count || 2
  )
}

function logs_to_stripped_logs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
    ],
    output || `${namespace}:stripped_${wood_type}_log`, count || 1
  )
}

function logs_to_stairs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_log`,
    ],
    output || `${namespace}:${wood_type}_stairs`, count || 4
  )
}

function planks_to_stairs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `${namespace}:${wood_type}_stairs`, count || 1
  )
}

// SLABS
function logs_to_slabs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `${namespace}:${wood_type}_slab`, count || 8
  )
}

function logs_to_vertical_slabs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `quark:${wood_type}_vertical_slab`, count || 8
  )
} 

function planks_to_slabs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `${namespace}:${wood_type}_slab`, count || 2
  )
}

function planks_to_vertical_slabs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `quark:${wood_type}_vertical_slab`, count || 2
  )
}

function logs_to_post(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
    ],
    output || `quark:${wood_type}_post`, count || 4
  )
}

function logs_to_stripped_post(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `quark:stripped_${wood_type}_post`, count || 4
  )
}

function logs_to_fences(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `${namespace}:${wood_type}_fence`, count || 8
  )
}

function planks_to_fences(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `${namespace}:${wood_type}_fence`, count || 2
  )
}

function logs_to_fence_gates(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `${namespace}:${wood_type}_fence_gate`, count || 4
  )
}

function planks_to_fence_gates(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `${namespace}:${wood_type}_fence_gate`, count || 1
  )
}

function logs_to_signs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `${namespace}:${wood_type}_sign`, count || 4
  )
}

function planks_to_signs(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `${namespace}:${wood_type}_sign`, count || 1
  )
}

function logs_sign_posts(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `supplementaries:sign_post_${wood_type}`, count || 8
  )
}

function planks_to_sign_posts(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `supplementaries:sign_post_${wood_type}`, count || 2
  )
}

function logs_to_ladders(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `${namespace}:${wood_type}_log`,
      `${namespace}:stripped_${wood_type}_log`,
      `${namespace}:${wood_type}_wood`,
      `${namespace}:stripped_${wood_type}_wood`
    ],
    output || `quark:${wood_type}_ladder`, count || 12
  )
}

function planks_to_ladders(event, namespace, wood_type, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks,
    ingredients || [
      `${namespace}:${wood_type}_planks`,
      `quark:vertical_${wood_type}_planks`,
    ],
    output || `quark:${wood_type}_ladder`, count || 3
  )
}

function logs_to_sticks(event, ingredients, output, count) {
  sawmill(
    event, GROUPS.logs, 
    ingredients || [
      `#minecraft:logs`
    ],
    output || `minecraft:stick`, count || 16
  )
}

function planks_to_sticks(event, ingredients, output, count) {
  sawmill(
    event, GROUPS.planks, 
    ingredients || [
      `#minecraft:planks`
    ],
    output || `minecraft:stick`, count || 4
  )
}