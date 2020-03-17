import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  AUDIT_TAB_CHANGE,
  CHANGE_TAB,
} from '../constants/actionTypes';

export const defaultState = {
  appName: 'ProjectX',
  token: null,
  viewChangeCounter: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
      };
    case REDIRECT:
      console.log('red', action);
      return { ...state, redirectTo: action.payload };
    case LOGOUT:
    case 'OTP_VERIFICATION':
      return {
        ...state, redirectTo: '/login', token: null, currentUser: null, role: null,
      };
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.token,
        currentUser: action.error ? null : action.payload.data.name,
        role: action.payload.role,
        name: action.payload.name,
      };
    case 'SIGNUP':
      return {
        ...state,
        redirectTo: action.error ? null : `/otp/${action.phone}`,
      };
    case AUDIT_TAB_CHANGE:
      return {
        ...state,
        redirectTo: `/audit/${action.activeTab}`,
      };
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
    case CHANGE_TAB:
      return {
        ...state,
        activeItem: action.activeTab,
      };
    default:
      return state;
  }
};
