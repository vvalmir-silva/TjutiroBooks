
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'


const IconeContainer = styled.li`
    margin-right: 40px;
    width: 25px;
` 

const Icones = styled.ul`
    display: flex;
    align-items: center;  
`

const icones = [perfil, sacola]

const IconesHeader = () => {
    return(
        <Icones>
        {icones.map( (icone) => (<IconeContainer><img src={icone}></img></IconeContainer>))}
      </Icones>
    )
}

export default IconesHeader