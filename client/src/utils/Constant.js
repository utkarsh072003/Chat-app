// Base URL of your deployed backend
export const HOST = "https://chat-app-1-946a.onrender.com";

// Auth Routes
export const SIGNUP_ROUTE = `${HOST}/api/auth/signup`;
export const LOGIN_ROUTE = `${HOST}/api/auth/login`;
export const GET_USR_INFO = `${HOST}/api/auth/user-info`;
export const UPDATE_PROFILE_ROUTE = `${HOST}/api/auth/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE = `${HOST}/api/auth/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${HOST}/api/auth/remove-profile-image`;
export const LOGOUT_ROUTE = `${HOST}/api/auth/logout`;

// Contact Routes
export const SEARCH_CONTACTS_ROUTES = `${HOST}/api/contacts/search`;
export const GET_DM_CONTACTS_ROUTES = `${HOST}/api/contacts/get-contacts-for-dm`;
export const GET_ALL_CONTACTS_ROUTES = `${HOST}/api/contacts/get-all-contacts`;

// Message Routes
export const GET_ALL_MESSAGES_ROUTE = `${HOST}/api/messages/get-messages`;
export const UPLOAD_FILE_ROUTE = `${HOST}/api/messages/upload-file`;

// Channel Routes
export const CREATE_CHANNEL_ROUTE = `${HOST}/api/channel/create-channel`;
export const GET_USER_CHANNELS_ROUTE = `${HOST}/api/channel/get-user-channels`;
export const GET_CHANNEL_MESSAGES = `${HOST}/api/channel/get-channel-messages`;
