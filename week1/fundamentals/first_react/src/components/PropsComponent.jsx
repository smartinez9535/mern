import React, {Component} from 'react';

class PropsComponent extends Component {
    constructor(props){
        super(props)
        console.log(props)

    }

    render(){
        return (
            <div>

                <p>This is Props component</p>
                <p> {this.props.message} </p>
                <p> {this.props.x} </p>
                <p> {this.props.animals} </p>
            </div>
        );
    }
}

export default PropsComponent;