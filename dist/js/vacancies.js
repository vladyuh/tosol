window.addEventListener("load", function () {

    if(document.querySelectorAll('.js-vacancies-block__item-more').length){
        document.querySelectorAll('.js-vacancies-block__item-more').forEach(function (el){
            el.addEventListener('click', function (e){
                el.parentElement.querySelector('.js-vacancies-block__item-desc').classList.toggle('is-active');
                el.classList.toggle('is-active');
            })
        })
    }
    
});