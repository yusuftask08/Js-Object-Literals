function getFruit(fruit) {

    const fruits = {
        'apple': '🍎',
        'mango': '🥭',
        'watermelon': '🍉'
    }

    return fruits[fruit.toLowerCase()] ?? 'fruit not found'
}

console.log(getFruit('watermelon'))