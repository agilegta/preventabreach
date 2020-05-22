import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humanCapitalManagementIndustryGovernance: ''
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
      this.props.results.dbcResults.humanCapitalManagementIndustryGovernance
    ) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>{' '}
          <p>
            {
              this.props.results.dbcResults
                .humanCapitalManagementIndustryGovernance.message
            }
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Are you aware of your industry governance in your line of business in
        relation to your employees?
        <div className="radio__container">
          <form className="radio">
            <input
              id="humanCapitalManagementIndustryGovernance-yes"
              type="radio"
              name="humanCapitalManagementIndustryGovernance"
              value="yes"
              className="form-check-input"
              checked={
                this.state.humanCapitalManagementIndustryGovernance === 'yes'
              }
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="humanCapitalManagementIndustryGovernance-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="humanCapitalManagementIndustryGovernance-no"
              type="radio"
              name="humanCapitalManagementIndustryGovernance"
              value="no"
              className="form-check-input"
              checked={
                this.state.humanCapitalManagementIndustryGovernance === 'no'
              }
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="humanCapitalManagementIndustryGovernance-no"
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

export default connect(mapStateToProps, { renderDBCResults })(QuestionOne);
