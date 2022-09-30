
let respuesta = document.querySelectorAll(".respuesta");
let btn = document.querySelectorAll(".btn")
let pregunta= document.querySelectorAll(".pregunta")

btn.forEach(function(e,indice){
    e.addEventListener("click", function(){
        respuesta[indice].classList.toggle("show")
        pregunta[indice].classList.toggle("border_no")
        if(respuesta[indice].classList.contains("show")){
            e.innerHTML = " ";
            e.classList.add("bi-chevron-up")
        }else{
            e.classList.remove("bi-chevron-up")
            e.classList.add("bi-chevron-down")
            pregunta[indice].classList.toggle("border")

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
let masPreguntas = document.querySelector('.masPreguntas');

btnVerMas_2.addEventListener('click', function mostrar(){
    verMasPreg_2.classList.toggle('show');
    btnVerMas_2.remove('btnVerMas_2');
    masPreguntas.classList.toggle('show');
});

// $(document).ready(function(){ irarriba(); }); //Hacia arriba

// function irarriba(){
//   $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
//   $(window).scroll(function(){
//     if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
//   });
//   $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
// }

