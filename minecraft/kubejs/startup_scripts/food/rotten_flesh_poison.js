ItemEvents.modification(event => {
  event.modify('minecraft:rotten_flesh', item => {
    item.foodProperties = food => {
      food.effect('minecraft:poison', 100, 0, 0.8)
    }
  })
})