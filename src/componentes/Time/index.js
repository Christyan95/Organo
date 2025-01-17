import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        props.colaboradores.length > 0 &&           //esconde os times vazios
        <section className='time' style={css}>
            <h3 style={{ borderBottomColor: props.corPrimaria }}>{ props.nome }</h3>

            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                /> )}
            </div>
        </section>

        // props.colaboradores.length > 0 ?           //esconde os times vazios
        // <section className='time' style={css}>
        //     <h3 style={{ borderBottomColor: props.corPrimaria }}>{ props.nome }</h3>

        //     <div className='colaboradores'>
        //         {props.colaboradores.map( colaborador => <Colaborador 
        //             nome={colaborador.nome} 
        //             cargo={colaborador.cargo}
        //             imagem={colaborador.imagem}
        //         /> )}
        //     </div>
        // </section>
        // : ''
    )
}

export default Time