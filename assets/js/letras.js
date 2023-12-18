let colorPrimero
let colorSegundo

const primero = document.getElementById("key")
const segundo = document.getElementById("segundo")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorPrimero = "pink"
    } else if (event.key === 's') {
        colorPrimero = "orange"
    } else if (event.key === 'd') {
        colorPrimero = "lightblue"
    }
    primero.style.backgroundColor = colorPrimero

})


document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        colorSegundo = "purple"
    } else if (event.key === 'w') {
        colorSegundo = "gray"
    } else if (event.key === 'e') {
        colorSegundo = "brown"
    }
    segundo.style.backgroundColor = colorSegundo
})