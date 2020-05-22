exports.generateResults = (req, res) => {
  console.log(req.body);
  if (req.body.transmitPII == 'yes') {
    res.status(200).json({
      status: 'success',
      data: {
        score: '-1'
      }
    });
  } else if (req.body.transmitPII == 'no') {
    res.json({
      status: 'success',
      data: {
        score: '1'
      }
    });
  }

  if (req.body.transmitPII3rdParty == 'yes') {
    res.status(200).json({
      status: 'success',
      data: { score: '-1' }
    });
  } else if (req.body.transmitPII3rdParty == 'no') {
    res.json({
      status: 'success',
      data: { score: '1' }
    });
  }
};
