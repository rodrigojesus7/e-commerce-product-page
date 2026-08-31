const smallImages = document.querySelectorAll('.small-image-button')

const mainImage = document.querySelector('.product-img')

smallImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        selectedImage = index + 1
        mainImage.src = `../src/images/image-product-${selectedImage}.jpg`;

    })
});



