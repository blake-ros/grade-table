import React from 'react';
import Grade from './grade.jsx';

class GradeTable extends React.Component {

  render() {
    console.log(this.props.studentGrades);
    const grades = this.props.studentGrades;
    const gradeRow = grades.map(grade => {
      return <Grade name={grade.name} course={grade.course} grade={grade.grade} />;
    });

    console.log(gradeRow);

    return (
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody> {gradeRow} </tbody>
      </table>
    );
  }

}

export default GradeTable;
