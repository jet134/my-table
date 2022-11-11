import React, {Component} from "react";

export default class InputPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: String,
                age: Number
            }
        }
    }

    nameOnChangeHandler = (name) => {
        this.setState({
            person: {
                ...this.state.person,
                name: name
            }
        }, () => console.log(this.state.person));
    }

    ageOnChangeHandler = (age) => {
        this.setState({
            person: {
                ...this.state.person,
                age: age
            }
        }, () => console.log(this.state.person));
    }    
    
    render() {
        return (
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" value={this.state.name}
                onChange={(e) => this.nameOnChangeHandler(e.target.value)}
                />
                <label htmlFor="age">Age:</label>
                <input id="age" value={this.state.age}
                onChange={(e) => this.ageOnChangeHandler(e.target.value)}
                />
                <div>
                    <button onClick={() => this.props.addPerson(this.state.person)}>Add</button>
                </div>
            </div>
        );
    }
}