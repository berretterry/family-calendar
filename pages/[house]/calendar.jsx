import Layout from '../../components/layout'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Modal from 'react-modal'
import style from './calendar.module.css'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'

  },
  overlay: {
    zIndex: 9999
  }
};

Modal.setAppElement("#__next")

function Calendar() {

  const [modalIsOpen, setModalOpen] = useState(false);
  const [currentDate, setDate] = useState('')

  function handleDateClick(d) {
    setDate(d.dateStr)
    setModalOpen(true)
  }

  function openModal() {
    setModalOpen(true)
  }

  function afterOpenModal() {
    style.color = '#f00'
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div>
      <div className={style.modalcontainer}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={true}
          contentLabel="Schedual a Date"
          >
          <div className={style.popup}>
            <h1>Schedule Date:</h1>
            <div>
              <h2>{currentDate}</h2>
              <button onClick={() => closeModal()}>Okay</button>
            </div>
          </div>
        </Modal>
        </div>
        <div className={style.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          nowIndicator={true}
          editable={true}
          shouldCloseOnOverlayClick={true}
          dateClick={(d) => {handleDateClick(d)}}
          />
      </div>
    </div>
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