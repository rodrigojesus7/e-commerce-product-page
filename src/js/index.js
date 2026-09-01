const smallImages = document.querySelectorAll('.small-image-button')

const thumbnail = document.querySelectorAll('.thumbnail')

const mainImage = document.querySelector('.product-img')

const previousImageBtn = document.querySelector('.previous-image-btn')
const nextImageBtn = document.querySelector('.next-image-btn')



const overlayGallery = document.querySelector('.overlay-product-gallery')
const closeOverlayGalleryBtn = document.querySelector('.overlay-product-gallery-close-button')

const overlaySmallImages = document.querySelectorAll('.overlay-small-image-button')

const overlayThumbnail = document.querySelectorAll('.overlay-thumbnail')

const overlayMainImage = document.querySelector('.overlay-product-img')

const overlayPreviousImageBtn = document.querySelector('.overlay-previous-image-btn')
const overlayNextImageBtn = document.querySelector('.overlay-next-image-btn')

const totalImages = 4
let currentImageIndex = 1
let itemQuantityValue = 0



const openMobileNavBtn = document.querySelector('.header__menu-button')
const closeMobileNavBtn = document.querySelector('.close-mobile-nav-btn')
const mobileNav = document.querySelector('.mobile-nav')
const overlayEffect = document.querySelector('.overlay-effect')



const cartBtn = document.querySelector('.header__cart-button')
const cartContainer = document.querySelector('.cart-container')
const cartItemDeleteBtn = document.querySelector('.cart-items__delete-btn')
const emptyCartMessage = document.querySelector('.cart-items-container__empty-message')
const cartItemsContainer = document.querySelector('.cart-items')

let itemQuantity = document.querySelector('.addToCart__item-quantity')
const minusBtn = document.querySelector('.addToCart__minus-quantity-button')
const plusBtn = document.querySelector('.addToCart__plus-quantity-button')
const addToCartBtn = document.querySelector('.addToCart-button')

let cartItemTitle = document.querySelector('.cart-items__item-title')
let cartItemUnityPrice = document.querySelector('.cart-item-unity-price')
let cartItemQuantity = document.querySelector('.cart-item-quantity')
let cartItemTotalPrice = document.querySelector('.cart-item-total-price')
let cartItemImage = document.querySelector('.cart-items__image')

let itemTitle = document.querySelector('.product__title')
let itemPrice = document.querySelector('.product_price-value')

// Mobile / Tablet

openMobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('hidden')
    overlayEffect.classList.remove('hidden')
    cartContainer.classList.add('hidden')
})

closeMobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden')
    overlayEffect.classList.add('hidden')
})





function updateImage() {
    mainImage.src = `./src/images/image-product-${currentImageIndex}.jpg`
    overlayMainImage.src = `./src/images/image-product-${currentImageIndex}.jpg`
}

previousImageBtn.addEventListener('click', () => {
    currentImageIndex--

    if (currentImageIndex < 1) {
        currentImageIndex = totalImages
    }

    updateImage()
})

nextImageBtn.addEventListener('click', () => {
    currentImageIndex++

    if (currentImageIndex > totalImages) {
        currentImageIndex = 1
    }

    updateImage()
})










// Desktop

smallImages.forEach((image, index) => {

    image.addEventListener('click', () => {

        clearSelection()

        const thumbnailSrc = image.querySelector('img').src;

        mainImage.src = thumbnailSrc.replace('-thumbnail.jpg', '.jpg')

        thumbnail[index].classList.add('product-small-images--selected')

        overlayMainImage.src = thumbnailSrc.replace('-thumbnail.jpg', '.jpg')
    })
});

function clearSelection() {
    thumbnail.forEach(image => {
        image.classList.remove('product-small-images--selected')
    })

    overlayThumbnail.forEach(image => {
        image.classList.remove('product-small-images--selected')
    })

}








mainImage.addEventListener('click', () => {

    if (window.innerWidth >= 1440) {
        overlayGallery.classList.remove('hidden')
    }

})

closeOverlayGalleryBtn.addEventListener('click', () => {
    overlayGallery.classList.add('hidden')
})


overlayPreviousImageBtn.addEventListener('click', () => {
    currentImageIndex--

    if (currentImageIndex < 1) {
        currentImageIndex = totalImages
    }

    let thumbnailIndex = currentImageIndex - 1

    clearSelection()

    thumbnail[thumbnailIndex].classList.add('product-small-images--selected')

    overlayThumbnail[thumbnailIndex].classList.add('product-small-images--selected')

    updateImage()
})

overlayNextImageBtn.addEventListener('click', () => {
    currentImageIndex++

    if (currentImageIndex > totalImages) {
        currentImageIndex = 1
    }

    let thumbnailIndex = currentImageIndex - 1

    clearSelection()

    thumbnail[thumbnailIndex].classList.add('product-small-images--selected')

    overlayThumbnail[thumbnailIndex].classList.add('product-small-images--selected')


    updateImage()
})



overlaySmallImages.forEach((image, index) => {

    image.addEventListener('click', () => {

        clearSelection()

        const thumbnailSrc = image.querySelector('img').src;

        mainImage.src = thumbnailSrc.replace('-thumbnail.jpg', '.jpg')

        thumbnail[index].classList.add('product-small-images--selected')

        overlayThumbnail[index].classList.add('product-small-images--selected')


        overlayMainImage.src = thumbnailSrc.replace('-thumbnail.jpg', '.jpg')
    })
});






// Cart

cartBtn.addEventListener('click', () => {
    if (cartContainer.classList.contains('hidden')) {
        cartContainer.classList.remove('hidden')
    } else {
        cartContainer.classList.add('hidden')
    }
})

cartItemDeleteBtn.addEventListener('click', () => {
    emptyCartMessage.classList.remove('hidden')
    cartItemsContainer.classList.add('hidden')

    itemQuantityValue = 0

    itemQuantity.textContent = 0

    cartItemQuantity.textContent = 0
})


minusBtn.addEventListener('click', () => {

    itemQuantityValue = Number(itemQuantity.textContent)

    if (itemQuantityValue > 0) {
        itemQuantityValue--
    }

    itemQuantity.textContent = itemQuantityValue
})

plusBtn.addEventListener('click', () => {

    itemQuantityValue = Number(itemQuantity.textContent)

    itemQuantityValue++

    itemQuantity.textContent = itemQuantityValue
})


addToCartBtn.addEventListener('click', () => {
    if (itemQuantityValue > 0) {

        cartContainer.classList.remove('hidden')

        emptyCartMessage.classList.add('hidden')
        cartItemsContainer.classList.remove('hidden')

        cartItemTitle.textContent = itemTitle.textContent
        cartItemUnityPrice.textContent = Number(itemPrice.textContent).toFixed(2)

        cartItemImage.src = thumbnail[0].src

        cartItemQuantity.textContent = itemQuantityValue + Number(cartItemQuantity.textContent)

        cartItemTotalPrice.textContent = (Number(cartItemQuantity.textContent) * Number(cartItemUnityPrice.textContent)).toFixed(2)
    }

})

