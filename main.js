const SUBMIT = document.querySelector('#submit')
const MESSAGESUCCESS = document.getElementsByClassName('messageSuccess--none')
const FORM_MOBILE =document.getElementsByClassName('formSignUp__mobile')
const FORM_DESKTOP =document.getElementsByClassName('formSignUp__desktop')
let form = [...FORM_MOBILE]


SUBMIT.addEventListener('click',function (){
    console.log(document.documentElement.clientWidth)
    // FORM_MOBILE.toogle('formSignUp_mobile--none')
    // MESSAGESUCCESS.
})