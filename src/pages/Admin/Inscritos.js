import React, { useEffect, useState, useMemo, useCallback } from 'react'
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderAdmin from '../../components/Admin/Dashboard/HeaderAdmin'
import '../../assets/sass/onBack/Dashboard.scss'
import { alunoInscrever, alunosGet } from '../../api'
import '../../assets/sass/onBack/Formulario.scss'
import Input from '../../components/Admin/Formulario/Input'
import Modal from '../../components/Admin/Dashboard/Modal';
import Alerta from '../../components/Admin/Formulario/Alerta';
import { usePlayContext } from '../../contexts/PlayContext';
import { useUserContext } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';


var pag = {
    unico: 0,
    semP: 0,
    fPres: 0,
    sPres: 0
}
function Inscritos() {
    const params = useParams();

    const round = (num, places) => {
        if (!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + places) + "e-" + places);
        }
        else {
            let arr = ("" + num).split("e");
            let sig = "";
            if (+arr[1] + places > 0) {
                sig = "+";
            }
            return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
        }

    }
    const { cursos } = useUserContext();
    const [curso, setCurso] = useState([]);
    const [dadosCurso, setDadosCurso] = useState([]);
    const [data, setData] = useState([]);
    const [matricula, setMatricula] = useState({});
    const [pageNumber, setPageNumber] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalPagamento, setModalPagamento] = useState(false);
    const [modalPesq, setModalPesq] = useState(false);
    const [semPag, setSemPag] = useState(0);
    const [pagUnico, setPagUnico] = useState(0);
    const [pagSec, setPagSec] = useState(0);
    const [pagFir, setPagFir] = useState(0); const nome = useForm('nome', 'Nome');
    const sobre_nome = useForm('sobre_nome', 'Sobre Nome');
    const telefone_1 = useForm('telefone_1', "Telefone (1)");
    const telefone_2 = useForm();
    const email = useForm('email', 'E-mail');
    const endereco = useForm('endereco', "Endereço");
    const { error, setError } = usePlayContext();
    const usersPerPage = 15;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(data.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    function handleFecharClick({ target, currentTarget }) {
        if (target === currentTarget) {
            setModal(false);
            setModalPesq(false);
            setModalPagamento(false);
        }
    }
    const percentagem = useCallback((perc) => {
        return round((perc * 100) / data.length, 0);
    }, [data.length])
    async function handleSubmit(event) {
        event.preventDefault();
        if (nome.validate() && sobre_nome.validate() && telefone_1.validate() && email.validate() && endereco.validate()) {
            const { url, options } = alunoInscrever(1, {
                nome: nome.value,
                sobre_nome: sobre_nome.value,
                telefone_1: telefone_1.value,
                telefone_2: telefone_2.value,
                email: email.value,
                endereco: endereco.value,
            });
            const response = await fetch(url, options);
            response.json().then(f => {
                setError({
                    cod: f.sucesso,
                    mensagem: f.mensagem
                });
            });
        }
    }

    const pesqMatriculaId = (id) => {
        data.map((v) => {
            v.matricula.map((i) => {
                if (i.id === id) {
                    setMatricula(v)
                }
            })
        });
        setModalPagamento(true);
    }
    const handleGetAlunos = useCallback(() => {
        return cursos.map((item) => {
            if (item.slug === params.slug) {
                setCurso(item);
                item.dados_do_curso.map((id) => {
                    setDadosCurso(id)
                    setData(id.alunos)
                    id.alunos.map((gb) => {
                        return gb.matricula.map((v, k) => {
                            if (v.pagamentos.length === 0) {
                                pag.semP = pag.semP + 1;
                                setSemPag(pag.semP);
                            }
                            else {
                                return v.pagamentos.map((g) => {
                                    if (g.tipo_pagamento.nome === "Único") {
                                        pag.unico = pag.unico + 1;
                                        setPagUnico(pag.unico);
                                    }
                                    else if (g.tipo_pagamento.nome === "2ª Prestação") {
                                        pag.sPres = pag.sPres + 1;
                                        setPagSec(pag.sPres);

                                    }
                                    else if (v.pagamentos.length === 1 && g.tipo_pagamento.nome === "1ª Prestação") {
                                        pag.fPres = pag.fPres + 1;
                                        setPagFir(pag.fPres);

                                    }
                                });
                            }
                        });
                    });
                })
            }
        });
    }, [cursos, params.slug])
    useEffect(() => {
        handleGetAlunos();
    }, [cursos, handleGetAlunos, params.slug])
    return (
        <>
            {
                modal === true &&
                <Modal height="700px" width="35%" modal={handleFecharClick}>
                    <div className="cabecario">
                        <FontAwesomeIcon className="icon" icon="users" />
                        <p>Inscrever Alunos</p>
                    </div>
                    <div className="corpo">

                        {error && <Alerta mensagem={error} />}
                        <div className="container-data log-l">
                            <form action="" onSubmit={handleSubmit}  >
                                <div className="flex-l">
                                    <div className="flex-d">
                                        <Input type="text" classN={error && error.type === 'nome' ? 'error-red' : ''} name="nome" placeholder="" label="Nome *" {...nome} ></Input>
                                    </div>
                                    <div className="flex-d">
                                        <Input type="text" classN={error && error.type === 'sobrenome' ? 'error-red' : ''} name="sobre_nome" placeholder="" label="Sobre Nome *" {...sobre_nome}   ></Input>
                                    </div></div>
                                <div className="flex-l">
                                    <div className="flex-d">
                                        <Input type="text" classN={error && error.type === 'telefone1' ? 'error-red' : ''} name="telefone_1" placeholder="" label="Telefone (1) *" {...telefone_1} ></Input>
                                    </div>
                                    <div className="flex-d">
                                        <Input type="text" name="telefone_2" placeholder="" label="Telefone (2) " {...telefone_2}></Input>
                                    </div></div>

                                <Input type="text" classN={error && error.type === 'email' ? 'error-red' : ''} name="email" placeholder="" label="E-mail *" {...email} ></Input>
                                <Input type="text" classN={error && error.type === 'endereco' ? 'error-red' : ''} name="endereco" placeholder="" label="Morada *" {...endereco} ></Input>
                                <div className="submit">
                                    <Input type="submit" value="Inscrever" name="inscrever" placeholder="" label="" ></Input>
                                    <span>* campos obrigatórios.</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            }
            {
                modalPagamento === true &&
                <Modal height="700px" width="35%" modal={handleFecharClick}>
                    <div className="cabecario">
                        <FontAwesomeIcon className="icon" icon="cash-register" />
                        <p>Informação sobre Pagamento do curso</p>
                    </div>
                    <div className="corpo">

                        <div className="Container flx">
                            <div className="nome">
                                <h1>
                                    <span>Dados do Aluno</span>
                                    <div className="dnt">
                                        <div className="dentro-f">
                                            <p>{matricula.nome + ' ' + matricula.sobre_nome}</p>
                                        </div>
                                        <div className="info-pag">
                                            <h2>{matricula.telefone_1}</h2>
                                            <h2>{matricula.email}</h2>
                                        </div>
                                    </div>

                                </h1>

                            </div>

                        </div>
                        <div className="container-data log-l">
                            <form>
                                <div className="Container flx">
                                    {
                                        matricula.matricula.map((m) => (
                                            m.pagamentos.map((h, k) => (
                                                m.pagamentos.length === 1 && h.tipo_pagamento.nome === "1ª Prestação" ?
                                                    <div className="nome" key={k}>
                                                        <h1>
                                                            <span>Dados da 1ª Prestação <span><FontAwesomeIcon className="icon" icon="check-circle" /></span></span>
                                                            <div className="dnt">
                                                                <div className="dentro-f">
                                                                    <p>{Number(h.montante).toLocaleString('pt')} AKZ</p>
                                                                    <h2>{moment(h.created_at).format('DD-MM-YYYY')} / {moment(h.created_at).format('HH:mm:ss')} </h2>
                                                                </div>
                                                                <div className="info-pag">
                                                                    <h2>Transferência</h2>
                                                                    <h2>Banco BAI</h2>
                                                                    <h2>28-12-2021 / 18:09:1</h2>
                                                                </div>
                                                            </div>

                                                        </h1>
                                                    </div>
                                                    : h.tipo_pagamento.nome === "1ª Prestação" ?
                                                        <div className="nome" key={k}>
                                                            <h1>
                                                                <span>Dados da 1ª Prestação <span className="print" title="Imprimir Factura"><FontAwesomeIcon className="icon" icon="print" /></span> <span><FontAwesomeIcon className="icon" icon="check-circle" /></span></span>
                                                                <div className="dnt">
                                                                    <div className="dentro-f">
                                                                        <p>{Number(h.montante).toLocaleString('pt')} AKZ</p>
                                                                        <h2>{moment(h.created_at).format('DD-MM-YYYY')} / {moment(h.created_at).format('HH:mm:ss')} </h2>
                                                                    </div>
                                                                    <div className="info-pag">
                                                                        <h2>{h.forma_pagamento.nome}</h2>
                                                                        <h2>{h.banco_pagamento.nome}</h2>
                                                                        <h2>{h.observacao}</h2>
                                                                    </div>
                                                                </div>

                                                            </h1>
                                                        </div> :
                                                        h.tipo_pagamento.nome === "2ª Prestação" ?
                                                            <div className="pagamen" key={k}>
                                                                <div className="nome" >
                                                                    <h1>
                                                                        <span>Dados da 2ª Prestação <span className="print" title="Imprimir Factura"><FontAwesomeIcon className="icon" icon="print" /></span> <span><FontAwesomeIcon className="icon" icon="check-circle" /></span></span>
                                                                        <div className="dnt">
                                                                            <div className="dentro-f">
                                                                                <p>{Number(h.montante).toLocaleString('pt')} AKZ</p>
                                                                                <h2>{moment(h.created_at).format('DD-MM-YYYY')} / {moment(h.created_at).format('HH:mm:ss')} </h2>
                                                                            </div>
                                                                            <div className="info-pag">
                                                                                <h2>{h.forma_pagamento.nome}</h2>
                                                                                <h2>{h.banco_pagamento.nome}</h2>
                                                                                <h2>{h.observacao}</h2>
                                                                            </div>
                                                                        </div>

                                                                    </h1>


                                                                </div>
                                                                <div className="submit">
                                                                    <Input type="submit" value="Imprimir Factura Única" name="inscrever" placeholder="" label="" ></Input>

                                                                </div>

                                                            </div> :
                                                            h.tipo_pagamento.nome === "Único" &&
                                                            <div className="pagamen" key={k}>
                                                                <div className="nome" >
                                                                    <h1>
                                                                        <span>Pagamento Único  <span><FontAwesomeIcon className="icon" icon="check-circle" /></span></span>
                                                                        <div className="dnt">
                                                                            <div className="dentro-f">
                                                                                <p>{Number(h.montante).toLocaleString('pt')} AKZ</p>
                                                                                <h2>{moment(h.created_at).format('DD-MM-YYYY')} / {moment(h.created_at).format('HH:mm:ss')} </h2>
                                                                            </div>
                                                                            <div className="info-pag">
                                                                                <h2>{h.forma_pagamento.nome}</h2>
                                                                                <h2>{h.banco_pagamento.nome}</h2>
                                                                                <h2>{h.observacao}</h2>
                                                                            </div>
                                                                        </div>

                                                                    </h1>


                                                                </div>
                                                                <div className="submit">
                                                                    <Link className="link-factura" to="/print">Imprimir Factura</Link>
                                                                    {/* <Input type="submit" value="Imprimir Factura" name="inscrever" placeholder="" label="" ></Input>
 */}
                                                                </div>

                                                            </div>

                                            ))
                                        ))
                                    }
                                </div>
                                {/*  <div className="flex-l">
                                    <div className="flex-d">
                                        <Input type="text" classN={error && error.type === 'nome' ? 'error-red' : ''} name="nome" placeholder="" label="Nome *" {...nome} ></Input>
                                    </div>
                                    <div className="flex-d">
                                        <Input type="text" classN={error && error.type === 'sobrenome' ? 'error-red' : ''} name="sobre_nome" placeholder="" label="Sobre Nome *" {...sobre_nome}   ></Input>
                                    </div></div> */}

                            </form>
                        </div>
                    </div>
                </Modal>
            }
            {
                modalPesq === true &&
                <Modal height="450px" width="30%" modal={handleFecharClick}>
                </Modal>
            }
            <HeaderAdmin></HeaderAdmin>
            <div className="content">
                <div className="conteudo">
                    <div className="meuscursos">
                        <h1 className="h1"><FontAwesomeIcon className="icon" icon="layer-group" /> Alunos Para o Curso de {curso.curso} <span className="edicao">{dadosCurso.edicao}ª Edição</span></h1>
                        <div className="counter">
                            <div className="numeros">
                                <div className="info-home">
                                    <h1>{data.length} <span className="perc">( {percentagem(data.length)}% )</span></h1>
                                    <span><FontAwesomeIcon className="icon" icon="users" /></span>
                                </div>
                                <div className="a">
                                    <div className="info-footer">
                                        <h2>Alunos Inscritos</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="numeros">
                                <div className="info-home">
                                    <h1>{semPag}<span className="perc">( {percentagem(semPag)}% )</span></h1>
                                    <span><FontAwesomeIcon className="icon" icon="user-minus" /></span>
                                </div>
                                <div className="a">
                                    <div className="info-footer">
                                        <h2>Alunos sem Pagamentos</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="numeros">
                                <div className="info-home">
                                    <h1>{pagFir}<span className="perc">( {percentagem(pagFir)}% )</span></h1>
                                    <span><FontAwesomeIcon className="icon" icon="user-clock" /></span>
                                </div>
                                <div className="a">
                                    <div className="info-footer">
                                        <h2>Alunos com 1ª Prestação</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="numeros">
                                <div className="info-home">
                                    <h1>{pagSec}<span className="perc">( {percentagem(pagSec)}% )</span></h1>
                                    <span><FontAwesomeIcon className="icon" icon="user-shield" /></span>
                                </div>
                                <div className="a">
                                    <div className="info-footer">
                                        <h2>Alunos com 2ª Prestação</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="numeros">
                                <div className="info-home">
                                    <h1>{pagUnico}<span className="perc">( {percentagem(pagUnico)}% )</span></h1>
                                    <span><FontAwesomeIcon className="icon" icon="user-check" /></span>
                                </div>
                                <div className="a">
                                    <div className="info-footer">
                                        <h2>Alunos com Pagamento Único</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="lista">
                            <div className="pagination">
                                <div className="inscrito">
                                    <p onClick={() => setModal(true)}><span><FontAwesomeIcon className="icon" icon="plus-circle" /></span> Inscrever Aluno</p>
                                </div>
                                <div className="inscrito">
                                    <p onClick={() => setModalPagamento(true)}><span><FontAwesomeIcon className="icon" icon="cash-register" /></span> Adicionar Pagamento</p>
                                </div>
                                <div className="numeropaginas">
                                    <form>
                                        <Input type="text" name="pesquisa" placeholder="Insira o termo de pesquisa"></Input>
                                        <span title="Filtrar a pesquisa" onClick={() => setModalPesq(true)}><FontAwesomeIcon className="icon" icon="filter" /></span>
                                    </form>
                                </div>
                            </div>
                            <div className="lista-table">
                                <div className="conteudo-corpo-tabela">
                                    <table id="tab_dados">
                                        <thead>
                                            <tr>
                                                <th>Nº</th>
                                                <th>Data</th>
                                                <th>Hora</th>
                                                <th>Pagamento</th>
                                                <th>Nome Completo</th>
                                                <th>Telefone (1)</th>
                                                <th>Telefone (2)</th>
                                                <th>E-mail</th>
                                                <th>Morada</th>

                                                <th>Opera&ccedil;&otilde;es</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                useMemo(() => data
                                                    .slice(pagesVisited, pagesVisited + usersPerPage)
                                                    .map((value, k) => (
                                                        <tr key={k}>
                                                            <td>{value.id}</td>
                                                            <td>{moment(value.created_at).format('DD-MM-YYYY')}</td>
                                                            <td>{moment(value.created_at).format('HH:mm:ss')}</td>
                                                            <td>
                                                                {
                                                                    value.matricula.map((item1, k) => (
                                                                        item1.pagamentos.length === 0 ?
                                                                            <span className="nao" key={k}>
                                                                                Não
                                                                            <div className="dados-p">
                                                                                    <div className="dados-p-corpo">
                                                                                        <div className="flex-dados">
                                                                                            <div>

                                                                                                <p>
                                                                                                    Nenhum Pagamento Efectuado
                                                                                            </p>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </span> :
                                                                            item1.pagamentos.map((item, k) => (
                                                                                item.tipo_pagamento.nome === '1ª Prestação' ?
                                                                                    <span className="fp" key={k}>
                                                                                        1ª P
                                                                                        <div className="dados-p">
                                                                                            <div className="dados-p-corpo">
                                                                                                <div className="flex-dados">
                                                                                                    <div>

                                                                                                        <p>
                                                                                                            <span>T. de Pagamento</span>
                                                                                                            {item.tipo_pagamento.nome}
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <div><p> <span>Valor Pago</span> {item.montante} AKZ</p></div>
                                                                                                    <div><p><span>Data</span>{moment(item.created_at).format('DD-MM-YYYY')}</p></div>
                                                                                                    <div><p><span>Hora</span>{moment(item.created_at).format('HH:mm:ss')}</p></div>

                                                                                                </div>
                                                                                                <div className="flex-dados">
                                                                                                    <div><p><span>F. de Pagamento</span>{item.forma_pagamento.nome}</p></div>
                                                                                                    <div><p><span>Nº de Referência</span>{item.n_referencia}</p></div>
                                                                                                    <div><p><span>Banco</span>{item.banco_pagamento.nome}</p></div>
                                                                                                    <div>
                                                                                                        <p><span>Observação</span>{item.observacao}</p>
                                                                                                    </div>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </span> :
                                                                                    item.tipo_pagamento.nome === '2ª Prestação' ?
                                                                                        <span className="sp" key={k}>
                                                                                            2ª P
                                                                                            <div className="dados-p">
                                                                                                <div className="dados-p-corpo">
                                                                                                    <div className="flex-dados">
                                                                                                        <div>

                                                                                                            <p>
                                                                                                                <span>T. de Pagamento</span>
                                                                                                                {item.tipo_pagamento.nome}
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <div><p> <span>Valor Pago</span> {item.montante} AKZ</p></div>
                                                                                                        <div><p><span>Data</span>{moment(item.created_at).format('DD-MM-YYYY')}</p></div>
                                                                                                        <div><p><span>Hora</span>{moment(item.created_at).format('HH:mm:ss')}</p></div>

                                                                                                    </div>
                                                                                                    <div className="flex-dados">
                                                                                                        <div><p><span>F. de Pagamento</span>{item.forma_pagamento.nome}</p></div>
                                                                                                        <div><p><span>Nº de Referência</span>{item.n_referencia}</p></div>
                                                                                                        <div><p><span>Banco</span>{item.banco_pagamento.nome}</p></div>
                                                                                                        <div>
                                                                                                            <p><span>Observação</span>{item.observacao}</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </span> :
                                                                                        item.tipo_pagamento.nome === 'Único' &&
                                                                                        <span className="pun" key={k}>
                                                                                            P. Único
                                                                                            <div className="dados-p">
                                                                                                <div className="dados-p-corpo">
                                                                                                    <div className="flex-dados">
                                                                                                        <div>

                                                                                                            <p>
                                                                                                                <span>T. de Pagamento</span>
                                                                                                                {item.tipo_pagamento.nome}
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <div><p> <span>Valor Pago</span> {item.montante} AKZ</p></div>
                                                                                                        <div><p><span>Data</span>{moment(item.created_at).format('DD-MM-YYYY')}</p></div>
                                                                                                        <div><p><span>Hora</span>{moment(item.created_at).format('HH:mm:ss')}</p></div>

                                                                                                    </div>
                                                                                                    <div className="flex-dados">
                                                                                                        <div><p><span>F. de Pagamento</span>{item.forma_pagamento.nome}</p></div>
                                                                                                        <div><p><span>Nº de Referência</span>{item.n_referencia}</p></div>
                                                                                                        <div><p><span>Banco</span>{item.banco_pagamento.nome}</p></div>
                                                                                                        <div>
                                                                                                            <p><span>Observação</span>{item.observacao}</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </span>

                                                                            ))
                                                                    ))
                                                                }
                                                            </td>
                                                            <td>{value.nome + " " + value.sobre_nome}</td>
                                                            <td>{value.telefone_1}</td>
                                                            <td>{value.telefone_2}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.endereco}</td>

                                                            <td>
                                                                {
                                                                    value.matricula.map((item1, k) => (
                                                                        item1.pagamentos.length === 0 ?
                                                                            <div key={k}>
                                                                                <span className="util-editar util-ver" onClick={(id) => pesqMatriculaId(item1.id)} id={item1.id} title="Realizar Pagamento" ><FontAwesomeIcon className="icon" icon="cash-register" /></span>
                                                                            &nbsp; <span className="util-editar" id={value.id} title="Editar Inscrito" ><FontAwesomeIcon className="icon" icon="pencil-alt" /></span>
                                                                            &nbsp;<span className="util-eliminar" id={item1.id} title="Eliminar Inscrito"><FontAwesomeIcon className="icon" icon="trash-alt" /></span>
                                                                            </div> :

                                                                            item1.pagamentos.map((item, k) => (
                                                                                item1.pagamentos.length === 1 && item.tipo_pagamento.nome === '1ª Prestação' ?
                                                                                    <div key={k} >
                                                                                        <span className="util-editar util-ver" onClick={(id) => pesqMatriculaId(item1.id)} id={item1.id} title="Realizar Pagamento" ><FontAwesomeIcon className="icon" icon="cash-register" /></span>
                                                                                        &nbsp; <span className="util-editar" id={value.id} title="Editar Inscrito" ><FontAwesomeIcon className="icon" icon="pencil-alt" /></span>
                                                                                        &nbsp;<span className="util-eliminar" id={item1.id} title="Eliminar Inscrito"><FontAwesomeIcon className="icon" icon="trash-alt" /></span>
                                                                                    </div> :
                                                                                    item.tipo_pagamento.nome === '2ª Prestação' ?
                                                                                        <div key={k}>
                                                                                            <span className="util-editar util-rec" onClick={(id) => pesqMatriculaId(item1.id)} id={item1.id} title="Realizar Pagamento" ><FontAwesomeIcon className="icon" icon="receipt" /></span>
                                                                                        &nbsp;
                                                                                            <span className="util-editar" id={value.id} title="Editar Inscrito" ><FontAwesomeIcon className="icon" icon="pencil-alt" /></span>
                                                                                    &nbsp;<span className="util-eliminar" id={item1.id} title="Eliminar Inscrito"><FontAwesomeIcon className="icon" icon="trash-alt" /></span>
                                                                                        </div> :
                                                                                        item.tipo_pagamento.nome === 'Único' &&
                                                                                        <div key={k}>
                                                                                            <span className="util-editar util-rec" onClick={(id) => pesqMatriculaId(item1.id)} id={item1.id} title="Realizar Pagamento" ><FontAwesomeIcon className="icon" icon="receipt" /></span>
                                                                                        &nbsp;
                                                                                            <span className="util-editar" id={value.id} title="Editar Inscrito" ><FontAwesomeIcon className="icon" icon="pencil-alt" /></span>
                                                                                    &nbsp;<span className="util-eliminar" id={item1.id} title="Eliminar Inscrito"><FontAwesomeIcon className="icon" icon="trash-alt" /></span>
                                                                                        </div>

                                                                            ))
                                                                    ))
                                                                }</td>

                                                        </tr>
                                                    )), [data, pagesVisited])
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className="pagination">
                                <div className="paginas">
                                    <p>Página <span>{pageNumber + 1}</span> de <span>{pageCount}</span></p>
                                </div>
                                <div className="numeropaginas">
                                    <ReactPaginate
                                        previousLabel={"<"}
                                        nextLabel={">"}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={"paginationBttns"}
                                        previousLinkClassName={"previousBttn"}
                                        nextLinkClassName={"nextBttn"}
                                        disabledClassName={"paginationDisabled"}
                                        activeClassName={"paginationActive"}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Inscritos
