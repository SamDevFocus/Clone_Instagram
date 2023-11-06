export default function ConteudoDireitoSugestao(props) {
    return (
        <div className="topo">
            <div className="imgPerfilDireito">
                <img src={props.imagem} style={{ 'width': '44px', 'borderRadius': '28px' }} />
            </div>
            <div className="nameUsers">
                <span className="id-user">{props.usuario}</span>
                <span className="user">{props.nome}</span>
            </div>
            <span className="change">{props.button}</span>

        </div>
    )
}