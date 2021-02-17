import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import Layout from '../components/layout';
import Link from 'next/link';

// export default () => (
//   <FullCalendar
//     plugins={[interactionPlugin, timeGridPlugin]}
//     initialView='timeGridWeek'
//     nowIndicator={true}
//     editable={true}
//     initialEvents={[
//       { title: 'nice event', start: new Date() }
//     ]}
//   />
// )

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