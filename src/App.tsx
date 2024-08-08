import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState<null | string>(null);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState<boolean | string>(false);
  const [firstNameValidate, setFirstNameValidate] = useState<null | boolean>(
    null,
  );
  const [lastNameValidate, setLastNameValidate] = useState<null | boolean>(
    null,
  );
  const [emailValidate, setEmailValidate] = useState<null | boolean | string>(
    null,
  );
  const [queryValidate, setQueryValidate] = useState<null | boolean>(null);
  const [messageValidate, setMessageValidate] = useState<null | boolean>(null);
  const [consentValidate, setConsentValidate] = useState<null | boolean>(null);
  const [status, setStatus] = useState("clean");
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (status == "error") {
      setFirstNameValidate(null);
      setLastNameValidate(null);
      setEmailValidate(null);
      setQueryValidate(null);
      setMessageValidate(null);
      setConsentValidate(null);
      setStatus("pending");
      setSuccess(false);
    }

    if (firstName.length == 0) {
      setFirstNameValidate(false);
      setStatus("error");
    }

    if (lastName.length == 0) {
      setLastNameValidate(false);
      setStatus("error");
    }

    if (email.length == 0) {
      setEmailValidate("This field is required");
      setStatus("error");
    } else if (!email.includes("@") || !email.includes(".com")) {
      setEmailValidate("Please enter a valid email address");
      setStatus("error");
    }

    if (query == null) {
      setQueryValidate(false);
      setStatus("error");
    }

    if (message.length == 0) {
      setMessageValidate(false);
      setStatus("error");
    }

    if (consent == false) {
      setConsentValidate(false);
      setStatus("error");
    }

    if (status == "pending" || status == "clean") {
      setSuccess(true);
    }
  };
  return (
    <div className="app_container">
      <div className="model_container">
        {success == true ? (
          <div className="model">
            <span>
              <img src="/assets/images/icon-success-check.svg" />
              Message Sent!
            </span>
            <span>Thanks for completing the form. We'll be in touch soon!</span>
          </div>
        ) : null}
      </div>
      <div className="form_container">
        <h1>Contact Us</h1>
        <div className="name_field_container">
          <div className="field_container">
            <label>
              First Name <span className="required_color">*</span>
            </label>
            <input
              className={`field ${firstNameValidate == false ? "error_input" : ""}`}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {firstNameValidate == false ? (
              <label className="error_label">This field is required</label>
            ) : null}
          </div>
          <div className="field_container">
            <label>
              Last Name <span className="required_color">*</span>
            </label>
            <input
              className={`field ${lastNameValidate == false ? "error_input" : ""}`}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {lastNameValidate == false ? (
              <label className="error_label">This field is required</label>
            ) : null}
          </div>
        </div>
        <div className="field_container">
          <label>
            Email Address <span className="required_color">*</span>
          </label>
          <input
            className={`field ${emailValidate ? "error_input" : ""}`}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailValidate ? (
            <label className="error_label">{emailValidate}</label>
          ) : null}
        </div>
        <div className="field_container">
          <span>
            Query <span className="required_color">*</span>
          </span>
          <div className="radio_container">
            <div className="field_radio_container">
              <input
                type="radio"
                value="General Enquiry"
                name="radio"
                onChange={(e) => {
                  setQuery(e.target.defaultValue);
                }}
              />

              <div className="field_radio">
                <span className="checkmark"></span>
                <label>General Enquiry</label>
              </div>
            </div>

            <div className="field_radio_container">
              <input
                type="radio"
                value="Support Request"
                name="radio"
                onChange={(e) => {
                  setQuery(e.target.defaultValue);
                }}
              />

              <div className="field_radio">
                <span className="checkmark"></span>
                <label>Support Request</label>
              </div>
            </div>
          </div>
          {queryValidate == false ? (
            <label className="error_label">Please select a query type</label>
          ) : null}
        </div>
        <div className="field_container">
          <label>
            Message <span className="required_color">*</span>
          </label>
          <textarea
            className={`field ${messageValidate == false ? "error_input" : ""}`}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          {messageValidate == false ? (
            <label className="error_label">This field is required</label>
          ) : null}
        </div>
        <div className="field_container">
          <div className="field_container consent_container">
            <input
              type="checkbox"
              onChange={() => {
                setConsent(!consent);
              }}
            />
            <span>
              I consent to being contacted by the team{" "}
              <span className="required_color">*</span>
            </span>
          </div>
          {consentValidate == false ? (
            <label className="error_label">
              To submit this form, please consent to being contacted
            </label>
          ) : null}
        </div>

        <button
          onClick={() => {
            submit();
          }}
        >
          Submit
        </button>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Grace-Rasaily780" target="_blank">
          Grace Rasaily
        </a>
        .
      </div>
    </div>
  );
}

export default App;
