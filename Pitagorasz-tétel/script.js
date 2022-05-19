function szamitas() {
    var a = document.getElementById('a')
    var b = document.getElementById('b')
    var c = document.getElementById('c')

    if (a.value == 'x' || a.value == 'X') {
        var a = document.getElementById('a')
        var b = document.getElementById('b').value
        var c = document.getElementById('c').value
        eredmeny = Math.sqrt(c * c - b * b)
        a.value = eredmeny
    } else if (b.value == 'x' || b.value == 'X') {
        var a = document.getElementById('a').value
        var b = document.getElementById('b')
        var c = document.getElementById('c').value
        eredmeny = Math.sqrt(c * c - a * a)
        b.value = eredmeny
    } else if (c.value == 'x' || c.value == 'X'){
        var a = document.getElementById('a').value
        var b = document.getElementById('b').value
        var c = document.getElementById('c')
        eredmeny = Math.sqrt(a * a + b * b)
        c.value = eredmeny
    } else if (a.value == '' || b.value == '' || c.value == '') {
        alert('Nincs x vagy X megadva!')
    }
}
