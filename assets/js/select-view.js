const root = document.documentElement
const productMainImg = document.querySelector('.product__main')
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')
const productFilter = document.querySelector('.product::after')
const productFilterPositions = ['1/5/2/6', '2/5/3/6', '3/5/4/6', '4/5/5/6']

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
