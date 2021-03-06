import React from 'react'

// class component equal for comparison

class ClassCounter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        console.log(this.state)
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
            <button onClick={this.incrementCount}> Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter