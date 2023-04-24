function Login() {

    var usuario = document.getElementById('name').value;
    usuario=usuario.toLowerCase();
    var id= document.getElementById('id').value;
    id=id.toLowerCase();
    if (usuario !="" && id !="") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Please try again!'
          })
        

         if(usuario == "root" || id == "123456789") { 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'cadastro realizado',
                showConfirmButton: false,
                timer: 1500
              })
            
            
              
             }

             }
            }
        