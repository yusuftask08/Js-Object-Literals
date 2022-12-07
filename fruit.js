function getFruit(fruit) {

    if (fruit.toLowerCase() === 'apple') {
        return '🍎'
    } else if (fruit.toLowerCase() === 'mango') {
        return '🥭'
    } else if (fruit.toLowerCase() === 'watermelon') {
        return '🍉'
    } else {
        return 'fruit not found'
    }

}

console.log(getFruit('mango'))