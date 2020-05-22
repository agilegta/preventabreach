import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessProcessProcesses: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value
    });

    this.props.renderDBCResults({
      ...this.state,
      [event.target.name]: value
    });
  }

  renderAnswer() {
    if (this.props.results.dbcResults.businessProcessProcesses) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>{' '}
          <p>
            {this.props.results.dbcResults.businessProcessProcesses.message}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Do you have data management processes that are understood and add value?
        <div className="radio__container">
          <form className="radio">
            <input
              id="businessProcessProcesses-yes"
              type="radio"
              name="businessProcessProcesses"
              value="yes"
              className="form-check-input"
              checked={this.state.businessProcessProcesses === 'yes'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="businessProcessProcesses-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="businessProcessProcesses-no"
              type="radio"
              name="businessProcessProcesses"
              value="no"
              className="form-check-input"
              checked={this.state.businessProcessProcesses === 'no'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="businessProcessProcesses-no"
            >
              No
            </label>
          </form>
        </div>
        {this.renderAnswer()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state
  };
};
export default connect(mapStateToProps, { renderDBCResults })(QuestionThree);
