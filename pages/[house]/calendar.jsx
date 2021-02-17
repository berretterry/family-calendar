import Layout from '../../components/layout'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// useEffect (() => {
//   const calendar = dynamic(() => import('@fullcalendar/react'))
//   const dayGrid = dynamic(() => import('@fullcalendar/daygrid'))
//   const timeGrid = dynamic(() => import('@fullcalendar/timegrid'))

// })

handleDateClick = (d) => {
  alert(d, 'Date Clicked')
}

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      nowIndicator={true}
      editable={true}
      dateClick={handleDateClick(d)}
      />
  )

}

function CalendarPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.house} Calendar</h1>
      <Calendar />
    </Layout>
  )
}

export default CalendarPage