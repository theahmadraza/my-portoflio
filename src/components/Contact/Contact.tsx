import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
// import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Ask me about anything, I am happy to help;.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:csmirza11@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:csmirza11@gmail.com">csmirza11@gmail.com</a>
        </div>
        <div>
          <a href="tel:+923130004271">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+923130004271">(+92) 3130004271</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  );
}
