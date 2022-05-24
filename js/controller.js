const criaController = (jogo) => {

    let $entrada = $('#entrada');
    let $lacunas = $('.lacunas');

    const game = jogo
    const exibeLacunas = () => {
        game.setPalavraSecreta($entrada.val())
        game.getPalavraSemCarateres().forEach((letra)=> {
            $('<li>').addClass('lacuna').text(letra).appendTo($lacunas)
        })
    };

    const reinicia = () => {
        $lacunas.empty('')
        game.setEtapa(2)
        game.reinicia()
        mudaPlaceHolder('Palavra secreta')
    }

    const leChute = () => {
        $lacunas.text('')
        game.processaChute($entrada.val())
        game.getPalavraSemCarateres().forEach((letra)=> {
            $('<li>').addClass('lacuna').text(letra).appendTo($lacunas)
        })
        $entrada.val('')
        alert(game.getErrou())
        setTimeout(() => {
            if(game.perdeu() || game.ganhou()) {
                if(game.perdeu()) {
                    alert('Game Over!')
                    location.reload()
                } else {
                    alert('Você ganhou!')
                    reinicia()
                    location.reload()
                }
            }

        }, 200)
    }

    const mudaPlaceHolder = (texto) => $entrada.attr('placeholder', texto)


    const guardaPalavraSecreta = function () {
        const palavraSecreta = game.getPalavraSemCarateres()
    };

    const inicia = () => {

        $entrada.keypress((event) => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        exibeLacunas()
                        game.setEtapa(2)
                        $entrada.val('')
                        mudaPlaceHolder('chute')
                        break;
                    case 2:
                        leChute()
                        break;
                }
            }
        });
    }
    return { inicia };
};
