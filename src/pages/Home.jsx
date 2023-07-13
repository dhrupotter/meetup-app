import React, { useState } from "react";
import data from "../db/data.json";
import "../pages/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const meetupData = data.meetups;
  const [eventType, setEventType] = useState("all");
  console.log(meetupData);
  const handleMeetupType = (e) => {
    setEventType(e.target.value);
  };

  const filteredData = meetupData.filter((meetup) => {
    if (eventType === "all") {
      return true;
    } else {
      return meetup.eventType === eventType;
    }
  });

  console.log(eventType, filteredData);

  return (
    <div>
      <div className="header">
        <h1>Meetup Events</h1>
        <select name="eventType" onChange={handleMeetupType}>
          <option value="all">All </option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div>
        <ul className="event-card-list">
          {filteredData.map((meetup) => (
            <>
              <div className="event-card">
                <Link to={`/eventDetails/${meetup.id}`}>
                  <img
                    src={meetup.eventThumbnail}
                    alt={meetup.title}
                    className="eventImage"
                  />
                </Link>
                <div>
                  <p>
                    {meetup.eventStartTime} | {meetup.location}
                  </p>
                  <h3>{meetup.title}</h3>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
