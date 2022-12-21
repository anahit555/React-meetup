import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate} from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch("https://reacr-meetup-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section className="section">
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}



export default NewMeetup ;
