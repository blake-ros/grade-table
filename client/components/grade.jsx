import React from 'react';

class Grades extends React.Component {

  render() {
    return (
      <tr>
        <td scope="col"> {this.props.name } </td>
        <td scope="col"> {this.props.course} </td>
        <td scope="col"> {this.props.grade} </td>
        <td scope="col"><button className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}

export default Grades;
