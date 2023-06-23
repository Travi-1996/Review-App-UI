export class AppConsts {
  static get API_BASE_URL() {
    return "http://ravi-vino.me:3000/api"
  }
  static get LOGIN_API_URL() {
    return `${AppConsts.API_BASE_URL}/users/login`;
  }
  static get USER_INFO() {
    return "RV-user-info";
  }
  static get USER_DETAIL_INFO() {
    return `${AppConsts.API_BASE_URL}/users`;
  }
}