/* eslint-disable no-unused-vars */
// 1) GLOBAL ROUTES
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

// 2) USERS ROUTES
const USERS = '/users';
const USER_DETAILS = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

// 3) VIDEO ROUTES
const UPLOAD = '/upload';
const VIDEOS = '/videos';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:edit/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAILS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

module.exports = routes;
