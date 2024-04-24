const root = document.documentElement
const productMainImg = document.querySelector('.product__main')
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')
const productFilter = document.querySelector('.product::after')
const swatchesButtons = document.querySelectorAll(
  '.btn-green, .btn-red, .btn-purple'
)
const spirit = document.querySelector('.spirit')
const productFilterPositions = ['1/5/2/6', '2/5/3/6', '3/5/4/6', '4/5/5/6']
const colors = ['green', 'red', 'purple']

// Pour chaque élément du tableau productThumbs, on ajoute _event listener_ qui observera le clic sur cet élément
productThumbs.forEach((productThumb, index) => {
  productThumb.addEventListener('click', () => {
    // Quand on clique sur un de ces éléments, on prend la valeur de son attribut `src` pour la transmettre à l’attribut `src` de la `productMainImg`
    const { src } = productThumb // Destructuration de l'objet productThumb
    productMainImg.src = src

    // Changer la valeur de la propriété de la viariable CSS --product-filter-postitions
    root.style.setProperty(
      '--product-filter-postitions',
      productFilterPositions[index]
    )
  })
})

const setUI = (button, index) => {
  /* Quand on clique sur un de ces boutons:
        1 - on change la couleur de l'image principiale
        2 - on change la couleur des miniatures
        3 - on change la couleur du filtre
        4 - on change la couleur de la forme du fond
        5 - on enlève toutes les classes 'active' des boutons
        6 - on ajoute la classe active sur le bon 'bouton'
*/
  // 1.
  productMainImg.src = `./assets/img/jpg/nike-pegasus-${colors[index]}-1.jpg`

  // 2.
  productThumbs.forEach((productThumb, thumbIndex) => {
    productThumb.src = `./assets/img/jpg/nike-pegasus-${colors[index]}-${
      thumbIndex + 1
    }.jpg`
  })
  // 3.
  root.style.setProperty(
    '--product-filter-color',
    `var(--${colors[index]}-color)`
  )

  // 4.
  spirit.src = `./assets/img/svg/spirit-${colors[index]}.svg`

  // 5.
  swatchesButtons.forEach((button) => button.classList.remove('selected'))

  // 6.
  button.classList.add('selected')
}
// Pour chaque bouton du tab swatchButtons on ajoute un _event listener qui observera le clic sur ce bouton (on récupère l'index parce qu'on en aura besoin)

swatchesButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    setUI(button, index)
  })
})
// Quand on clique sur un de ces boutons, on prend son index pour l'affecter à la variable colorIndex
