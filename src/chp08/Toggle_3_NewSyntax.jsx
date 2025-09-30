import React from "react";

class Toggle_3_NewSyntax extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true}
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return(
            <div align="center" style={{margin: 200}}>
                <button onClick={this.handleClick}>
                    New Syntax {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default Toggle_3_NewSyntax;