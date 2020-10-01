import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const mockStore = configureStore([thunk]);
export default (state = {}) => {
  return mockStore({
    ...state,
  });
};
