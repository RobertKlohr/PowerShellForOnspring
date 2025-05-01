const DisableAuthorizePlugin = function() {
  return {
    wrapComponents: {
      AuthorizeBtn: () => () => null
    }
  }
}
