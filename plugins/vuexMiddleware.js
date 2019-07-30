export default store => {

  store.subscribe((mutation) => {
    const isPromise = mutation.payload && mutation.payload instanceof Promise;

    if (!isPromise) {
      return
    }

    const successMutation = `${mutation.type}_SUCCESS`;
    const failureMutation = `${mutation.type}_FAILURE`;

    mutation.payload.then((res) => {
      const existSuccessMutation = store._mutations[successMutation] !== undefined;

      if (existSuccessMutation) {
        store.commit(successMutation, res)
      }

    }).catch((e) => {
      const existFailureMutation = store._mutations[failureMutation] !== undefined;

      //something auth check && show error modal
      existFailureMutation ? store.commit(failureMutation, e) : console.log(e);

    })
  })
}

