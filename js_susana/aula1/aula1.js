


function message () {
    console.log("Hello");

    let x = document.querySelector('#res').value; 
    
    document.getElementById('msg').innerText = x ;
    document.querySelector('#teste').innerText = x ;
}

function soma(){
    let a = +document.querySelector('#a').value;
    let b = +document.querySelector('#b').value;
    document.querySelector('#resSoma').innerText     = +(a+b);
}