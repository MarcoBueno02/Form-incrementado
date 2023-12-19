/* Senha */

var is_visible = false;

function see()
{
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true; 
        see.style.color='#262626';
    }
    
}

function check()
{
    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;
    document.getElementById("count").innerText="Número de Caracteres : " + input.length;
    if(input.length>=8)
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red"; 
    }
    
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red"; 
    }
    
    if(input.match(/[A-Z]/i))
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red"; 
    }
}

/* CPF */

const  input = document.querySelector('cpf')

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

    if(cpflength === 3 || cpflength === 7) {
        cpf.value += '.'
    }else if(cpflength === 11){
        cpf.value += '-'
    }
})

/* Confirme de Senha*/

function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]')

    if(confirma.value == senha.value) {
        confirma.setCustomValidity('');
    }   else {
        confirma.setCustomValidity('As senhas não conferem');
    }
}

function senhaOK() {
    alert("Cadastro Concluido!")
}