import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import f from '../../assets/img/logo.svg'
export class ComponentToPrint extends React.PureComponent {
    constructor() {
        super()
    }
    render() {
        const a = this.props.mouse
        return (

            <div className="factura">
                <div className="fact">
                    <div className="dados">

                    </div>
                    <table className="print">
                        <thead>
                            <tr>
                                <th>Método Pagamento {a}</th>
                                <th>Forma Pagamento</th>
                                <th>Forma Pagamento</th>
                                <th>Data Pagamento</th>
                                <th>Valor Unitário</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>oo</td>
                                <td>data 2</td>
                                <td>data 3</td>
                                <td>data 3</td>
                                <td>data 3</td>
                            </tr>
                            <tr>
                                <td>oo</td>
                                <td>data 2</td>
                                <td>data 3</td>
                                <td>data 3</td>
                                <td>data 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
const Example = ({ nome }) => {
    const componentRef = useRef();
    const mouse = nome;
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <ComponentToPrint ref={componentRef} mouse={mouse} />
        </div>
    );
};

export default Example
