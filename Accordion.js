'use strict'

//Сохраняем коллекцию элементов с классом element чтобы функцией перебрать при клике
const fall = document.querySelectorAll('.element');

//Перебираем элементы и при нажатии добавляем на дочерний элемент класс active, который добавляет высоту
for (let i=0; i<fall.length; i++) {
    fall[i].addEventListener('click', function(){
        this.querySelector('.content').classList.toggle('active')
    })
}