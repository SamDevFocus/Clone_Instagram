import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda"
import { AiFillHome } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineExplore, MdWidthNormal } from "react-icons/md";
import { BiBorderAll, BiMoviePlay } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import logo from "../img/logo-ins.png";
import { HiBars3 } from "react-icons/hi2";
import imgPerfil from "../img/sam.jpg";

var icons = {'font-size': "24px"};
var prlogo = {'width': '133px', 'margin': '4px, 0px', 'padding': '12px'}
export default function ConteudoEsquerdo () {

    return (
    <div className="ConteudoEsquerdo fixo">
        <div className="Left-container">
            <div className="wrapLogo"></div>
            <div>
                <div className="menu">
                <a href="#"><img src={logo} style={prlogo} /></a>
                <ul style={{'padding':'0'}}>
                    <ItemMenuLateralEsquerda link="www.google.com.br" icone={<AiFillHome style={icons} />} texto="Página inicial" type="Selected" />
                    <ItemMenuLateralEsquerda link="#" icone={<HiMagnifyingGlass style={icons} />} texto="Pesquisar" />
                    <ItemMenuLateralEsquerda link="#" icone={<MdOutlineExplore style={icons} />} texto="Explorar" />
                    <ItemMenuLateralEsquerda link="#" icone={<BiMoviePlay style={icons} />} texto="Reels" />
                    <ItemMenuLateralEsquerda link="#" icone={<TbSend style={icons} />} texto="Mensagens" />
                    <ItemMenuLateralEsquerda link="#" icone={<FaRegHeart style={icons} />} texto="Notificações" />
                    <ItemMenuLateralEsquerda link="#" icone={<CgAddR style={icons} />} texto="Criar" />
                    <ItemMenuLateralEsquerda link="#" icone={<img src={imgPerfil} style={{'width': "24px", 'borderRadius': '12px'}} />} texto="Perfil" />
                </ul>
                </div>
                <div className="flex-menu">
                    <ItemMenuLateralEsquerda link="#" icone={<HiBars3 style={{'font-size': '32px'}} />} texto="Mais" />
                </div>
            </div>
        </div>
    </div>
)
}
