const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btn = document.getElementById('btnSoma')
const res = document.getElementById('res')

btn.addEventListener('click', () => {
    let a = +num1.value
    let b = +num2.value
    let c = a+b
    res.innerHTML = c
})