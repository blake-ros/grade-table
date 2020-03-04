import React from 'react';
import Header from './header.jsx';
import GradeTable from './grade-table.jsx';
import GradeForm from './grade-form.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      grades: []
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Cosntent-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        const myGrades = this.state.grades;
        this.setState({ grades: myGrades.concat(data) });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
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
    const myAverageGrades = Math.round(total / gradeLength);
    return myAverageGrades;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header average={this.getAverageGrade()}/>
        <div className="row">
          <GradeTable studentGrades={this.state.grades}/>
          <GradeForm submit={this.handleSubmit}/>
        </div>
        <p className="d-none ml-1">No Grades Recorded</p>
      </div>
    );
  }
}

export default App;
