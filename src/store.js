
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const logger = createLogger () 
const middleware = [thunk, logger];  

export const Store = configureStore ({
reducer: rootReducer,
middleware: middleware,
});