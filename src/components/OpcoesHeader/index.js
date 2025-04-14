
import styled from 'styled-components'


const textoOpcao = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcaoHeaderComponets = styled.ul`
    display: flex;
`
const OpcoesHeaderComponents = styled.li`
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        cursor: pointer;
        min-width: 120px;
`

const OpcoesHeader = () =>{
    return(        
        <OpcaoHeaderComponets>
            {textoOpcao.map((texto) => (<OpcoesHeaderComponents className='opcao'><p>{texto}</p></OpcoesHeaderComponents>) )}
      </OpcaoHeaderComponets>
      

      
    )
}
    
export default OpcoesHeader