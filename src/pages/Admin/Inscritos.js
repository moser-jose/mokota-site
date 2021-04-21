import React, { useEffect, useState, useMemo, useCallback } from 'react'
import moment from 'moment'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderAdmin from '../../components/Admin/Dashboard/HeaderAdmin'
import '../../assets/sass/onBack/Dashboard.scss'
import { alunosGet } from '../../api'
import '../../assets/sass/onBack/Formulario.scss'
import Input from '../../components/Admin/Formulario/Input'
import Modal from '../../components/Admin/Dashboard/Modal';

function Inscritos() {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [modal, setModal] = useState(false);
    const usersPerPage = 15;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(data.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    async function handleGetAlunos() {
        const { url, options } = alunosGet();
        const response = await fetch(url, options);
        return response.json().then(f => {
            setData(f.alunos)
        });
    }

    function handleFecharClick({ target, currentTarget }) {
        if (target === currentTarget) {
            setModal(false);
        }
    }

    useEffect(() => {
        handleGetAlunos();
    }, [])
    return (
        <>
            {
                modal === true &&
                <Modal modal={handleFecharClick}>
                </Modal>
            }

            <HeaderAdmin></HeaderAdmin>
            <div className="content">
                <div className="conteudo">
                    <div className="meuscursos">
                        <h1 className="h1"><FontAwesomeIcon className="icon" icon="layer-group" /> Alunos Para o Curso de React Native Completo</h1>
                        <div className="counter">
                            <div className="numeros">
                                <div class="info-home">
                                    <h1>{data.length}</h1>
                                    <span><FontAwesomeIcon className="icon" icon="users" /></span>
                                </div>
                                <div className="a">
                                    <div class="info-footer">
                                        <h2>Alunos Pré - Inscritos</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="numeros">
                                <div class="info-home">
                                    <h1>{data.length}</h1>
                                    <span><FontAwesomeIcon className="icon" icon="users" /></span>
                                </div>
                                <div className="a">
                                    <div class="info-footer">
                                        <h2>Alunos Matriculados</h2>
                                        <span><FontAwesomeIcon className="icon" icon="info-circle" /></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="lista">
                            <div className="pagination">
                                <div className="inscrito">
                                    <p onClick={() => setModal(true)}><span><FontAwesomeIcon className="icon" icon="plus-circle" /></span> Adicionar Inscrito</p>
                                </div>
                                <div className="numeropaginas">
                                    <form>
                                        <Input type="text" name="pesquisa" placeholder="Insira o termo de pesquisa"></Input>
                                        <span title="Filtrar a pesquisa"><FontAwesomeIcon className="icon" icon="filter" /></span>
                                    </form>
                                </div>
                            </div>
                            <div class="lista-table">
                                <div class="conteudo-corpo-tabela">
                                    <table id="tab_dados">
                                        <thead>
                                            <tr>
                                                <th>Nº</th>
                                                <th>Data</th>
                                                <th>Hora</th>
                                                <th>M</th>
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
                                                            <td>{moment(value.createdAt).format('DD-MM-YYYY')}</td>
                                                            <td>{moment(value.createdAt).format('HH:mm:ss')}</td>
                                                            <td><span className="unsubscribed">SIM</span></td>
                                                            <td>{value.nome + " " + value.sobre_nome}</td>
                                                            <td>{value.telefone_1}</td>
                                                            <td>{value.telefone_2}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.endereco}</td>

                                                            <td><a class="util-editar" id={value.id} title="Editar Inscrito" href="/"><FontAwesomeIcon className="icon" icon="edit" /></a>
                                                    &nbsp;<a class="util-eliminar" id={value.id} href="/" title="Eliminar Inscrito"><FontAwesomeIcon className="icon" icon="trash-alt" /></a></td>

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
