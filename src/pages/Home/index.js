import React from 'react';
import * as S from './styled';
import background from '../../assets/business_bg.svg';

function App() {
    return (
        <S.BodyHome>
            <S.Container className="grid-1">
                <div>
                    <S.TitleHome>GESTÃO DE CADASTROS</S.TitleHome>
                    <br />
                    <S.TextHome>
                        Seja bem-vindes ao seu App de Gestão de produtos e clientes VTEX!
                    </S.TextHome>
                    <br />
                    <S.TextHome>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est rem
                        error cupiditate aspernatur possimus quae deserunt sit cumque, quibusdam
                        suscipit soluta, laborum harum eaque accusantium quidem expedita minus
                        quisquam? Architecto obcaecati consequatur repellat, minima vitae laboriosam
                        corrupti dignissimos saepe, voluptatem ab debitis assumenda, tenetur nam?
                        Voluptatibus placeat temporibus quisquam fugiat et officia perferendis
                        quaerat minus, provident eos ducimus corrupti.
                    </S.TextHome>
                    <br />
                    <S.TextHome>Escolha o que deseja gerenciar:</S.TextHome>
                </div>
                <S.Links>
                    <S.LinksHome to="/store">Produtos</S.LinksHome>
                    <S.LinksHome to="/customers">Clientes</S.LinksHome>
                </S.Links>
            </S.Container>
            <S.Container className="grid-2">
                <img src={background} alt="Home Business Background" />
            </S.Container>
        </S.BodyHome>
    );
}

export default App;
