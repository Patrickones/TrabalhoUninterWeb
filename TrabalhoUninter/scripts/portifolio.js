let image = document.querySelectorAll('.img2-portifolio');
const imageLinks = [
    'https://github.com/Patrickones', 
    'https://www.linkedin.com/in/patrick-fernando-de-souza-radaelli/', 
    'https://www.instagram.com/patrick.radaelli/' 
];

image.forEach((img, index) => {
    img.addEventListener('click', function() {
        window.location.href = imageLinks[index];
    })
})