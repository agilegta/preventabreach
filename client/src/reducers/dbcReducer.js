export default (state = {}, action) => {
  switch (action.type) {
    case 'DBC_RESULTS':
      return {
        ...state,
        [Object.keys(action.payload.data)[0]]:
          action.payload.data[Object.keys(action.payload.data)[0]]
      };
    default:
      return state;
  }
};
