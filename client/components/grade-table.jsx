import React from 'react';
import Grade from './grade.jsx';

class GradeTable extends React.Component {

  render() {
    const grades = this.props.studentGrades;
    const deleteThisGrade = this.props.deleteGrade;
    const gradeRow = grades.map(grade => {
      return <Grade key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} onDelete={id => deleteThisGrade(grade.id)}/>;
    });

    return (
      <div className="col-md-8">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>{gradeRow}</tbody>
        </table>
      </div>
    );
  }
}

export default GradeTable;
