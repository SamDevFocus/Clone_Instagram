import CardCentral from "./CardCentral";
import ConteudoCentralStories from "./ConteudoCentralStories";
import post1 from "../img/meme-mala.jpg";
import post2 from "../img/post2.png";
import post3 from "../img/post3.png";
import post4 from "../img/post4.png";
import postbancopan from "../img/postbancopan.png";
import postpichau from "../img/postpichau.png";
import imgPerfil from "../img/gab.jpeg";
import imgPerfilGuilherme from "../img/alefe.jpg";
import imgPerfilLeticia from "../img/leri.jpg";
import imgPerfilPedro from "../img/pedroca.jpg";
import imgPerfilProa from "../img/proa.jpg";
import imgPerfilPichau from "../img/pichau.jpg";
import imgPerfilVinicius from "../img/vinicius.jpg";
import imgPerfilVetor from "../img/zoio.jpg";
import imgBancoPan from "../img/bancopan.jpg";
import imgBancoItau from "../img/itau.jpg";
import imgBancoSantander from "../img/santander.jpg";
import imgBrian from "../img/Brian.jpg";
import imgGabe_Peixe from "../img/Gabe_Peixe.jpg";
import imgJapa from "../img/Japa.jpg";
import imgLibertwalk from "../img/Libertwalk.jpg";
import imgLoud_C from "../img/Loud_C.jpg";
import imgMiami from "../img/Miami.jpg";

import imgmac from "../img/mac.jpg";
import imgr35g from "../img/r35g.jpg";
import imgp1 from "../img/p1.jpg";
import imgf12 from "../img/f12.jpg";
import imgbbug from "../img/bbug.jpg";

export default function ConteudoCentral() {
  return (
    <div className="ConteudoCentral">
      <div className="d-flex flex-column centro">
        <div
          className="Item-stories"
          style={{
            "margin-bottom": "48px",
            width: "33vw",
            display: "flex",
            "margin-right": "5px",
          }}
        >
          <ConteudoCentralStories
            imagem={imgGabe_Peixe}
            position="32.7"
            nome="gabepeixe"
          />
          <ConteudoCentralStories
            imagem={imgBrian}
            position="32"
            nome="brianespi"
          />
          <ConteudoCentralStories
            imagem={imgLoud_C}
            position="32.7"
            nome="loud_victor"
          />
          <ConteudoCentralStories imagem={imgJapa} position="32" nome="japa" />
          <ConteudoCentralStories
            imagem={imgMiami}
            position="32.7"
            nome="miamiheat"
          />
          <ConteudoCentralStories
            imagem={imgLibertwalk}
            position="31.8"
            nome="libertywalk..."
          />
          <ConteudoCentralStories
            imagem={imgBancoSantander}
            position="32.7"
            nome="danilogentili"
          />
          <ConteudoCentralStories
            imagem={imgPerfilLeticia}
            position="32"
            nome="leh.majer"
          />
        </div>

        <div className="container-timeline">
          <div className="Timeline" style={{ width: "468px" }}>
            <CardCentral
              imagem={imgmac}
              imagemperfil={imgLibertwalk}
              nome="libertywalkkato"
              tempo="6 h"
              descricao="LB WORKS Mclaren 720S in USA 🇺🇸"
              comentarios="14"
            />
            <CardCentral
              imagem={imgr35g}
              imagemperfil={imgLibertwalk}
              nome="libertywalkkato"
              tempo="12 d"
              descricao="MINI GT GOLD series"
              comentarios="42"
            />
            <CardCentral
              imagem={imgp1}
              imagemperfil={imgLibertwalk}
              nome="libertywalkkato"
              tempo="12 h"
              descricao="LIBERTY WALK... "
              comentarios="23"
            />
            <CardCentral
              imagem={imgf12}
              imagemperfil={imgBrian}
              nome="brianespi"
              tempo="5 m"
              descricao="QUAIS CARROS E MOTOS VOCÊ TERIA NA SUA GARAGEM DOS SONHOS? ..."
              comentarios="148"
            />
            <CardCentral
              imagem={imgbbug}
              imagemperfil={imgBrian}
              nome="brianespi"
              tempo="5 m"
              descricao="2018 BUGATTI CHIRON À VENDA..."
              comentarios="117"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
