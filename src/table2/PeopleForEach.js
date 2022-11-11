import React, {Component} from "react";

export default class PeopleForEach extends Component {

    render() {
        const {person, index} = this.props;
        console.log("PeopleForEach");
        console.log(this.props);

        return(
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>
                    <button onClick={() => this.deleteBtnHandler(index)}>Del</button>
                </td>
            </tr>
        );
    }
}