
const asyncCall = async (store, asyncFunc, mutationTypes) => {
  store.commit(mutationTypes.PENDING)
  try {
    const res = await asyncFunc;
    store.commit(mutationTypes.SUCCESS, res.data);
  } catch (e) {
    store.commit(mutationTypes.FAILURE, e)
  }

}
export default asyncCall;
