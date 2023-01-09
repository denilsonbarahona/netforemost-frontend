import noteReducer from "../entities/notes/application/thunk";
import notificationReducer from "../entities/notification/application/action";

const rootReducers = {
  note: noteReducer,
  notification: notificationReducer,
};

export default rootReducers;
