import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      grade: null,
      course: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <form className="col-md-3" onSubmit={event => {
        event.preventDefault();
        this.props.addGrade(this.state);
      }}>
        <h2 className="ml-2 mt-1 pb-2" id="addGrade">Add Grade</h2>
        <div className="form-group ml-2">
          <div className="input-group mb-3">
            <i className="fas fa-user fa-lg input-group-prepend input-group-text d-flex"></i>
            <input name="name" className="form-control form-control-lg" type="text" placeholder="Name" id="name" value={this.state.value} onChange={this.handleChange}></input>
          </div>
          <div className="input-group mb-3">
            <i className="far fa-list-alt fa-lg input-group-prepend input-group-text d-flex"></i>
            <input name="course" className="form-control form-control-lg" type="text" placeholder="Course" id="course" value={this.state.value} onChange={this.handleCourseChange}></input>
          </div>
          <div className="input-group mb-3">
            <i className="fas fa-graduation-cap fa-md input-group-prepend input-group-text d-flex"></i>
            <input name="grade" className="form-control form-control-lg" type="text" placeholder="Grade" id="grade" value={this.state.value} onChange={this.handleGradeChange}></input>
          </div>
          <button type="submit" className="btn btn-success btn-sm mr-2 pr-3 pl-3 pt-2 pb-2" id="add">Add</button>
          <button type="reset" className="btn btn-outline-secondary btn-sm pl-2 pr-2 pt-2 pb-2">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
