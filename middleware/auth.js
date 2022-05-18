export default function({ $auth, store, redirect, error }) {
  // if (!store.state.user.id) {
  //   error({
  //     message: 'You are not connected',
  //     statusCode: 403
  //     // text: store.state.user
  //   })
  //   return redirect('/')
  // }
  if ($auth.islogging === false) {
    error({
      message: 'You are not connected',
      statusCode: 403
      // text: store.state.user
    })
    return redirect('/')
  }
  if ($auth.$auth.hasScope('admin') === false) {
    error({
      message: 'You are not allowed',
      statusCode: 403
      // text: store.state.user
    })
    return redirect('/')
  }
}
