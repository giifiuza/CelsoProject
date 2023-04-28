function listatabela(nome, id, ){
    var tb = document.getElementById("tbody")
    var qtdLinhas = tb.rows.lenght;
    var linha = tb.insertRow(qtdLinhas);

    var cellid = linha.insertCell(0);
    var cellnome = linha.insertCell(1);
    var cellremover = linha.insertCell(2)

    cellid.innerHTML = id;
    cellnome.innerHTML = nome;
    cellremover.innerHTML = '<button>excluir</button>';

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
        while(document.getElementById('tbody').rows.length > data['message'].length){
            document.getElementById('tbody').deleteRow(0);
        }
    }
    )
}



