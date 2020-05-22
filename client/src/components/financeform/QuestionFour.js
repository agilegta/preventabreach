import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      financePracticesMeasured: ''
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
    if (this.props.results.dbcResults.financePracticesMeasured) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>
          <p>
            {this.props.results.dbcResults.financePracticesMeasured.message}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Do you perform quarterly audits to ensure your organization are
        complying to financial data management policies and processes?
        <div className="radio__container">
          <form className="radio">
            <input
              id="financePracticesMeasured-yes"
              type="radio"
              name="financePracticesMeasured"
              value="yes"
              className="form-check-input"
              checked={this.state.financePracticesMeasured === 'yes'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="financePracticesMeasured-yes"
            >
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="financePracticesMeasured-no"
              type="radio"
              name="financePracticesMeasured"
              value="no"
              className="form-check-input"
              checked={this.state.financePracticesMeasured === 'no'}
              onChange={this.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="financePracticesMeasured-no"
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
