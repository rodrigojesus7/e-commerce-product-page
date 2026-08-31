const smallImages = document.querySelectorAll('.small-image-button')

const thumbnail = document.querySelectorAll('.thumbnail')

const mainImage = document.querySelector('.product-img')

const previousImageBtn = document.querySelector('.previous-image-btn')
const nextImageBtn = document.querySelector('.next-image-btn')

const totalImages = 4
let currentImageIndex = 1

const openMobileNavBtn = document.querySelector('.header__menu-button')
const closeMobileNavBtn = document.querySelector('.close-mobile-nav-btn')
const mobileNav = document.querySelector('.mobile-nav')
const overlayEffect = document.querySelector('.overlay-effect')


// Mobile / Tablet

openMobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('hidden')
    overlayEffect.classList.remove('hidden')
})

closeMobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden')
    overlayEffect.classList.add('hidden')
})





function updateImage() {
    mainImage.src = `./src/images/image-product-${currentImageIndex}.jpg`
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

    })
});

function clearSelection() {
    thumbnail.forEach(image => {
        image.classList.remove('product-small-images--selected')
    })
}




