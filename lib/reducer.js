// import {} from 'types';
const INIT = {
  /**
   * INITIAL VALUES
   */
};
export default (state = INIT, action) => {
  switch (action.type) {
    case 1: {
      return 1;
    }
    default:
      return state;
  }
};
