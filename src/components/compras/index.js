import React from 'react'

import './style.css'

const Compras = props => {
    const { compras } = props
    return (
        <div>
            <div className="comprou">
                <p id="data">{compras.data}</p>
                <p id="valor">{compras.revenue.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
                <p id="local">{compras.storeName}</p>
            </div>
            <div className="comprou-produto">
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            compras.produtos.map((produto, key) => (
                                <tr key={key}>
                                    <td width="70%">{produto.productName}</td>
                                    <td width="30%">{produto.productPrice.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Compras