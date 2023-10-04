const $submit = document.querySelector('#submit')
const $submitDesktop = document.querySelector('#submitDesktop')
const $messageSuccess = document.getElementById('messageSuccess')
const $formMobile =document.getElementById('formSignUp__mobile')
const $formDesktop =document.getElementById('formSignUp__desktop')
const $emailMobile = document.getElementById("emailMobile")
const $emailDesktop = document.getElementById("emailDesktop")


function obtenerEmail(mail){
    const email = mail.value;
    const validarEmail = email.split("@");
    last = validarEmail.length-1;
    return `@${validarEmail[last]}`
}

const gmail="@loremcompany.com";


$submit.addEventListener('click',function (){
    if(obtenerEmail($emailMobile) === gmail){
        $formMobile.classList.toggle("formSignUp__mobile--none")
        $formDesktop.classList.toggle("formSignUp__desktop--none")
        $messageSuccess.classList.remove("messageSuccess--none")
        $messageSuccess.classList.add("messageSuccess")
    }else{
        alert("La cagaste");
    }   
})
$submitDesktop.addEventListener('click',function (){
    if(obtenerEmail($emailDesktop) === gmail){
        $formMobile.classList.toggle("formSignUp__mobile--none")
        $formDesktop.classList.toggle("formSignUp__desktop--none")
        console.log($formDesktop)
        $messageSuccess.classList.remove("messageSuccess--none")
        $messageSuccess.classList.add("messageSuccess")
    }else{
        alert("La cagaste");
    }
})