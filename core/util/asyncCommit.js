import store from '../../store';

const asyncCommit = async (moduleName, asyncMutationType, asyncFunc) => {
  const s = store();

  const existPendingMutation = s._mutations[`${moduleName}/${asyncMutationType.PENDING}`] !== undefined;

  if (existPendingMutation) {
    s.commit(`${moduleName}/${asyncMutationType.PENDING}`, 't')
  }

  try {
    const res = await asyncFunc;
    const existSuccessMutation = s._mutations[`${moduleName}/${asyncMutationType.SUCCESS}`] !== undefined;

    if (existSuccessMutation) {
      s.commit(`${moduleName}/${asyncMutationType.SUCCESS}`, res)
    }
  } catch (e) {
    const existFailureMutation = s._mutations[`${moduleName}/${asyncMutationType.FAILURE}`] !== undefined;

    //something auth check && show error modal
    existFailureMutation ? s.commit(`${moduleName}/${asyncMutationType.FAILURE}`, e) : console.log(e);
  }

}
export default asyncCommit;


