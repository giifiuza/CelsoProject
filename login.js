function Login() {

    var usuario = document.getElementById('name').value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementById('password').value;
    senha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
        window.location.href = "/telaCadastro.html"

         if(usuario == "" || senha == "") { 
             alert("Os campos usuário e senha são obrigatório"); }
             
              if(usuario =! "admin" || senha != "admin"){
                alert("Usuário não cadastrado!")
             }
             else (usuario=="admin" && senha=="admin");
                 alert("Login realizado com sucesso!")

             }
            }
