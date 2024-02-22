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

// //trouvé sur internet
// document.addEventListener('DOMContentLoaded', function () {
//     swatches.forEach((button) => {
//       button.addEventListener('click', function () {
//         swatches.forEach((btn) => btn.classList.remove('selected'));
//         this.classList.add('selected');

//   const color = this.classList[0].replace('btn','');

//   productThumbs.forEach(thumb) => {
//     const actualImgSrc = thumb.src;
//     const NewImgSrc = actualImgSrc.replace(/nike-pegasus-\w+/, 'nike-pegasus-${color}');
//     thumb.src = NewImgSrc;
//   });

//   const actualMainImgSrc = productMainImg.src;
//   const NewMainImgSrc = actualMainImgSrc.replace(/nike-pegasus-\w+/, 'nike-pegasus-${color}');
//   productMainImg.src = NewMainImgSrc;

//   productDiv.className = 'product active-${color}';
//     });
//   });
// });

//         switch (true) {
// //  contains est une méthode de l'objet classList. Elle est utilisée pour vérifier si une classe particulière est présente dans la liste des classes de l'élément HTML.
//             case this.classList.contains('btn-red'):
// // forEach permet d'exécuter une fonction pour chaque élément.
//               productThumbs.forEach((thumb) => {
// // currentImageSrc : constante appelée en extrayant la propriété src de l'objet thumb
//                 const currentImageSrc = thumb.src;

// // remplacer dans le chemin de l'image toutes les occurrences de 'nike-pegasus-"couleur"' par 'nike-pegasus-"autre couleur"'
//                 const newImageSrc = currentImageSrc.replace('nike-pegasus-green', 'nike-pegasus-red');
//                 thumb.src = newImageSrc;
//                 const MainImg = productMainImg.src;
//                 const MainImg.Src = MainImg.replace('nike-pegasus-green', 'nike-pegasus-red')
//               });
//               break;
//              }
//              switch (true) {
// // La méthode contain() est utilisée pour vérifier si la classe spécifiée existe dans les classes CSS et par rapport à elle, elle renvoie la valeur booléenne comme vraie ou fausse.
//                 case this.classList.contains('btn-red'):
//                   productThumbs.forEach((thumb) => {
//                     const currentImageSrc = thumb.src;
//                     const newImageSrc = currentImageSrc.replace('nike-pegasus-purple', 'nike-pegasus-red');
//                     thumb.src = newImageSrc;
//                     const MainImg = productMainImg.src;
//                     const MainImg.Src = MainImg.replace('nike-pegasus-purple', 'nike-pegasus-red')
//                   });
//                   break;
//                  }
//              switch (true) {
//                 case this.classList.contains('btn-purple'):
//                   productThumbs.forEach((thumb) => {
//                     const currentImageSrc = thumb.src;
//                     const newImageSrc = currentImageSrc.replace('nike-pegasus-red', 'nike-pegasus-purple');
//                     thumb.src = newImageSrc;
//                     const MainImg = productMainImg.src;
//                     const MainImg.Src = MainImg.replace('nike-pegasus-red', 'nike-pegasus-purple')
//                   });
//                   break;
//                  }

//                  switch (true) {
//                     case this.classList.contains('btn-purple'):
//                       productThumbs.forEach((thumb) => {
//                         const currentImageSrc = thumb.src;
//                         const newImageSrc = currentImageSrc.replace('nike-pegasus-green', 'nike-pegasus-purple');
//                         thumb.src = newImageSrc;
//                         const MainImg = productMainImg.src;
//                         const MainImg.Src = MainImg.replace('nike-pegasus-green', 'nike-pegasus-purple')
//                       });
//                       break;
//                      }

//                  switch (true) {
//                     case this.classList.contains('btn-green'):
//                       productThumbs.forEach((thumb) => {
//                         const currentImageSrc = thumb.src;
//                         const newImageSrc = currentImageSrc.replace('nike-pegasus-purple', 'nike-pegasus-green');
//                         thumb.src = newImageSrc;
//                         const MainImg = productMainImg.src;
//                         const MainImg.Src = MainImg.replace('nike-pegasus-purple', 'nike-pegasus-green')
//                       });
//                       break;
//                      }

//                  switch (true) {
//                     case this.classList.contains('btn-green'):
//                       productThumbs.forEach((thumb) => {
//                         const currentImageSrc = thumb.src;
//                         const newImageSrc = currentImageSrc.replace('nike-pegasus-red', 'nike-pegasus-green');
//                         thumb.src = newImageSrc;
//                         const MainImg = productMainImg.src;
//                         const MainImg.Src = MainImg.replace('nike-pegasus-red', 'nike-pegasus-green')
//                       });
//                       break;
//                      }
//         });
//       });
//     });

// swatches.forEach((button) => {
//   button.addEventListener('click', function () {
//     swatches.forEach((button) => button.classList.remove('selected'))
//     this.classList.add('selected')

//     switch (true) {
//       case this.classList.contains('btn-red'):
//         productThumbs.forEach((thumb) => {
//           const FirstImg = thumb.src
//           const NewImg = FirstImg.replace(
//             'nike-pegasus-green',
//             'nike-pegasus-red'
//           )
//           thumb.src = FirstImg
//         })
//         break
//     }
//   })
// })
