import Link from 'next/link'
import style from './layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <div className={style.navbar}>
        <Link href="/"><a className={style.navlink}>Choose a House&nbsp;&nbsp;</a></Link>
        {/* <Link href="/about"><a className={style.navlink}>&nbsp;&nbsp;About</a></Link> */}
      </div>
      <div className={style.body}>
        {children}
      </div>

    </div>
  )
}

export default Layout