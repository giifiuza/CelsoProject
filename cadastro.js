async function Login() {

    var usuario = document.getElementById('name').value;
    usuario=usuario.toLowerCase();
    var id= document.getElementById('id').value;
    id=id.toLowerCase();
    if (usuario !="" && id !="") {
          
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
                 body: JSON.stringify(request)
             }
             
             console.log(header)
             
             await fetch('https://access-system.azurewebsites.net/post', header)
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
        
        
