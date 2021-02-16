import Layout from '../../components/layout'
import {useRouter} from 'next/router'

function Calendar() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.house} Calendar</h1>
    </Layout>
  )
}

export default Calendar