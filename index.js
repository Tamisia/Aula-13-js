try {
    let nome =document.getElementsByClassName(nome).value
    cadastroUsuario(nome)
} catch (e) {
    alert("Por favor verique a informação:" + e.message)
}