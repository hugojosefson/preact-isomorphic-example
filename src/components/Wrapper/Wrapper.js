import { h } from 'preact'

import withStyles from '../../lib/withStyles'

import s from './Wrapper.less'

const Wrapper = ({ children }) => (
  <div class={ s.root }>
    { children }
  </div>
)

export default withStyles(s)(Wrapper)
