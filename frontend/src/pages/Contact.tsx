import { useForm } from "react-hook-form";
import "../assets/sass/contacts.scss";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
  Phone: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    const token = "7655108698:AAGTbJ9SPc3L95Xxe4PM3kZAAdy8KUBZnz4";
    const chat_id = "7632668745";
    const text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.Phone}\nMessage: ${data.message}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: text,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Message sent successfully!");
        } else {
          console.error("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contacts container">
      <div className="contacts__text">
        <h2>WE ARE HERE FOR YOU</h2>
        <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.</p>
      </div>

      <div className="contacts__card">
        <div className="contacts__card__text">
          <h3>497 Evergreen Rd. Roseville, CA 95673</h3>
          <span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.1172126409499!2d72.37577825245562!3d40.754834755323024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcecff1eb4fe6d%3A0x9b79107f9b65fbd5!2sToshkent%20Hotel!5e1!3m2!1sru!2s!4v1731142063857!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </span>
          <a href="tel:+998910044774">Phone: +998 91 0044774</a>
          <a href="#">Email: sibragimov999@gmail.com</a>
        </div>
        <div className="contacts__card__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} required />
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" {...register("email")} required />
            <label htmlFor="Phone">Phone Number</label>
            <input type="text" id="Phone" {...register("Phone")} required />
            <label htmlFor="message">Message</label>
            <textarea id="message" cols={30} rows={10} {...register("message")} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
