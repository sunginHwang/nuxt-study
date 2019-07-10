
const asyncCall = async (store, asyncFunc, asyncParam, mutationTypes) => {
  store.commit(mutationTypes.PENDING)
  try {
    const res = await asyncFunc(asyncParam);
    store.commit(mutationTypes.SUCCESS, res.data);
  } catch (e) {
    store.commit(mutationTypes.FAILURE, e)
  }

}
export default asyncCall;
