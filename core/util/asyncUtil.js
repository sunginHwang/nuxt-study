import axios from 'axios'

const asyncCall = (store, url, mutationTypes) => {
  store.commit(mutationTypes.PENDING)
  axios(url)
    .then(response => {
      store.commit(mutationTypes.SUCCESS, response.data)
    })
    .catch(error => {
      store.commit(mutationTypes.FAILURE, error)
    })
}
export default asyncCall;
