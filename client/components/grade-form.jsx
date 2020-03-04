import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      grade: '',
      course: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    return (
      <form className="col-md-3" onSubmit={this.props.addGrade()}>
        <h2 className="ml-2 mt-1 pb-2" id="addGrade">Add Grade</h2>
        <div className="form-group ml-2">
          <div className="input-group mb-3">
            <i className="fas fa-user fa-lg input-group-prepend input-group-text d-flex"></i>
            <input name="name" className="form-control form-control-lg" type="text" placeholder="Name" id="name"></input>
          </div>
          <div className="input-group mb-3">
            <i className="far fa-list-alt fa-lg input-group-prepend input-group-text d-flex"></i>
            <input name="course" className="form-control form-control-lg" type="text" placeholder="Course" id="course"></input>
          </div>
          <div className="input-group mb-3">
            <i className="fas fa-graduation-cap fa-md input-group-prepend input-group-text d-flex"></i>
            <input name="grade" className="form-control form-control-lg" type="text" placeholder="Grade" id="grade"></input>
          </div>
          <button type="submit" className="btn btn-success btn-sm mr-2 pr-3 pl-3 pt-2 pb-2" id="add">Add</button>
          <button type="reset" className="btn btn-outline-secondary btn-sm pl-2 pr-2 pt-2 pb-2">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
