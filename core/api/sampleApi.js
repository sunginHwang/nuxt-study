import axios from 'axios';

const jsonUrl = 'https://jsonplaceholder.typicode.com';

export const getSampleJson = (id) => {
  return axios.get(`${jsonUrl}/todos/${id}`)
}
