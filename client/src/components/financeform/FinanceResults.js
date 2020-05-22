import React from 'react';
import { connect } from 'react-redux';

class FinanceResults extends React.Component {
  render() {
    const results = this.props.results.dbcResults;
    console.log(results);
    if (
      results.financePolicy &&
      results.financeIndustryGovernance &&
      results.financeProcesses &&
      results.financePracticesMeasured &&
      results.financeOptimizationAndAutomation
    ) {
      return (
        <div>
          <h1>Results: </h1>
          <h2>Industry Compliance</h2>
          <p>{results.financeIndustryGovernance.message}</p>
          <h2>Policy</h2>
          <p>{results.financePolicy.message}</p>
          <h2>Process</h2>
          <p>{results.financeProcesses.message}</p>
          <h2>Practices Measured</h2>
          <p>{results.financePracticesMeasured.message}</p>
          <h2>Optimization and Automation</h2>
          <p>{results.financeOptimizationAndAutomation.message}</p>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    results: state
  };
};

export default connect(mapStateToProps)(FinanceResults);
