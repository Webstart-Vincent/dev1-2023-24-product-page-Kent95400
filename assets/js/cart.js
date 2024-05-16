const submitButton = document.querySelector('[type="submit"]')
const cartLengthContainer = document.querySelector('.cart>span')
const dialog = document.querySelector('dialog')
const dialogForm = document.querySelector('dialog form')
const cartButton = document.querySelector('.cart')
let cartLength = 0

const setCartUI = () => {
  if (cartLength > 0) cartLengthContainer.classList.add('show')
  else cartLengthContainer.classList.remove('show')

  // Actualiser la valeur écrite dans carLengthContainer et dans le dialogue

  cartLengthContainer.innerText = cartLength
  dialogForm.cartLengthInput.value = cartLength
}

submitButton.addEventListener('click', () => {
  cartLength++
  setCartUI()
})

cartButton.addEventListener('click', () => {
  dialog.showModal()
})

dialogForm.addEventListener('submit', () => {
  cartLength = dialogForm.cartLengthInput.value
  // on rappel la fonction pour remettre à jour la petite pastille du panier
  setCartUI()
})

// Afficher le nombre d'article dans l'input ✅

// Mettre à jour le cartLength quand on valide le dialog ✅

// Afficher trois input
