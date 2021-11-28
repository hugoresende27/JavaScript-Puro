const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btn = document.getElementById('btnSoma')
const res = document.getElementById('res')
const tab = document.getElementById('tabuada')
const resTab = document.getElementById('resTab')
const carr = document.getElementById('carr')
const carr2 = document.getElementById('carr2')

esconder()

num1.addEventListener('input', () => {
    res.innerHTML= ''
})
num2.addEventListener('input', () => {
    res.innerHTML= ''
})

btn.addEventListener('click', () => {
    let a = +num1.value
    let b = +num2.value
    let c = a+b
    res.innerHTML = c
})

tab.addEventListener('input', () => {
    resTab.innerText =''
    let x = +tab.value
    for (let i=1; i<=10; i++)
    {
        resTab.innerText += `${i} X ${x} = ${x*i}\n`
    }
})

carr.addEventListener('click', ()=> {
    document.getElementById('item').innerText ="JS PURO VANILLA JAVASCRIPT"
})
carr2.addEventListener('click', ()=> {
    $("#item").text("Usando o jQuery")
})

function esconder() {
    // document.getElementById('titulo1').style.display = 'none'
    // document.getElementById('titulo2').style.display = 'none'
    // document.getElementById('titulo3').style.display = 'none'
    $("#titulo1").hide()
    $("#titulo2").hide()
    $("#titulo3").hide()

}

function ver() {
    // document.getElementById('titulo1').style.display = 'block'
    // document.getElementById('titulo2').style.display = 'block'
    // document.getElementById('titulo3').style.display = 'block'
    $("#titulo1").show()
    $("#titulo2").show()
    $("#titulo3").show()
}