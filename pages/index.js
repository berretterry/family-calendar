import Layout from '../components/layout';
import Link from 'next/link';

function Home() {
  return (
    <Layout>
      <h1>Choose a House for Reservations</h1>
      <Link as="/Beach/calendar" href="/[house]/calendar">Beach House</Link>
      <Link as="/Taos/calendar" href="/[house]/calendar">Taos Cabin</Link>
    </Layout>
  )
}

export default Home