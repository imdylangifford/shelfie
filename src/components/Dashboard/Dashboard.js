import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){
        super(props)

    }

    render(){
        let displayProducts = this.props.products.map((el,i)=>{
            return (
                    <Product product={el} />
            )
        })
        return(
            <div>
                {displayProducts}
            </div>
        )
    }
}

export default Dashboard