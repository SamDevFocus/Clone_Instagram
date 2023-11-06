import imgPerfil from "../img/gab.jpeg";

export default function ConteudoCentralStories(props) {
    return (

            <div className="ItemStories">
                <div className="Borda">
                    <div className="card-header border-0 bg-transparent" style={{ 'padding': '8px 0 8px 0', 'position': 'relative' }}>
                        <div style={{ 'position': 'absolute', 'width': '100%', 'height': '100%', 'top': '0', 'left': '0', 'borderRadius': '50%', 'border': '2.5px solid transparent' }}>
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <g transform="rotate(5, 50, 50)">
                                    <circle cx={props.position} cy="35.5" r="31" stroke="url(#gradiente)" strokeWidth="2" fill="transparent" />
                                </g>
                                <defs>
                                    <linearGradient id="gradiente" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="20%" stopColor="#FFC500" />
                                        <stop offset="80%" stopColor="#D300C5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="imgPerfil"><img src={props.imagem} style={{ 'width': '56px', 'borderRadius': '28px' }} /></span>
                    </div>
                </div>
                <div className="user">{props.nome}</div>
            </div>
    )
}