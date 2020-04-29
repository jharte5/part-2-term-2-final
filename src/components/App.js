import React, { Component } from 'react'
import Header from './Header'
import Beer from './Beer'

class App extends Component {
    constructor () {
        super();
        this.state = {
            // beer,
            beer: []
        }
    }
    getBeer = () => {
        fetch(
            "https://api.punkapi.com/v2/beers",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=UFT-8",
                    "Access-Control-Allow-Origin": "*"
                },
            })
        .then((response) => {
            console.log(this.state)
            return response.json();
        })
        .then((data) => {
            console.log('Beer', data)
            this.setState({
                beer: data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.getBeer()
    }

    render() {
        console.log('Beer', this.state.beer)
        return (
            <div>
                <div style={{backgroundColor: "lightBlue"}}>
                <Header/>
                </div>
                <Beer beer={this.state.beer}/>
            </div>
        )
    }
}
export default App