import React from "react";

export default
class Operation extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            buttonText: "Start timer",
            clicked: 0
        }
    }

    startTimer = (e) => {
        e.preventDefault()
        this.setState({
            buttonText: this.state.buttonText === "Start timer" ? "Stop timer" : "Start timer",
            clicked: this.state.clicked + 1
        }, () => {
            if(this.state.clicked%2 !== 0) {
                this.props.start(this.props.id, this.props.operation.id)
            } else {
                this.props.stop(this.props.id, this.props.operation.id)
            }
        })
    }

    render() {
        return (
            <li className="list-group-item active task-description">
                <h3>{this.props.operation.name}</h3>
                <h5>{this.props.operation.timeSpent}</h5>
                <a href="start-timer" onClick={this.startTimer}>{this.state.buttonText}</a>
            </li>
        )
    }
}


