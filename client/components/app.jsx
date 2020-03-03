import React from 'react';
import Header from './header.jsx';
import GradeTable from './grade-table.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      grades: []
    });
  }

  componentDidMount() {
    fetch('/api/grades', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  getAverageGrade() {
    const grades = this.state.grades;
    const gradeLength = grades.length;
    const newArray = grades.map(grade => {
      let sum = 0;
      sum += grade.grade;
      return sum;
    });
    const total = newArray.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    const myAverageGrades = total / gradeLength;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <GradeTable studentGrades={this.state.grades}/>
        <p className="d-none ml-1">No Grades Recorded</p>
      </div>
    );
  }
}

export default App;
