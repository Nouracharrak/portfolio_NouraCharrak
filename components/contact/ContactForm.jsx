import { useState } from "react";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";

function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageSent(false);
    setError(null);
    setLoading(true);

    try {
      // Exemple d'envoi à une API fictive "/api/contact"
      /*
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs),
            });
            if (!response.ok) throw new Error('Erreur lors de l\'envoi');
            */

      // Simulation : attends 1s et succès
      await new Promise((res) => setTimeout(res, 1000));
      setMessageSent(true);
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            value={inputs.name}
            onChange={handleChange}
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
            value={inputs.email}
            onChange={handleChange}
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
            value={inputs.subject}
            onChange={handleChange}
          />
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              value={inputs.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-6">
            <span className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-mauve hover:bg-mauvedark focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <Button
                title="Send Message"
                type="submit"
                aria-label="Send Message"
              />
            </span>
          </div>

          {messageSent && (
            <p className="mt-4 text-green-500 text-center">
              ✅ Thank you, your message has been sent successfully!
            </p>
          )}
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
