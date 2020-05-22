import React from 'react';
import { connect } from 'react-redux';

class HumanCapitalManagementResults extends React.Component {
  render() {
    const results = this.props.results.dbcResults;
    console.log(results);
    if (
      results.humanCapitalManagementPolicy &&
      results.humanCapitalManagementIndustryGovernance &&
      results.humanCapitalManagementProcesses &&
      results.humanCapitalManagementPracticesMeasured &&
      results.humanCapitalManagementOptimizationAndAutomation
    ) {
      return (
        <div>
          <h1>Results: </h1>
          <h2>Industry Compliance</h2>
          <p>{results.humanCapitalManagementIndustryGovernance.message}</p>
          <h2>Policy</h2>
          <p>{results.humanCapitalManagementPolicy.message}</p>
          <h2>Process</h2>
          <p>{results.humanCapitalManagementProcesses.message}</p>
          <h2>Practices Measured</h2>
          <p>{results.humanCapitalManagementPracticesMeasured.message}</p>
          <h2>Optimization and Automation</h2>
          <p>
            {results.humanCapitalManagementOptimizationAndAutomation.message}
          </p>
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

export default connect(mapStateToProps)(HumanCapitalManagementResults);
