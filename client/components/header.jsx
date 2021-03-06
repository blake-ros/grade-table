import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <h1 className="ml-1 col-xl-9">Student Grade Table</h1>
        <h2 className="col-xl">Average Grade<span className="badge badge-secondary">{this.props.average}</span></h2>
      </header>
    );
  }
}

export default Header;
