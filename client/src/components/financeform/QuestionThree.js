import React from 'react';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      financeProcesses: ''
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
    if (this.props.results.dbcResults.financeProcesses) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>
          <p>{this.props.results.dbcResults.financeProcesses.message}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Do you have data management processes that are understood and add value
        in relation to your financial data?
        <div className="radio__container">
          <form className="radio">
            <input
              id="financeProcesses-yes"
              type="radio"
              name="financeProcesses"
              value="yes"
              className="form-check-input"
              checked={this.state.financeProcesses === 'yes'}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="financeProcesses-yes">
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="financeProcesses-no"
              type="radio"
              name="financeProcesses"
              value="no"
              className="form-check-input"
              checked={this.state.financeProcesses === 'no'}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="financeProcesses-no">
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
