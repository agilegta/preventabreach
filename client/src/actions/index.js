var axios = require("axios");

export const renderDBCResults = (formValues) => async (dispatch, getState) => {
  const response = await axios.post("/api/v1/dbcExec", {
    ...formValues,
  });

  dispatch({ type: "DBC_RESULTS", payload: response.data });
};
