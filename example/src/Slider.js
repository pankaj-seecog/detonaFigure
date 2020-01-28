import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios.get("https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images/list").then((res) => {
            console.log('The list is ', res.data);
            this.setState({
                products: [...res.data]
            })
        })
            .catch((err) => {
                console.log("The error is ", err);
            })
    }

    render() {
        console.log(this.state.products);
        return (

            <Carousel>
                {
                    this.state.products.map((item,i) => {
                        return (
                        <div key={i}>
                          <Link to={"/details/"+item.id}>  <img src={item.url}  height="200"/>
                            <h3>{item.title}</h3>
                          </Link>
                        </div>)
                    })
                }
            </Carousel>

        )
    }

}

let Item = (props) => {
    return (
        <div>
            ==> {props}
            <img src={props.url} />
            <h3>{props.title}</h3>
        </div>
    )
}

export default Slider;