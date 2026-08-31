const smallImages = document.querySelectorAll('.small-image-button')

const thumbnail = document.querySelectorAll('.thumbnail')

const mainImage = document.querySelector('.product-img')

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


