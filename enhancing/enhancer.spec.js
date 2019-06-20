const enhancer = require('./enhancer.js');
// test away!

// Test Items

// const testItem = {
//     name: "sword",
//     durability: 50,
//     enhancement: 1
// }

// const enhancedItem = {
//     name: "super sword",
//     durability: 85,
//     enhancement: 20
// }

// const mostlyEnhanced = {
//     name: "sword needs a little work",
//     durability: 25,
//     enhancement: 16
// }

// Repair method

describe('repairs an item', () => {
    const testItem = {
        name: "sword",
        durability: 50,
        enhancement: 1
    }
    it('should set durability to 100', () => {
        const repairedItem = enhancer.repair(testItem)
        expect(repairedItem.durability).toBe(100)
    })
})

describe('enhancement of item succeeded', () => {
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

    const mostlyEnhanced = {
        name: "sword needs a little work",
        durability: 25,
        enhancement: 16
    }

    it('should increase enhancement by one', () => {
        const resultingItem = enhancer.succeed(testItem)
        expect(resultingItem.enhancement).toBe(2)
    })
    it('should return enhancement level 20 if original item was level 20', () => {
        const fullyEnhancedItem = enhancer.succeed(enhancedItem);
        expect(fullyEnhancedItem.enhancement).toBe(20)
    })
    it('should not change durability', () => {
        const item = enhancer.succeed(mostlyEnhanced);
        expect(item.durability).toBe(25)
    })
})

describe('enhancement of item failed', () => {
    const testItem = {
        name: "sword",
        durability: 50,
        enhancement: 1
    }

    const mostlyEnhanced = {
        name: "sword needs a little work",
        durability: 25,
        enhancement: 16
    }

    it('reduces durability by 5 if enhance level is under 15', () => {
        const firstItem = enhancer.fail(testItem);
        expect(firstItem.durability).toBe(45)
    })
    it('reduces durability by 10 if enhance level is 15 or higher', () => {
        const secondItem = enhancer.fail(mostlyEnhanced);
        expect(secondItem.durability).toBe(15);
    })
    it('removes one level of enhancement if enhance level is 16 or higher', () => {
        const thirdItem = enhancer.fail(mostlyEnhanced);
        expect(thirdItem.enhancement).toBe(15);
    })
})


