exports.generateResults = (req, res) => {
  console.log(req.body[Object.keys(req.body)[0]]);

  //
  function generateMessage(status, type) {
    if (status == 'yes') {
      switch (type) {
        case 'customerIndustryGovernance':
          return 'Great, this support qualitatively managed data management beyond policies and training.';
        case 'customerPolicy':
          return 'Ensure it is updated on a regular basis (as determined by your legal and cybersecurity expert';
        case 'customerProcesses':
          return 'Beginning with the end in mind is critical to providing customer data management assurance. This final level helps customers understand you’re their data is truly important to you and this helps to build trust and brand value.';
        case 'customerPracticesMeasured':
          return 'You should ensure that staff maintain the knowledge by reinforcing standards and driving data automation wherever possible.';
        case 'customerOptimizationAndAutomation':
          return 'You are managing at a minimum, the human factor of protecting your customers.';

        case 'businessProcessIndustryGovernance':
          return 'Excellent, data stewardship is critical for every department and employee.  Having funded integration and oversight supports each department’s integration requirements.';
        case 'businessProcessPolicy':
          return 'Excellent, you have standards, roles and expertise defined to advance complex integration and business processes for application functionality.';
        case 'businessProcessProcesses':
          return 'Then you’re doing something better than most executive governance…the organization is aware of this as a shared accountability';
        case 'businessProcessPracticesMeasured':
          return 'Great, as loosely coupled yet integrated at the core of the organization – gives you flexibility for managing and innovating.';
        case 'businessProcessOptimizationAndAutomation':
          return 'Excellent, you have a strong foundation to support advanced data usage.';

        case 'financeIndustryGovernance':
          return 'You’re responsible and accountable at a whole different level. The lens of accountability becomes much sharper for all of your actions.';
        case 'financePolicy':
          return 'You’re well on your way to begin managing according to any compliance you’re bound by.';
        case 'financeProcesses':
          return 'Then you need to abide by the standards set forth for storing and using PII, PCI, data';
        case 'financePracticesMeasured':
          return 'You have a means to reduce cybersecurity fraud including phishing and other data loss prevention controls.';
        case 'financeOptimizationAndAutomation':
          return 'Excellent, you are on your way to reducing significant data breach risk while driving corporate performance.';

        case 'humanCapitalManagementIndustryGovernance':
          return 'Excellent, you have strong data awareness and the actions to back it up right across the entire organization.  You’re a great partner and leader even if you’re not the primary executive accountable for the overall Data Management Strategy.';
        case 'humanCapitalManagementPolicy':
          return 'Then you’re doing something better than most HR Executives…you are aware of the language necessary to help solve this problem before they step through your company doors.';
        case 'humanCapitalManagementProcesses':
          return 'Then you’re backing up the first line of defense established by policy and recruitment practices.';
        case 'humanCapitalManagementPracticesMeasured':
          return 'Great, you’re aware of the need to have an asset list at a minimum before you can qualitatively manage data.';
        case 'humanCapitalManagementOptimizationAndAutomation':
          return 'Then your executive colleagues “get it”';
      }
    } else if (status == 'no') {
      switch (type) {
        case 'customerIndustryGovernance':
          return 'Consider that things are changing all the time with employee turnover, vendors M&A, operational changes. Project and Operational controls can help with these changes';
        case 'customerPolicy':
          return 'Consider that organizations must abide by government regulations on privacy, CASL antispam and other specific industry compliance as a minimum.  A policy should reflect which ones apply to your organization.';
        case 'customerProcesses':
          return 'Consider that a data breach is not an IF…but a WHEN. What will this impact mean to your business?';
        case 'customerPracticesMeasured':
          return 'Then consider that staff that are not trained may inadvertently be placing your entire organization at risk, and your hiring/onboarding procedures are not in alignment to corporate strategy.';
        case 'customerOptimizationAndAutomation':
          return 'Work with the HR department to ensure that all job description include training for data management specifically to protect customers…and the organization.';

        case 'businessProcessIndustryGovernance':
          return 'Without accountability, any efforts to manage data through existing processes will be isolated.  Data is fully integrated across the organization in ways you cannot see unless, you’re actively looking.';
        case 'businessProcessPolicy':
          return 'Application sprawl, inefficient business processes and a lack of standards create more chaos';
        case 'businessProcessProcesses':
          return 'If this topic doesn’t come up in Executive roundtables, and there is no shared accountability or responsibility, then most organizations fight this from the ground up with limited resourced. And limited results.';
        case 'businessProcessPracticesMeasured':
          return 'Data management practices will deteriorate, creating risks and threat opportunities. Every department does what they want to do but not effectively nor efficiently.';
        case 'businessProcessOptimizationAndAutomation':
          return 'You may be struggling to manage data manually and possibly limiting business agility.  Although previous efforts got you here, the final step to optimization is automation – consider talking to an expert on opportunities for data automation.';

        case 'financeIndustryGovernance':
          return 'It doesn’t mean you aren’t as accountable, but the degree of effort is appropriate for the size of your company. Leverage other regulatory standards to help drive compliance.';
        case 'financePolicy':
          return 'Consider that questions 1, 2 and 3 are oriented towards companies that plan for scalable growth in a secure manner…if you don’t plan on growth at this time, then you as the financial officer should consider what are appropriate controls.';
        case 'financeProcesses':
          return 'You have a lowered attack surface';
        case 'financePracticesMeasured':
          return 'Your financial management and other data management practices could be at risk of a data breach.';
        case 'financeOptimizationAndAutomation':
          return 'Consider why you’re doing data management in the first place.';

        case 'humanCapitalManagementIndustryGovernance':
          return 'Consider supporting this at the executive table…continuous improvement can only success when there is alignment on the importance of data management.';
        case 'humanCapitalManagementPolicy':
          return 'If you’re simply relying on your IT Executive or each hiring manager, then it’s time to consult with a firm that has expertise in how policies and recruitment work together as a first line of defense. ';
        case 'humanCapitalManagementProcesses':
          return 'Then it’s time you begin to enforce this second line of defense.';
        case 'humanCapitalManagementPracticesMeasured':
          return 'Data management practices will deteriorate, creating risks and threat opportunities.';
        case 'humanCapitalManagementOptimizationAndAutomation':
          return 'Consider enforcing this third line of defense.';
      }
    }
  }

  res.json({
    status: 'success',
    data: {
      [Object.keys(req.body)[0]]: {
        message: generateMessage(
          req.body[Object.keys(req.body)[0]],
          Object.keys(req.body)[0]
        )
      }
    }
  });
};
