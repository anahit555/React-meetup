import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
//     address: "POLAND, KRAKOW",
//     description:
//       "Kraków is the second-largest and one of the oldest cities in Poland. ",
//   },
//   {
//     id: "m2",
//     title: "This is a first meetup",
//     image:
//       "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
//     address: "POLAND, KRAKOW",
//     description:
//       "Kraków is the second-largest and one of the oldest cities in Poland. ",
//   },
// ];
function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://reacr-meetup-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, [setIsLoading, setLoadedMeetups]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="section">
      <h1>ALL Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
    </section>
  );
}

export default AllMeetup;
