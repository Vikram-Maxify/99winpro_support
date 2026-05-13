
import authReducer from "./reducer/authReducer";

import  userReducer  from "./reducer/userReducer";

const rootReducer = {
  auth: authReducer,
  user:userReducer,
 
};

export default rootReducer;
