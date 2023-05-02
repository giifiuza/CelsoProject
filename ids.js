function listatabela(nome, id){
    var tb = document.getElementById("tbody")
    var qtdLinhas = tb.rows.lenght;
    var linha = tb.insertRow(qtdLinhas);

    var cellid = linha.insertCell(0);
    var cellnome = linha.insertCell(1);
    var cellremover = linha.insertCell(2)

    cellid.innerHTML = id;
    cellnome.innerHTML = nome;
    cellremover.innerHTML = '<button onclick="removerElemento(event.target)" class="butao">excluir</button>';

 }


function carrega(){
    fetch("https://access-system.azurewebsites.net/get")
    .then((Response) => Response.json())
    .then((data) => {   
        
        try{
            for(let i = 0; i < data["message"].length; i++){
                listatabela(data["message"][i][0], data["message"][i][1])
        }
        }
        catch(error){
            console.log("deu erro")
        }
    }
    )
}

function removerElemento(elementoClicado) {
    console.log("a")
    const request = {
        "nome": elementoClicado.closest("tr").getElementsByTagName("td")[1].innerText
    }

    const header = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }
    fetch('https://access-system.azurewebsites.net/delete', header)
            .then((Response) => Response.json())
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'User deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    elementoClicado.closest("tr").remove();

  }



