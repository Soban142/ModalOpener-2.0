var modal = document.querySelector('.modal')
var main = document.querySelector('.main')
var hidden = document.querySelector('.hidden')
var modalbtn = document.querySelector('.btn')
var closebtn = document.querySelector('.closebtn')

modalbtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    main.classList.add('hidden')
})

closebtn.addEventListener('click', () => {
    modal.classList.add('hidden')
    main.classList.remove('hidden')
})
