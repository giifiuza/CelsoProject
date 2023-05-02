async function Login() {

    var usuario = document.getElementById('name').value;
    usuario = usuario.toLowerCase();
    var id = document.getElementById('id').value;
    id = id.toLowerCase();

    if(usuario.length == 1 && id.length == 1 && !isNaN(id)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong user!',
            footer: 'Please try again!',
            heightAuto: false
          })
        return 0
    }
    if (usuario != "" && id != "") {
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
    try{
        fetch('https://access-system.azurewebsites.net/post', header)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'cadastro realizado',
                    showConfirmButton: false,
                    timer: 1500,
                    heightAuto: false
                })
            })
    }
    catch(err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User already registered',
            footer: 'Please try again!',
            heightAuto: false
          })
        return 0
    }
    }
}


