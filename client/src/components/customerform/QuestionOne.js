import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerIndustryGovernance: ''
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
    if (this.props.results.dbcResults.customerIndustryGovernance) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>
          <p>
            {this.props.results.dbcResults.customerIndustryGovernance.message}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Are you aware of your industry governance in your line of business in
        relation to your customer data?
        <div className="radio__container">
          <form className="radio">
            <input
              id="customerIndustryGovernance-yes"
              type="radio"
              name="customerIndustryGovernance"
              value="yes"
              className="form-check-input"
              checked={this.state.customerIndustryGovernance === 'yes'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="customerIndustryGovernance-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="customerIndustryGovernance-no"
              type="radio"
              name="customerIndustryGovernance"
              value="no"
              className="form-check-input"
              checked={this.state.customerIndustryGovernance === 'no'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="customerIndustryGovernance-no"
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
