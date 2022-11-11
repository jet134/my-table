import React, {Component} from "react";
import Template from "./Template";

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        // console.log(this);
    }

    deleteBtnHandler = (person, index) => {
        // console.log(this.state.data);
        // this.setState({
        //     data: this.state.data.filter((_person, _index) => {
        //         console.log(_person);
        //         console.log(_index);
        //         console.log(person);
        //         // return _index !== index;
        //         return _person !== person;
        //     })
        // })

        this.state.data.splice(index, 1);
        this.setState({
            data: this.state.data
        })
    }

    personRender = (data) => {
        // console.log(data);
        return (
            // <ul>
            //     {data.map((obj) => <ol key={obj.person.id}>name: {obj.person.name}, age: {obj.person.age}, index = {obj.person.id}</ol>)}
            // </ul>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* {console.log(data)} */}
                    {data.map((person, index) => 
                        <tr key={index}>
                            {/* <td>{console.log(person[index])}</td> */}
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>
                                <button onClick={() => this.deleteBtnHandler(person, index)}>Del</button>
                            </td>
                        </tr>
                    )}
                </tbody>
                
            </table>
            
        );
    }

    render() {
        const {data} = this.state;
        // const test = [{person: {id: 0, name: "tom", age: 5}}, {person: {id: 1, name: "tom", age: 3}}];
        const test = [{name: "tom", age: 5}, {name: "tom", age: 7}];
        
        return (
            <div>
                {this.personRender(data)}
                {/* {this.personRender(test)} */}
                {/* <Template /> */}
            </div>
        );
    }
}