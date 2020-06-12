import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./services/auth/reducer";
// import usersReducer from "./services/users/reducer";
import { AUTH_LOGOUT } from "./services/auth/constants";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
    auth: authReducer,
    // users: usersReducer,
});

const rootReducer = (state, action) =>
    appReducer(
        // Clear all reducer values when logged out
        action.type === AUTH_LOGOUT
            ? {
                  ...appReducer({}, {}),
              }
            : state,
        action
    );

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
