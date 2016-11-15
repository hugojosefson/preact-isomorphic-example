import { h } from 'preact'

export default {
  path: '/',
  async action () {
    const Home = await new Promise(resolve => {
      require.ensure([], require => resolve(require('./Home').default), 'home')
    })

    return {
      title: 'Home',
      chunk: 'home',
      component: <Home />
    }
  }
}
