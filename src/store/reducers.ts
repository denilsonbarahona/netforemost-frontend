import noteReducer from "../entities/notes/application/thunk";
import notificationReducer from "../entities/notification/application/action";
import globalReducer from "../entities/global-actions/application/action";

const rootReducers = {
  note: noteReducer,
  notification: notificationReducer,
  global: globalReducer,
};

export default rootReducers;
