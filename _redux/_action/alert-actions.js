import {ALERT_ERROR,ALERT_SUCCESS,LOADING,ALERT_CLOSE,Alert_WARRING} from "./action-type";

export const alertError = error => {
  const type = ALERT_ERROR;
  return { type, error };
};
export const pageLoading = (value) => {
  const type = LOADING;
  return { type,value };
};
export const alertSuccess = success => {
  const type = ALERT_SUCCESS;
  return {
    type,
    success
  };
};
export const alertWarring = warring => {
  const type = Alert_WARRING;
  return {
    type,
    warring
  };
};
//
export const alertClose = success => {
  const type = ALERT_CLOSE;
  return {
    type
  };
};


