import axios from 'axios';

const apiCall = axios.create();

apiCall.interceptors.response.use((response) => {
  return response;
}, (error) => {

  if (error.response.status === 401) {
    console.log('logout.... UnAuth');
    //TODO 오픈시점에는 NODE_ENV 환경별 설정으로 변경할 것(로그인 정보 없을시 처리가 아직 기획 확정이 아니라..).
    window.location.href = '/auth/login';
  }

  if (error.response.status === 403) {
    console.log('logout.... Forbidden');
    //TODO 오픈시점에는 NODE_ENV 환경별 설정으로 변경할 것(로그인 정보 없을시 처리가 아직 기획 확정이 아니라..).
    window.location.href = '/auth/login';
  }

  return Promise.reject(error.response);
});

export default apiCall;
