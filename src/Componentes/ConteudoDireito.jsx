import ConteudoDireitoSugestao from "./ConteudoDireitoSugestao";
import imgPerfil from "../img/sam.jpg";
import imgPerfilGuilherme from "../img/alefe.jpg";
import imgPerfilLeticia from "../img/leri.jpg";
import imgPerfilPedro from "../img/pedroca.jpg";
import imgPerfilProa from "../img/proa.jpg";
import imgPerfilPichau from "../img/pichau.jpg";
import img09 from "../img/09.jpg";
import imgluva from "../img/luva.jpg";
import imgloud from "../img/loud.jpg";
import imgraya from "../img/raya.jpg";
import imgfiap from "../img/fiap.jpg";

export default function ConteudoDireito() {
  return (
    <div className="ConteudoDireito">
      <div className="right-container">
        <div className="sub-container">
          <ConteudoDireitoSugestao
            imagem={imgPerfil}
            usuario="Sam_Dev"
            nome="Samuel Conceição"
            button="Mudar"
          />
        </div>

        <div className="d-flex info">
          <div className="sugestion">
            <span>Sugestões para você</span>
          </div>
          <div>
            <span className="more">Ver tudo</span>
          </div>
        </div>

        <div className="mt-3 for-you">
          <ConteudoDireitoSugestao
            imagem={img09}
            usuario="bocade09"
            nome="Boca de 09"
            button="Seguir"
          />
          <ConteudoDireitoSugestao
            imagem={imgluva}
            usuario="luvadepedreiro"
            nome="Iran Ferreira"
            button="Seguir"
          />
          <ConteudoDireitoSugestao
            imagem={imgloud}
            usuario="loudgg"
            nome="LOUD"
            button="Seguir"
          />
          <ConteudoDireitoSugestao
            imagem={imgraya}
            usuario="guilherme.raya"
            nome="Guilherme Raya | O Milionário"
            button="Seguir"
          />
          <ConteudoDireitoSugestao
            imagem={imgfiap}
            usuario="fiapoficial"
            nome="FIAP"
            button="Seguir"
          />
        </div>
      </div>
      <div className="list">
        <ul className="list-info">
          <a href="#" className="none">
            <li>Sobre</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Ajuda</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Imprensa</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>API</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Carreiras</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Privacidade</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Termos</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Localizações</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Idioma</li>
          </a>
          <span></span>
          <a href="#" className="none">
            <li>Meta Verified</li>
          </a>
          <span></span>
        </ul>
      </div>
    </div>
  );
}
