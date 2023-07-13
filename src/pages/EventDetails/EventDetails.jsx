import React from "react";
import { useParams } from "react-router-dom";

import data from "../../db/data.json";

const EventDetails = () => {
  const meetupData = data.meetups;
  const { eventId } = useParams();
  const singleEvent = meetupData.find((event) => event.id === eventId);
  return (
    <div>
      <h1>{singleEvent.title}</h1>
    </div>
  );
};

export default EventDetails;
