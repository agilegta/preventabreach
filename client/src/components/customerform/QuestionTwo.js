import React from 'react';
import { Link } from 'react-router-dom';
import { renderDBCResults } from '../../actions/index';
import { connect } from 'react-redux';

class QuestionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerPolicy: ''
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
    if (this.props.results.dbcResults.customerPolicy) {
      return (
        <div className="light-blue margin-bottom-small">
          <br />
          <br />
          <h4>Recommendation:</h4>
          <p>{this.props.results.dbcResults.customerPolicy.message}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question">
        Do you have a data management policy that you actively enforce with your
        employees in relation to your customer data?
        <div className="radio__container">
          <form className="radio">
            <input
              id="customerPolicy-yes"
              type="radio"
              name="customerPolicy"
              value="yes"
              className="form-check-input"
              checked={this.state.customerPolicy === 'yes'}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="customerPolicy-yes">
              Yes
            </label>
          </form>
          <form className="radio">
            <input
              id="customerPolicy-no"
              type="radio"
              name="customerPolicy"
              value="no"
              className="form-check-input"
              checked={this.state.customerPolicy === 'no'}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="customerPolicy-no">
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

export default connect(mapStateToProps, { renderDBCResults })(QuestionTwo);
