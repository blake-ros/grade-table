import React from 'react';
import Header from './header.jsx';
import GradeTable from './grade-table.jsx';

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
    // console.log(this.state.grades);

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
