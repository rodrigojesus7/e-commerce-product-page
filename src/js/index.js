const smallImages = document.querySelectorAll('.small-image-button')

const thumbnail = document.querySelectorAll('.thumbnail')

const mainImage = document.querySelector('.product-img')

const previousImageBtn = document.querySelector('.previous-image-btn')
const nextImageBtn = document.querySelector('.next-image-btn')

const totalImages = 4
let currentImageIndex = 1


// Mobile / Tablet
function updateImage() {
    mainImage.src = `../src/images/image-product-${currentImageIndex}.jpg`
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




