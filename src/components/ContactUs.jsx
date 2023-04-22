import "./ContactUs.css";

export default function ContactUs(props) {
    return (
      <div class="contact-us">
        <h2 class="getInTouch">{props.getInTouch}</h2>
        <p class="questions">{props.questions}</p>
        <h2 class="contact-Form">{props.contactForm}</h2>
        <div class="contacts">
          <form
            class="contacts-us-form"
            action="https://formspree.io/f/xeqwknnv"
            method="POST"
          >
            <div class="email">
              <p>{props.email}</p>
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>
            <div class="fullName">
              <p>{props.yourName}</p>
              <input
                type="text"
                id="fullName"
                name="_replyto"
                placeholder="Name"
              />
            </div>
            <div class="subject">
              <p>{props.yourSubject}</p>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div class="message">
              <p>{props.yourMessage}</p>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Message"
              />
            </div>
            <button class="submit" value="send">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}
