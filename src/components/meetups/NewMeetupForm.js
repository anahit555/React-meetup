import { useRef } from "react";
import Card from "../ui/Card";
import "./NewMeetupForm.scss";

function Form(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandle(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };
  
  return (
    <Card>
      <form className="form" onSubmit={submitHandle}>
        <div className="control">
          <label htmlFor="title">
            Meetup Title
            <input type="text" required id="title" ref={titleInputRef} />
          </label>
          <label htmlFor="title">
            Meetup image
            <input type="url" required id="url" ref={imageInputRef} />
          </label>
          <label htmlFor="title">
            Address
            <input type="text" required id="address" ref={addressInputRef} />
          </label>
          <label htmlFor="title">
            Description
            <textarea
              required
              rows="5"
              id="title"
              ref={descriptionInputRef}
            ></textarea>
          </label>
          <div className="action">
            <button className="btn">
              Add Meetup
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default Form;
