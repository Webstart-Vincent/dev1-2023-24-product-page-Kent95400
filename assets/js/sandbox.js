// Déclarer/ initialiser une constante
const color = 'red'

const colors = ['pink', 'green', color]

const index = 1
const myColor = colors[index] // 'green

const value = colors[10] // undefined

// Concaténation
const emphasis1 = 'My car is' + colors[1] + ' and it is beautiful !'

// Interpolation
const emphasis2 = `My cars is ${colors[1]} and it is very very very beautiful` // ALTGR + 7 pour les guillemets à l'envers

// initialisation de l’objet
const car = {
  color: 'red', // propriété : valeur ou variable attachée à un objet
  fuel: 'electric', // propriété : valeur ou variable attachée à un objet

  // méthode : fonction attachée à un objet
  start() {
    console.log('Vroooom')
  },
}
const myPorperty = 'color'

// appel de la méthode start()
car.start()
car['start']()
const emphasis3 = `My car is ${car.color}`
const emphasis4 = `My car is ${car['color']}`

const emphasis5 = `My car is ${car[myPorperty]}`
