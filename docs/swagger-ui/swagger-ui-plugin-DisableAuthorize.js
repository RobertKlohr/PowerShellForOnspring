const DisableAuthorizePlugin = function() {
  return {
    wrapComponents: {
      AuthorizeBtn: () => () => null,
      auth-wrapper: () => () => null,
    }
  }
}
