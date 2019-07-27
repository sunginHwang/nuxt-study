export default store => {

  store.subscribe((mutation, state) => {
    const isPromise = mutation.payload && mutation.payload instanceof Promise;

    if (!isPromise) {
      return
    }

    const success = `${mutation.type}_SUCCESS`;
    const failure = `${mutation.type}_FAILURE`;

    mutation.payload.then((res) => {
      const existSuccessMutation = store._mutations[success] !== undefined;

      if(existSuccessMutation){
        store.commit(success, res)
      }

    }).catch((e) => {
      const existFailureMutation = store._mutations[failure] !== undefined;

      //something auth check && show error modal
      existFailureMutation ? store.commit(failure, e) : console.log(e);

    })
  })
}

