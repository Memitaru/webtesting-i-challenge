const enhancer = require('./enhancer.js');
// test away!

// Test Items

const testItem = {
    name: "sword",
    durability: 50,
    enhancement: 1
}

const enhancedItem = {
    name: "super sword",
    durability: 85,
    enhancement: 20
}

const partiallyEnhanced = {
    name: "work in progress",
    durability: 100,
    enhancement: 14
}

const mostlyEnhanced = {
    name: "sword needs a little work",
    durability: 5,
    enhancement: 16
}

// Repair method

describe('repairs an item', () => {
    it('should set durability to 100', () => {
        const repairedItem = enhancer.repair(testItem)
        expect(repairedItem.durability).toBe(100)
    })
})

describe('enhancement of item succeeded', () => {
    it('should increase enhancement by one', () => {
        const resultingItem = enhancer.succeed(testItem)
        expect(resultingItem.enhancement).toBe(testItem.enhancement)
    })
    it('should return enhancement level 20 if original item was level 20', () => {
        const fullyEnhancedItem = enhancer.succeed(enhancedItem);
        expect(fullyEnhancedItem.enhancement).toBe(enhancedItem.enhancement)
    })
    it('should not change durability', () => {
        const item = enhancer.succeed(mostlyEnhanced);
        expect(item.durability).toBe(mostlyEnhanced.durability)
    })
})


