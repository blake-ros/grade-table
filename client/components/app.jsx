import React from 'react';
import Header from './header.jsx';
import GradeTable from './grade-table.jsx';
import Grades from './grade.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      grades: []
    });
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  render() {
    console.log(this.state.grades);
    const gradeName = this.props.name;
    const gradeCourse = this.props.course;
    const grade = this.props.grade;
    return (
      <div>
        <Header />
        <GradeTable studentGrades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
