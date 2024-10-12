import React from 'react'
// import EventsAPI from '../services/EventsAPI'

const Events = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        const data = await response.json();
        setEvents(data);
        console.log("data", data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getAllEvents()
  }, []);

  return (
    <div>
      <h3>
        Events
        </h3>
        <div>
          {events && events.length > 0 ?
          events.map((event, index) => {
            <Card 
              id={event.id}
              title={event.title}
              date={event.date}
            />
          }) : <h3 className='noResults'>{'No Events Yet 😞'}</h3>  
        }

        </div>
        </div>
  )
}

export default Events