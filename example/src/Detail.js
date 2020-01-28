import React from 'react';
import axios from 'axios';
import "./Detail.css";
class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail_id: "",
            product_detail: {}
        }
        console.log("==> ");
        console.log('The params is ', this.props);
    }

    componentWillMount() {
        console.log('The params is ', this.props);
    }

    componentWillReceiveProps() {
        console.log('The params is ==>', this.props.location.pathname.split('/')[2]);
        let id = this.props.location.pathname.split('/')[2];
        axios.get("https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images?id=" + id).then((res) => {
            console.log('The detail is ', res.data);
            this.setState({
                product_detail : {},
                product_detail: res.data
            })
        })
            .catch((err) => {
                console.log('The error is ', err);
            })
        
    }

    // scanNow=(ref)=>{
    //     tess.init("eng");
    //     // set image
    //     tess.setImage(ref);
    //     // run recognition
    //     tess.recognize();
    //     // get recognized text
    //     console.log(tess.getText());
         
    //     // clear results
    //     tess.clear();
    // }

    render() {
        let content=null;
        if(this.state.product_detail.title != undefined){
            content = (
                <div className="description">
                  
                    <div >
                    <img src={this.state.product_detail.url} width="400" height="400" align="left"/>
                    <p>
    <b>{this.state.product_detail.title}</b>
                    </p>
                    <p>
    <b>Quantity</b> : {this.state.product_detail.quantity}
                    </p>
                    <p>
    <b>Description </b>: <br/>
    {this.state.product_detail.description}
                    </p>
                    </div><br/><br/><br/>
                    <b>Features</b><br/>
            {this.state.product_detail.features?this.state.product_detail.features.map((x)=><li>{x}</li>):"No Features found"}
                   
    <button class="btn btn-primary" >Scan It</button>
                   
                </div>
            )
        }
        else{
            content = (
                <div>Please select the Product</div>
            )
        }
        return (
            <div>
                {content}
            </div>
        )
    }


}

export default Detail;