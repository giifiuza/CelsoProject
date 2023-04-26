async function Login() {

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
             const request = {
                 "nome": usuario,
                 "id": id
             }
             
             const header = {
                 method: 'POST',
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringfy(request)
             }
             
             console.log(header)
             
             await fetch('http://192.168.234.137:8080/', header)
             .then((Response) => Response.json())
             .then((data) => {
                 console.log(data)
             })
            Swal.fire({
                icon: 'success',
                title: 'cadastro realizado',
                showConfirmButton: false,
                timer: 1500
              })
            
            
              
             }

             }
            }
        
        
