const REQUIRED_STAGE = "wither_killed"
const ENDREM_EYES_TAG = "dragons_n_spells:endrem_eyes"
const FORBIDDEN_USE_MESSAGE = "The eye just stares at you... menacingly."

ItemEvents.rightClicked(event => {
  const player = event.player
  const item = event.item

  if (!item.hasTag(ENDREM_EYES_TAG)) return

  if (player.stages.has(REQUIRED_STAGE)) return

  player.displayClientMessage(
    Component.literal(FORBIDDEN_USE_MESSAGE),
    true
  )

  event.cancel()
})

BlockEvents.rightClicked(event => {
  const player = event.player
  const item = event.item
  const block = event.block

  if (block.id !== "minecraft:end_portal_frame" || 
    !item.hasTag(ENDREM_EYES_TAG)) return
  
  if (player.stages.has(REQUIRED_STAGE)) return

  player.displayClientMessage(
    Component.literal(FORBIDDEN_USE_MESSAGE),
    true
  )

  event.cancel()
})
