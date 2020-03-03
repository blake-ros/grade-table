import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <h1 className="ml-1 col-9">Student Grade Table</h1>
        <h2 className="col">Average Grade<span className="badge badge-secondary">{this.getAverageGrade}</span></h2>
      </header>
    );
  }
}

export default Header;
