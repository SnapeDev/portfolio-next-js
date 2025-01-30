// pages/contact.js
import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Nav />
      <section className="flex flex-col items-center justify-center min-h-screen px-5 py-10 mb-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-600">&#9632;</span> Get in touch
            <br />
            <span className="block text-black">with me</span>
          </h1>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
