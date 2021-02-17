import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import style from './index.module.css'

function Home() {
  return (
    <Layout>
      <h1>Choose a House for Reservations</h1>
      <div className={style.houses}>
        <Link
          as="/Beach/calendar"
          href="/[house]/calendar"
          ><a className={style.beach}>
          Beach House
        </a></Link>
        <Link
          as="/Taos/calendar"
          href="/[house]/calendar"
          ><a className={style.taos}>
          Taos Cabin
        </a></Link>
      </div>
    </Layout>
  )
}

export default Home