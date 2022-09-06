import {LOADING,ALERT_ERROR,ALERT_SUCCESS,ALERT_CLOSE,Alert_WARRING} from "../_action/action-type";

const initialState = {
  isAlert: false,
  message: null,
  loading: false,
  variant: "warring",
  anchorOrigin: {
  vertical: "top",
  horizontal: "right"
  }
};

const alertReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.value,
        success: false,
        error: false
      };
    case Alert_WARRING:
      return {
        ...state,
          loading: false,
          success: false,
          isAlert: true,
          warring: true,
          message: action.error,
          variant: "warring"
      }
    case ALERT_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        isAlert: true,
        message: action.error,
        variant: "error"
      };
    case ALERT_CLOSE:
      return {
        ...state,
        loading: false,
        success: false,
        isAlert: false
      };
    case ALERT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAlert: true,
        variant: "success",
        message: action.success
      };
    default:
      return state;
  }
};

export default alertReducers;
