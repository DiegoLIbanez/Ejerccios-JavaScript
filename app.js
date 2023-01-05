const headerTitle = document.getElementById('header-title')
const header = document.getElementById('main-header')

// getElementById()
// headerTitle.textContent = 'hola'
// headerTitle.innerHTML = 'Adios'
// headerTitle.innerHTML = '<h3>Hola de nuevo</h3>'
// console.log(headerTitle)

// getElementsByClass()

// const items = document.getElementsByClassName('list-group-item')
// console.log(items[0])
// items[0].textContent = 'Prueba'

// getelementsBytagName


// const items = document.getElementsByTagName('li')
// items[1].textContent = 'Prueba 2'

// querySelector()
// const headers = document.querySelector('#main-header')
// headers.style.borderBottom = 'solid 4px #ccc'

// const input = document.querySelector('input')
// input.value = 'Hola mundo'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = 'Guardar'


// const items = document.querySelector('.list-group-item')
// items.style.color = 'red'

// querySelectorAll()

// var items = document.querySelectorAll('.list-group-item')
// items[3].style.color = 'red'

// var title = document.querySelectorAll('.title')
// title[1].style.color = 'red'

// var impar = document.querySelectorAll('li:nth-child(odd)')
// var par = document.querySelectorAll('li:nth-child(even)')
// for (let index = 0; index < impar.length; index++) {
//     impar[index].style.backgroundColor = '#ccc' 
//     par[index].style.backgroundColor = '#f4f4f4' 

// parenNode
// var itemsList = document.querySelector('#items')
// var main = itemsList.parentNode
// main.style.backgroundColor = '#f4f4f4'
// console.log(itemsList.parentNode)

// ParentElement

// // childNodes
// var items = document.querySelector('#items')
// // console.log(items.childNodes)

// // // children
// // console.log(items.children)

// // // firsChild
// // console.log(items.firstElementChild)
// // items.firstElementChild.textContent = 'Prueba 7'

// // lasttElementChiid
// console.log(items.lastElementChild)
// items.lastElementChild.textContent = 'Prueba'


// createElement
// var nuevoDiv = document.createElement('div')
// nuevoDiv.className = 'Hola'
// nuevoDiv.id = 'nuevo div'


// var nuevoNodoText = document.createTextNode('Hola mundo!!!')

// nuevoDiv.appendChild(nuevoNodoText)

// console.log(nuevoDiv)


// var contenedor = document.querySelector('header .container')
// console.log(contenedor)

// var h1 = document.querySelector('h1')
// console.log(h1)

// contenedor.insertBefore(nuevoDiv, h1)

// document.getElementById('boton').addEventListener('click', hacerClick)

// function hacerClick() {
//  const cambiado = document.getElementById('header-title')
//  cambiado.textContent = 'hola mundo'
// }


//Agregar elemento a la lista

var form = document.getElementById('agregarForm')
var list = document.getElementById('items')


form.addEventListener('submit', agregarItems)
list.addEventListener('click', eliminarList)


// agregar lista

function agregarItems(e) {
    e.preventDefault()

    var newItems = document.getElementById('item').value;

    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItems))

    var botonDel = document.createElement('button')
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar'
    botonDel.appendChild(document.createTextNode('X'))

    li.appendChild(botonDel)
    list.appendChild(li)
}


// eliminar lista
function eliminarList(e) {

    if(e.target.classList.contains('eliminar')){
        if(confirm('seguro que desea eliminar el elemento')){
            var li = e.target.parentElement;
        list.removeChild(li)
        }
    }
}