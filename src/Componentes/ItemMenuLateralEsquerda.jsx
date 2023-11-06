export default function ItemMenuLateralEsquerda (props) {
    return (
        <a href={props.link} className="Link-menu">
            <li>
                <span className="iconeSimples">{props.icone}</span>
                <span className={`text ${props.type}`}>{props.texto}</span>
            </li>
        </a>
    )
}