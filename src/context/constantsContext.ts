import * as React from 'react'
import navLinks, { NavLink } from '../constants/navLinks'
import pages, { Pages } from '../constants/pages'

interface ContextProps {
  navLinks?: NavLink[]
  pages?: Pages
}
// articles?: any

const context: ContextProps = {
  navLinks,
  pages
}
// articles

const ConstantsContext = React.createContext(context)

export default ConstantsContext
