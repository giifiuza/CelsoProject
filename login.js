function Login() {

    var usuario = document.getElementById('usuario').value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementById('senha').value;
    senha=senha.toLowerCase();

    if (usuario=="admin" && senha=="admin") {
        window.location.href="./telaOpcoes.html";
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong user!',
            footer: 'Please try again!'
          })
    }

}
            
