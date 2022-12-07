function getFruit(fruit) {

    switch (fruit.toLowerCase()) {
        case 'apple':
            return '🍎'
        case 'mango':
            return '🥭'
        case 'watermelon':
            return '🍉'
        default:
            return 'fruit not found'
    }

}

console.log(getFruit('watermelon'))