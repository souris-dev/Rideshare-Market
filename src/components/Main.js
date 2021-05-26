import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Book a ride!</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const destName = this.destName.value
          const srcName = this.srcName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(srcName, destName, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="srcName"
              type="text"
              ref={(input) => { this.srcName = input }}
              className="form-control"
              placeholder="Enter Source Location"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="destName"
              type="text"
              ref={(input) => { this.destName = input }}
              className="form-control"
              placeholder="Enter Destination Location"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Enter No. of People"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Ride the donkey!</button>
        </form>
        <p>&nbsp;</p>
        <h2>Ride History</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Source Location</th>
              <th scope="col">Destination Location</th>
              <th scope="col">No. of members</th>
              <th scope="col">User ID</th>
              {/* <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name2}</td>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')}</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(parseInt(event.target.name), event.target.value)
                          }}
                        >
                          Buy
                        </button>
                      : null
                    }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;