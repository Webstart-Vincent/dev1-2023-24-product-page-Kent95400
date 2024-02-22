/** @type {NodeListOf.<HTMLImageElement} */ /*taper "jsdoctype"*/
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')
// ^= veut dire 'qui commence par'
const swatches = document.querySelectorAll('.swatches button')

const productDiv = document.querySelector('.product')

/** @type {HTMLImageElement} */
const productMainImg = document.querySelector('.product__main')

productThumbs.forEach((productThumb, index) => {
  // Ajouter un event handler sur le click du productThumb
  productThumb.addEventListener('click', () => {
    // Récupérer le src du productThumb
    const src = productThumb.src

    // Donner src en valeur au src de productMainImg
    productMainImg.src = src

    // Donner au src de la productDiv
    productDiv.className = `product active-${index + 1}`
  })
})
// trouvé sur internet
document.addEventListener('DOMContentLoaded', function () {
  const swatches = document.querySelectorAll('.btn') // Assurez-vous que vous avez défini votre liste de boutons correctement
  const productThumbs = document.querySelectorAll('.thumb') // Assurez-vous que vous avez défini vos miniatures correctement
  const productMainImg = document.querySelector('.main-img') // Assurez-vous que vous avez défini votre image principale correctement
  const productDiv = document.querySelector('.product') // Assurez-vous que vous avez défini votre élément de produit correctement

  swatches.forEach((button) => {
    button.addEventListener('click', function () {
      swatches.forEach((btn) => btn.classList.remove('selected'))
      this.classList.add('selected')

      const color = this.classList[0].replace('btn', '')

      productThumbs.forEach((thumb) => {
        const actualImgSrc = thumb.src
        const newImgSrc = actualImgSrc.replace(
          /nike-pegasus-\w+/,
          `nike-pegasus-${color}`
        )
        thumb.src = newImgSrc
      })

      const actualMainImgSrc = productMainImg.src
      const newMainImgSrc = actualMainImgSrc.replace(
        /nike-pegasus-\w+/,
        `nike-pegasus-${color}`
      )
      productMainImg.src = newMainImgSrc

      productDiv.className = `product active-${color}`
    })
  })
})
