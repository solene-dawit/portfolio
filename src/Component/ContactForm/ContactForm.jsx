import { useState } from "react"; // Only import useState
import './ContactForm.css'
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateWordCount = (message) => {
    const wordCount = message.trim().split(/\s+/).length;
    return wordCount <= 500;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrors({ name: "", email: "", message: "" });

    let formIsValid = true;
    let errorMessages = { ...errors };

    if (!formData.name) {
      formIsValid = false;
      errorMessages.name = "Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formIsValid = false;
      errorMessages.email = "Please enter a valid email address.";
    }

    if (!formData.message) {
      formIsValid = false;
      errorMessages.message = "Message is required.";
    } else if (!validateWordCount(formData.message)) {
      formIsValid = false;
      errorMessages.message = "Message must not exceed 500 words.";
    }

    if (!formIsValid) {
      setErrors(errorMessages);
      return;
    }

    setResult("Sending...");
    const requestBody = new FormData();
    requestBody.append("name", formData.name);
    requestBody.append("email", formData.email);
    requestBody.append("message", formData.message);
    requestBody.append("access_key", "bd2f24e8-3cfa-4059-853c-5d041a405010"); // API key here

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: requestBody,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setResult("");
        }, 3000);
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <div id="contact">
      <div className="contact-section">
      <h1>
        Contact <span>ME</span>
      </h1>
      
        <div className="contact-left">
          <h3>Get In Touch</h3>
          <form onSubmit={onSubmit}>
            {/* Hidden field for the API key */}
            <input
              type="hidden"
              name="access_key"
              value="bd2f24e8-3cfa-4059-853c-5d041a405010"
            />

            <input
              className="input"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              className="textarea"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
          <p className="result">{result}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
