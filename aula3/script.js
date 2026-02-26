let square = document.getElementById('q1')
let color = document.getElementById('color')

function changecolor(e){
    let color = e.target.value
    square.style.backgroundColor = color
}

color.addEventListener('input', changecolor)