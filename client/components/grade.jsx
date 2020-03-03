import React from 'react';

class Grades extends React.Component {

  render() {
    return (
      <tr>
        <td scope="col"> {this.props.name } </td>
        <td scope="col"> {this.props.course} </td>
        <td scope="col"> {this.props.grade} </td>
      </tr>
    );
  }
}

export default Grades;
