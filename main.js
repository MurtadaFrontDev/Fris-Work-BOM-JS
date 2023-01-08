let lis = document.querySelectorAll('ul li');
let exp = document.querySelector('.EXP')




if (window.localStorage.getItem('color')) {
    exp.style.backgroundColor = window.localStorage.getItem('color');


    lis.forEach((li) => {
        li.classList.remove('active');
    });


    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active');
}





lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        lis.forEach((li) => {
            li.classList.remove('active');
        });


        e.currentTarget.classList.add('active');

        window.localStorage.setItem("color", e.currentTarget.dataset.color);

        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});