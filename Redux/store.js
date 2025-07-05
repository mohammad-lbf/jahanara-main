import { createStore  } from "redux";

import { testReducer } from "./tests/testReducer";

const store = createStore(testReducer);

export default store;