window.addEventListener("load", function () {

    document.querySelectorAll('.vacancies-block__item-more').forEach(function (el){
        el.addEventListener('click', function (e){
            el.parentElement.querySelector('.vacancies-block__item-desc').classList.toggle('is-active');
            el.classList.toggle('is-active');
        })
    })

    
});