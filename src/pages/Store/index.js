import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Store() {
    let [store, setStore] = useState([]);
    const [nomeInput, setNome] = useState('');
    const [marcaInput, setMarca] = useState('');
    const [modeloInput, setModelo] = useState('');
    const [descricaoTxtArea, setDescricao] = useState('');
    const [quantidadeInput, setQuantidade] = useState('');
    const [precoInput, setPreco] = useState('');

    const localStorageProdutos = JSON.parse(localStorage.getItem('store'));
    let dbProdutos = localStorage.getItem('store') !== null ? localStorageProdutos : [];

    useEffect(() => {
        if (dbProdutos !== []) {
            init();
        }
    }, []);

    function init() {
        let produtoName = localStorage.getItem('store');
        if (produtoName !== null) {
            produtoName = JSON.parse(produtoName);
            setStore(produtoName);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addToDbProdutos(
            nomeInput,
            marcaInput,
            modeloInput,
            descricaoTxtArea,
            quantidadeInput,
            precoInput
        );

        localStorage.setItem('store', JSON.stringify(dbProdutos));
        init();
        limparForm();
    };

    const generateID = () => Math.round(Math.random() * 1000);

    const addToDbProdutos = (nome, marca, modelo, descricao, quantidade, preco) => {
        dbProdutos.push({
            id: generateID(),
            name: nome,
            brand: marca,
            model: modelo,
            description: descricao,
            quantity: quantidade,
            price: preco,
        });
    };

    function updateLocalStorage() {
        localStorage.setItem('store', JSON.stringify(store));
    }

    function removerProduto(ID) {
        store = store.filter((produto) => produto.id !== ID);
        updateLocalStorage();
        init();
    }

    function limparForm() {
        document.querySelectorAll('input').forEach((input) => (input.value = ''));
        document.querySelectorAll('textarea').forEach((textarea) => (textarea.value = ''));
    }

    return (
        <S.BodyStore>
            <S.TitleStore>Cadastro de Produtos</S.TitleStore>
            <S.TextStore>
                Preencha o formulário abaixo para cadastrar um novo produto no seu estoque
            </S.TextStore>
            <S.Container className="container">
                <form id="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <S.Label htmlFor="nome-produto">Nome do produto</S.Label>
                        <S.Input
                            autoFocus
                            type="text"
                            id="nome-produto"
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="ex: Teclado Mecânico Gamer HyperX Alloy Origins"
                            maxLength="50"
                            required
                        />
                        <S.Label htmlFor="marca">Marca</S.Label>
                        <S.Input
                            type="text"
                            id="marca"
                            onChange={(e) => setMarca(e.target.value)}
                            placeholder="ex: HyperX"
                            maxLength="20"
                            required
                        />
                        <S.Label htmlFor="modelo">Modelo</S.Label>
                        <S.Input
                            type="text"
                            id="modelo"
                            onChange={(e) => setModelo(e.target.value)}
                            placeholder="ex: HX-KB6RDX-BR"
                            maxLength="20"
                            required
                        />
                        <S.Label htmlFor="descricao">Descrição</S.Label>
                        <S.TextArea
                            type="text"
                            id="descricao"
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="ex: O HyperX Alloy Origins é um teclado..."
                            required
                        ></S.TextArea>
                        <S.GridPrecoQuantidade>
                            <S.Label htmlFor="quantidade">Quantidade</S.Label>
                            <S.Input
                                type="number"
                                id="quantidade"
                                onChange={(e) => setQuantidade(e.target.value)}
                                min="0"
                                required
                            />
                            <S.Label htmlFor="preco">Preço unitário</S.Label>
                            <S.Input
                                type="number"
                                id="preco"
                                onChange={(e) => setPreco(e.target.value)}
                                min="0"
                                step="0.01"
                                required
                            />
                        </S.GridPrecoQuantidade>
                    </div>

                    <S.BtnAdd type="submit" value="Adicionar" />
                </form>
                <S.Links>
                    <S.LinksStore to="/">Voltar</S.LinksStore>
                </S.Links>
                <S.TextStore>Produtos cadastrados</S.TextStore>

                <S.List>
                    {store.map((item) => {
                        return (
                            <S.ListItem key={item.id}>
                                <S.DeleteBtn onClick={(e) => removerProduto(item.id, e)}>
                                    x
                                </S.DeleteBtn>
                                {item.name} | Estoque: {item.quantity}
                            </S.ListItem>
                        );
                    })}
                </S.List>
            </S.Container>
        </S.BodyStore>
    );
}
