const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')

const  handleFocus = ({target})=>{
    const span = target.previousElementSibling; /*Usando pra pegar o elemento irmao anterior do target*/ 
    span.classList.add('span-active');
}

const handleFocusOut = ({target})=>{

    if(target.value === ''){
        const span = target.previousElementSibling; /*Usando pra pegar o elemento irmao anterior do target*/ 
        span.classList.remove('span-active');
    }
   
}

const handleChange = ()=>{
    const [username , password] = inputs;
    if (username.value && password.value.lenght >= 8) {
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled','');
    }
}

inputs.forEach((input)=>{
    input.addEventListener('focus', handleFocus);
    input.addEventListener('focusout', handleFocusOut);
    input.addEventListener('input', handleChange);
})