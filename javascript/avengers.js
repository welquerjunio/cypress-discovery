var avengers = ['Tony Stark', 'Clint Barton', 'Natash Romanoff', 'Steve Rogers', 'Bruce Banner']

function listaVigadores() {
    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)

    })
}