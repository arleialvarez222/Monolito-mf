import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AllReducers } from "./reducers";
import { legacy_createStore as createStore } from 'redux'

const config = {
    key: 'persist-key',
    storage
}

const persistStorageReducer = persistReducer(config, AllReducers);
const store = createStore(persistStorageReducer);
const persist = persistStore(store);
export default store;
export { persist }