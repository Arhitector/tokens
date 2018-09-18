export const cityApi = create({
  baseURL: CITY_SERVER,
  headers: getHeaderConfig(localStorage.getItem('jwt-token')),
});
export const logIn = (token, user) => {
  localStorage.setItem('jwt-token', token);
  localStorage.setItem('profile', JSON.stringify(user));
  if (isBlocked() && window.location.pathname !== '/blocked') {
    window.location.href = '/blocked';
  }
  bootIntercom();
};
export const JSON_SERVER = 'JSON_SERVER';
export const logout = () => {
  window.localStorage.removeItem('profile');
  window.localStorage.removeItem('jwt-token');
  window.location = '/';
};