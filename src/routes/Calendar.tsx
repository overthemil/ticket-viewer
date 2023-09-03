import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const events = [
  {
    title: "John Doe leave",
    start: "2023-09-04T08:00:00",
    end: "2023-09-08T18:00:00",
    color: "#0369a1",
  },
  {
    title: "General Meeting",
    start: "2023-09-06T08:00:00",
    end: "2023-09-06T10:00:00",
    color: "#be123c",
  },
  {
    title: "Jane Doe IO1-2",
    start: "2023-09-07T08:00:00",
    end: "2023-09-08T18:00:00",
    color: "#0369a1",
  },
  {
    title: "Keyser Soze Riverfire",
    start: "2023-09-04T08:00:00",
    end: "2023-09-05T18:00:00",
    color: "#9a3412",
  }
];

function Calendar() {
  return (
    <>
      <div className="mx-auto max-w-[1500px] my-8">
        <FullCalendar
            events={events}
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
        />
      </div>
    </>
  );
};

export default Calendar
