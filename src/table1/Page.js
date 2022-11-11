import React, {Component} from "react";
import Table from "./Table";

const person = {
    name: String,
    age: Number
};

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: person,
            tableData: []
        }
    }

    nameOnChangeHandler = (name) => {
        this.setState({
            ...this.state,
            person: {
                ...this.state.person,
                name: name
            }
        }, () => console.log(this.state));
    }
    
    ageOnChangeHandler = (age) => {
        this.setState({
            ...this.state,
            person: {
                ...this.state.person,
                age: age
            }
        }, () => console.log(this.state));
    }

    saveToTable = (person, e) => {
        console.log("click add: name = %s, age = %s", person.name, person.age);
        // const temp = [{person: {
        //     ...this.state.person,
        //     id: this.state.tableData.length
        // }}]

        // temp.forEach(t => console.log(t));

        this.setState({
            ...this.state,
            tableData: [
                ...this.state.tableData,
                person
            ]
        });
    }

    render() {
        const {name, age, person, tableData} = this.state;
        const test = [{name: "tom", age: 5}, {name: "tom", age: 7}];
        

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
                    <button onClick={(e) => this.saveToTable(person, e)}>Add</button>
                </div>
                
                <div>
                    <Table data={tableData}/>
                    {/* <Table data={test}/> */}
                </div>
            </div>
        );
    }
}