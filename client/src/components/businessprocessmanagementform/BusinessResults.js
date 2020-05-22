import React from 'react';
import { connect } from 'react-redux';

class BusinessResults extends React.Component {
  render() {
    const results = this.props.results.dbcResults;
    console.log(results);
    if (
      results.businessProcessPolicy &&
      results.businessProcessIndustryGovernance &&
      results.businessProcessProcesses &&
      results.businessProcessPracticesMeasured &&
      results.businessProcessOptimizationAndAutomation
    ) {
      return (
        <div>
          <h1>Results: </h1>
          <h2>Industry Compliance</h2>
          <p>{results.businessProcessIndustryGovernance.message}</p>
          <h2>Policy</h2>
          <p>{results.businessProcessPolicy.message}</p>
          <h2>Process</h2>
          <p>{results.businessProcessProcesses.message}</p>
          <h2>Practices Measured</h2>
          <p>{results.businessProcessPracticesMeasured.message}</p>
          <h2>Optimization and Automation</h2>
          <p>{results.businessProcessOptimizationAndAutomation.message}</p>
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

export default connect(mapStateToProps)(BusinessResults);
