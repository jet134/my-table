import React, {Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: String,
            age: Number
        }
    }

    nameOnChangeHandler = (name) => {
        this.setState({
            ...this.state,
            name: name
        }, () => console.log(this.state));
    }
    
    ageOnChangeHandler = (age) => {
        this.setState({
            ...this.state,
            age: age
        }, () => console.log(this.state));
    }

    saveToTable = (name, age) => {
        console.log("name = %s, age = %s", name, age);
    }

    render() {
        const {name, age} = this.state;

        return (
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" defaultValue={name}
                onChange={(e) => this.nameOnChangeHandler(e.target.value)}
                />
                <label htmlFor="age">Age:</label>
                <input id="age" defaultValue={age}
                onChange={(e) => this.ageOnChangeHandler(e.target.value)}
                />
                <div>
                    <button onClick={() => this.saveToTable(name, age)}>Add</button>
                </div>
                
            </div>
        )
    }
}