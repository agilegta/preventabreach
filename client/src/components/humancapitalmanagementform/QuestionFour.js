import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humanCapitalManagementPracticesMeasured: ''
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
    if (this.props.results.dbcResults.humanCapitalManagementPracticesMeasured) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>{' '}
          <p>
            {
              this.props.results.dbcResults
                .humanCapitalManagementPracticesMeasured.message
            }
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Do you perform quarterly audits to ensure your organization are
        complying to data management policies and processes?
        <div className="radio__container">
          <form className="radio">
            <input
              id="humanCapitalManagementPracticesMeasured-yes"
              type="radio"
              name="humanCapitalManagementPracticesMeasured"
              value="yes"
              className="form-check-input"
              checked={
                this.state.humanCapitalManagementPracticesMeasured === 'yes'
              }
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="humanCapitalManagementPracticesMeasured-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="humanCapitalManagementPracticesMeasured-no"
              type="radio"
              name="humanCapitalManagementPracticesMeasured"
              value="no"
              className="form-check-input"
              checked={
                this.state.humanCapitalManagementPracticesMeasured === 'no'
              }
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="humanCapitalManagementPracticesMeasured-no"
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

export default connect(mapStateToProps, { renderDBCResults })(QuestionFour);
