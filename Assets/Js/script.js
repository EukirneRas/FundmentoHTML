/*
Case Sensitive
Por Tag: getElementByTagName()
Por Id: getElementById()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySeletor()
*/

let nome = window.document.getElementById("Nome")
let email = document.querySelector("#Email")
let cpf = document.querySelector("#CPF")
let cartao = document.querySelector("#Cartao")
let data = document.querySelector("#Data")
let codigo = document.querySelector("#Codigo")
let nomeOk = false
let emailOK = false
let cpfOk = false

nome.style.width = "50%"
email.style.width = "50%"
cpf.style.width = "50%"
cartao.style.width = "50%"
data.style.width = "50%"
codigo.style.width = "50%"

function ValidaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function ValidaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOK = true
    }
}

function ValidaCPF(){
    let cpf = document.querySelector("#txtCPF")
    if(cpf.value.length != 11){
        txtcpf.innerHTML = "CPF Inválido"
        txtcpf.style.color = "red"
    }else{
        txtcpf.innerHTML = "CPF Válido"
        txtcpf.style.color = "green"
        cpfOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOK == true && cpfOk == true){
        alert ("Seu Iphone já está chegando!!!")
    }
    else {
        alert ("Erro nos dados fornecidos!!")
    }
}