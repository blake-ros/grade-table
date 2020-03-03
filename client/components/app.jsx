import React from 'react';
import Header from './header.jsx';
import Grade from './grade.jsx';
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
    console.log(this.state.grades);
    return (
      <div>
        <Header />
        <GradeTable />
      </div>
    );
  }
}

export default App;
