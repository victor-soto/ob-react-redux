import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import { rootReducer } from "../reducers/rootReducer"
import { watcherSaga } from "../sagas/sagas"

export const createAppStore = () => {
  return configureStore({ reducer: rootReducer });
};

export const createAsyncAppStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  let store = configureStore({
    reducer: rootReducer,
    middleware: (middleware) => middleware().concat(sagaMiddleware) 
    // middleware: () => compose(sagaMiddleware)
})
  sagaMiddleware.run(watcherSaga)
  return store
}
