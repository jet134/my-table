import React, {Component} from "react";
import InputPerson from "./InputPerson";
import PeopleForEach from "./PeopleForEach";

export default class PeopleList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    addPersonToList = (person) => {
        console.log(person);
        this.setState({
            list: [...this.state.list, person]
        }, () => console.log(this.state.list));
    }

    deletPersonFromList = (index) => {
        this.state.list.splice(index, 1);
        this.setState({
            list: this.state.list
        }, () => console.log(this.state.list))
    }
    

    render() {
        return (
            <div>
                <div>
                    <InputPerson addPerson={this.addPersonToList}/>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.map((person, index) => 
                                <PeopleForEach 
                                person={person} 
                                index={index}
                                deleteBtnHandler={this.deletPersonFromList}/>
                            )}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        );
    }
}