import React, { useState, useEffect } from 'react';
import * as S from './styled';

export default function Customers() {
    let [customer, setCustomer] = useState([]);
    const [nomeInput, setNome] = useState('');
    const [enderecoInput, setEndereco] = useState('');
    const [estadoSelect, setEstado] = useState('');
    const [celularInput, setCelular] = useState('');
    const [cpfInput, setCpf] = useState('');
    const [emailInput, setEmail] = useState('');

    const localStorageClientes = JSON.parse(localStorage.getItem('customers'));
    let dbClientes = localStorage.getItem('customers') !== null ? localStorageClientes : [];

    useEffect(() => {
        if (dbClientes !== []) {
            init();
        }
        // eslint-disable-next-line
    }, []);

    function init() {
        let clienteData = localStorage.getItem('customers');
        if (clienteData !== null) {
            clienteData = JSON.parse(clienteData);
            setCustomer(clienteData);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addToDbClientes(nomeInput, enderecoInput, estadoSelect, celularInput, cpfInput, emailInput);

        localStorage.setItem('customers', JSON.stringify(dbClientes));
        init();
        limparForm();
    };

    const generateID = () => Math.round(Math.random() * 1000);

    const addToDbClientes = (nome, endereco, estado, celular, cpf, email) => {
        dbClientes.push({
            id: generateID(),
            name: nome,
            address: endereco,
            state: estado,
            phone: celular,
            cpf: cpf,
            mail: email,
        });
    };

    function updateLocalStorage() {
        localStorage.setItem('customers', JSON.stringify(customer));
    }

    function removerCliente(ID) {
        customer = customer.filter((produto) => produto.id !== ID);
        updateLocalStorage();
        init();
    }

    function limparForm() {
        document.querySelectorAll('input').forEach((input) => (input.value = ''));
        document.querySelectorAll('select').forEach((select) => (select.value = ''));
    }

    return (
        <S.BodyCustomers>
            <S.TitleCustomers>Cadastro de Clientes</S.TitleCustomers>
            <S.TextCustomers>
                Preencha o formulário abaixo para cadastrar um novo cliente na sua loja
            </S.TextCustomers>
            <S.Container className="container">
                <form id="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <S.Label htmlFor="nome-cliente">Nome Completo</S.Label>
                        <S.Input
                            autoFocus
                            type="text"
                            id="nome-cliente"
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="ex: Fulano da Silva"
                            maxLength="50"
                            required
                        />
                        <S.Label htmlFor="endereco">Endereço</S.Label>
                        <S.Input
                            type="text"
                            id="endereco"
                            onChange={(e) => setEndereco(e.target.value)}
                            placeholder="ex: Rua tal, numero tal - bairro tal"
                            maxLength="70"
                            required
                        />
                        <S.Label htmlFor="estados-brasil">Estado</S.Label>
                        <S.Select
                            name="estados-brasil"
                            id="estados-brasil"
                            onChange={(e) => setEstado(e.target.value)}
                        >
                            <option value="">— Selecione —</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </S.Select>
                        <S.Label htmlFor="celular">Celular</S.Label>
                        <S.Input
                            type="number"
                            id="celular"
                            onChange={(e) => setCelular(e.target.value)}
                            placeholder="ex: 44000000000"
                            style={{ maxWidth: '200px' }}
                            required
                        />
                        <S.Label htmlFor="cpf">CPF</S.Label>
                        <S.Input
                            type="number"
                            id="cpf"
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="ex: 99988866610"
                            style={{ maxWidth: '200px' }}
                            required
                        />
                        <S.Label htmlFor="email">Email</S.Label>
                        <S.Input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ex: fulano.dasilva@email.com"
                            required
                        />
                    </div>

                    <S.BtnAdd type="submit" value="Adicionar" />
                </form>
                <S.Links>
                    <S.LinksCustomers to="/">Voltar</S.LinksCustomers>
                </S.Links>
                <S.TextCustomers>Clientes cadastrados</S.TextCustomers>

                <S.List>
                    {customer.map((item) => {
                        return (
                            <S.ListItem key={item.id}>
                                <S.DeleteBtn onClick={(e) => removerCliente(item.id, e)}>
                                    x
                                </S.DeleteBtn>
                                {item.name} | {item.mail}
                            </S.ListItem>
                        );
                    })}
                </S.List>
            </S.Container>
        </S.BodyCustomers>
    );
}
