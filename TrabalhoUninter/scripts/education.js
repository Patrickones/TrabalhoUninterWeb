document.addEventListener('DOMContentLoaded', function () {
    let buttonEducation = document.getElementById('button-education');
    let divEducation = document.querySelectorAll('.div-div-education'); // Seleciona o único elemento com essa classe

    
    buttonEducation.addEventListener('click', function () {
        divEducation.forEach(div => {
            div.classList.toggle('active'); // Alterna a classe 'active'
        })
    });
});



