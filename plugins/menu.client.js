export default ({ app, store }) => {
  // For mobile navigation when clicking on a menu link
  app.router.afterEach(() => {
    if (store.state.menu.opened) {
      setTimeout(() => store.dispatch('menu/close'), 10)
    }
  })
}
