import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div>
      <Link as="/" href="/"><a>Choose a House</a></Link>
      <Link href="/about"><a>About</a></Link>
      {children}
    </div>
  )
}

export default Layout