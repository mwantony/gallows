const criaJogo = sprite => {
    
    let palavraSecreta = []
    let palavraSemCaracteres = []
    
    let nEtapa = 1

    let errou = false

    const getErrou = () => {
        if(errou) {
            return 'Oops... Tente de novo!'
        }
        return 'Acertou'
    }
    
    const setEtapa = valor => nEtapa = valor

    const getPalavraSemCarateres = () => palavraSemCaracteres


    const ganhou = () => {
        return palavraSemCaracteres.length ? !palavraSemCaracteres.some((palavraSemCaracteres) => {
            return palavraSemCaracteres == ' '
        })
        : false
    }

    const perdeu = () => sprite.isFinished()


    const ganhouOuPerdeu = () => {
        if(ganhou || perdeu) {
            return true
        }
        return false
    }

    const reinicia = () => {
        sprite.reset()
        palavraSecreta = []
        palavraSemCaracteres = []
    }


    const setPalavraSecreta = palavra => {
        if(!palavra.trim()) throw new Error('Palavra secreta inválida')
        palavraSecreta = palavra.split('')
        
        palavraSemCaracteres = []
        palavraSecreta.forEach(letra => {
            palavraSemCaracteres.push(' ')
        })

        nEtapa = 2

        return palavra.split('')
    }

    const processaChute = chute => {
        if(!chute.trim()) throw new Error('Chute inválido')
        if(palavraSecreta.includes(chute)) {
            palavraSecreta.forEach((letra, id) => {
                if(chute == letra) {
                    palavraSemCaracteres[id] = chute
                }
            })
            errou = false
            return palavraSemCaracteres
        } 
        errou = true
        criaJogo(sprite.nextFrame())
    }
 
    const getLacunas = () => {
        palavraSemCaracteres = []
        palavraSecreta.forEach(letra => {
            palavraSemCaracteres.push(' ')
        })
        return palavraSemCaracteres
    }

    const getEtapa = () => nEtapa
    

    return {

        setPalavraSecreta,
        getLacunas,
        getEtapa,
        setEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia,
        getPalavraSemCarateres,
        getErrou
    }
    
}


