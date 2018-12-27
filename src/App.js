import React, { Component } from 'react'
import moment from 'moment'

import TimeLine from './components/timeline'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.props.api.loadEvents()
      .then(res => {
        const { events } = res.data

        const compras = events.filter(comprou => {
          if (comprou.event === 'comprou') {
            comprou.produtos = events.filter(comprouProduto => comprouProduto.event === 'comprou-produto')
              .filter(e => {
                const agrupamentoProd = e.custom_data
                  .filter(d => d.key === 'transaction_id' && d.value === (comprou.custom_data
                    .filter(x => x.key === 'transaction_id'))[0].value)
                if (agrupamentoProd.length > 0) {
                  e.productName = (e.custom_data.filter(p => p.key === 'product_name'))[0].value
                  e.productPrice = (e.custom_data.filter(p => p.key === 'product_price'))[0].value
  
                  return e
                }
                return false
            })
            comprou.storeName = (comprou.custom_data.filter(p => p.key === 'store_name'))[0].value
            comprou.data = moment(comprou.timestamp).format('DD/MM/YYYY H:m')
            
            return comprou;
          }
          return false
        }).sort(this.ordenacao)

        this.setState({ data: compras })
      })
  }

  ordenacao = (a, b) => {
    if (a.timestamp > b.timestamp) {
      return 1
    }
    if (a.timestamp < b.timestamp) {
      return -1
    }
    
    return 0
  }

  render() {
    return (
      <div className="App">
        <TimeLine compras={this.state.data} />
      </div>
    )
  }
}

export default App
