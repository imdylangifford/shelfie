import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imageurl: " "
        }
        this.handleUrl = this.handleUrl.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.clearValues = this.clearValues.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    handleUrl(e){
        this.setState({imageurl: e.target.value})
    }

    handleName(e){
        this.setState({name: e.target.value})
    }

    handlePrice(e){
        this.setState({price: e.target.value})
    }

    clearValues(){
        this.setState({
            imageurl: "",
            name: "",
            price: 0
        })
    }
    addProduct(props){
        axios.post('/api/product', {
            "productname": this.state.name,
            "productprice": this.state.price,
            "imageurl": this.state.imageurl
        })
        console.log(this.props)
    }


    render(){
        return(
            <div className="form">
                <div>
                    <img className="img" src="http://www.orgrow.org/wp-content/plugins/arscode-ninja-popups/admin/img/img-placeholder.png" alt=""/>
                </div>
                <div className="input">
                    <p>Image Url:</p>
                    <input onChange={this.handleUrl} value={this.state.imageurl}  type="text"/>
                </div>
                <div className="input">
                    <p>Product Name:</p>
                    <input onChange={this.handleName} value={this.state.name}  type="text"/>
                </div>
                <div className="input">
                    <p>Price:</p>
                    <input onChange={this.handlePrice} value={this.state.price}  type="text"/>
                </div>
                <div>
                    <button onClick={this.clearValues}>Cancel</button>
                    <button onClick={this.addProduct}>Add To Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form