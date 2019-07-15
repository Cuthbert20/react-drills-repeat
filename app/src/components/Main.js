import React, {Component} from 'react'


export default class Main extends Component {
    constructor(){
        super()

        this.state = {
            filterString: "",
            arr: ["Dad", "Mom", "Ryker", "Remi", "Cody", "Shelly 2", "Eva"]
        }
    }
    selectName(filter){
        this.setState({
            filterString: filter
        })
        
    }
    render(){
        let familyArr = this.state.arr.filter((elm,index) => {
            return elm.includes(this.state.filterString)
        })
        .map((elm,index) => {
            return <h2 key={index}>{elm}</h2>
        })

        return(
            <div>
                <input onChange={(e) => this.selectName(e.target.value)} type="text"/>
                {familyArr}
            </div>
        )
    }
}
