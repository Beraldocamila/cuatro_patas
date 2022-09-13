
let respuesta = document.querySelectorAll(".respuesta");
let btn = document.querySelectorAll(".btn")

btn.forEach(function(e,indice){
    e.addEventListener("click", function(){
        respuesta[indice].classList.toggle("show")
        if(respuesta[indice].classList.contains("show")){
            e.innerHTML = " ";
            e.classList.add("bi-chevron-up")
        } else{
            e.classList.remove("bi-chevron-up")
            e.classList.add("bi-chevron-down")
        }
    })
})

let btnVerMas = document.querySelector('.btnVerMas');
let verMasPreg = document.querySelector('.verMasPreg');

btnVerMas.addEventListener('click', function mostrar(){
    verMasPreg.classList.toggle('show');
    btnVerMas.remove('btnVerMas')



});

let btnVerMas_2 = document.querySelector('.btnVerMas_2');
let verMasPreg_2 = document.querySelector('.verMasPreg_2');

btnVerMas_2.addEventListener('click', function mostrar(){
    verMasPreg_2.classList.toggle('show');
    btnVerMas_2.remove('btnVerMas_2')



});

