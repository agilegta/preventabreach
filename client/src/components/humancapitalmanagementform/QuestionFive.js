import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humanCapitalManagementOptimizationAndAutomation: ''
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
    if (
      this.props.results.dbcResults
        .humanCapitalManagementOptimizationAndAutomation
    ) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>{' '}
          <p>
            {
              this.props.results.dbcResults
                .humanCapitalManagementOptimizationAndAutomation.message
            }
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Does your organization actively improve data management through
        automation or process improvement?
        <div className="radio__container">
          <form className="radio">
            <input
              id="humanCapitalManagementOptimizationAndAutomation-yes"
              type="radio"
              name="humanCapitalManagementOptimizationAndAutomation"
              value="yes"
              className="form-check-input"
              checked={
                this.state.humanCapitalManagementOptimizationAndAutomation ===
                'yes'
              }
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="humanCapitalManagementOptimizationAndAutomation-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="humanCapitalManagementOptimizationAndAutomation-no"
              type="radio"
              name="humanCapitalManagementOptimizationAndAutomation"
              value="no"
              className="form-check-input"
              checked={
                this.state.humanCapitalManagementOptimizationAndAutomation ===
                'no'
              }
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="humanCapitalManagementOptimizationAndAutomation-no"
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

export default connect(mapStateToProps, { renderDBCResults })(QuestionFive);
