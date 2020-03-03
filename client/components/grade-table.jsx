import React from 'react';
import Grade from './grade.jsx';

class GradeTable extends React.Component {

  render() {
    console.log(this.props.studentGrades);
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          <Grade />
        </tbody>
      </table>
    );
  }

}

export default GradeTable;
