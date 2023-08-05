
/**
 * Get a random ordered version of an array.
 * @param {Array} array Array to shuffle.
 * @returns {Array} Returns the same array in random order.
 */
const shuffle = (array) => {

// fisher-yates shuffle

  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

/**
 * Roll a number between 0 and 100.
 * @param {number} odds Likelihood of a true result. The higher the number, the more likely roll will return true.
 * @returns {boolean} Likelihood as a boolean.
 */
const roll = (odds) => {
    return (odds >= Math.floor(Math.random() * 100))
}

/**
 * Get one element of array and remove it, until only one element remains.
 * @param {Array} arr Array to remove from.
 * @returns {any} Element of array to remove.
 */
const countdown = (arr) => {
    return (arr.length > 1) ? arr.pop() : arr[0]
}

/**
 * Get one random element of an array.
 * @param {Array<string>} arr Array to pick from.
 * @returns {any} Random element of array.
 */
const pick = (arr) => {
  const id = `p{${stringToHash(arr.join('-'))}}`
  if (!game[id] || !game[id]?.length) {
    game[id] = shuffle([...arr])
  }
  return game[id].pop()
}

