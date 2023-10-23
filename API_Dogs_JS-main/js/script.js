function racasLoad(preencherSelecaoComRaca){
    $.ajax({
        url: 'https://dog.ceo/api/breeds/list/all' , method: 'GET' , 
        
        success: function(resposta){
            preencherSelecaoComRaca(resposta);
        },
        error: function(err){
            console.log(err);
        }
    });
}

function preencheSelecaoDeRaca(racas) {
    let racaSelected = $('racaSelected');
    racaSelected.empty();

    for (let i = 0; i < racas.length; i++){
        let raca = racas [i];

        racaSelected.append($('<option>', {
            value: raca.id,

            text: raca.name
        }));
    }

    racaSelected.change(function(){
        
        let idSelected = racaSelected.val();

        selecionaRaca = racas.find(function(raca){
            if (raca.id === idSelected){
                return raca;
            } else {
                return null;
            }
        });
        atualizaInfoRaca();
    });
    racaSelected.change();
}

function atualizaInfoRaca(){
    if(selecionaRaca){
        loadImage(selecionaRaca.id);
    }
}

function loadImage(racaId){
    $ajax({
        url: 'https://dog.ceo/api/breeds/list/all' ,
        data: {
            raca_ids: racaId,
            limit: 1
        }, 
        method: 'GET',
        success: function(resposta){
            let images = $('images');
            images.empty();

            if(resposta.length > 0){
                let images = $('<img>', {
                class: 'dog-image',
                src: resposta[0].url
                });
                images.append(images);
            }
        },
        error: function(err){
            console.log(err);
        }
    });
}

$(document).ready(function(){
    racasLoad(function(racas){
        preencheSelecaoDeRaca(racas);
    });
});