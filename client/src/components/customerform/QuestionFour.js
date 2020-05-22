import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerPracticesMeasured: ''
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
    if (this.props.results.dbcResults.customerPracticesMeasured) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>
          <p>
            {this.props.results.dbcResults.customerPracticesMeasured.message}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Do you perform quarterly audits to ensure your organization are
        complying to customer data management policies and processes?
        <div className="radio__container">
          <form className="radio">
            <input
              id="customerPracticesMeasured-yes"
              type="radio"
              name="customerPracticesMeasured"
              value="yes"
              className="form-check-input"
              checked={this.state.customerPracticesMeasured === 'yes'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="customerPracticesMeasured-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="customerPracticesMeasured-no"
              type="radio"
              name="customerPracticesMeasured"
              value="no"
              className="form-check-input"
              checked={this.state.customerPracticesMeasured === 'no'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="customerPracticesMeasured-no"
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
