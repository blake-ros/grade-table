import React from 'react';

class GradeTable extends React.Component {

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
      </table>
    );
  }

}

export default GradeTable;
