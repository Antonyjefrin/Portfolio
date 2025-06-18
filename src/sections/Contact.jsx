import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    thoughts: "",
  });

  const [isLoading, setisLoading] = useState(false)

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setisLoading(true);

  try {
    await emailjs.send("service_qv6g3is", "template_zwmdxin", {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.thoughts
    },"8TVzQRFM9Nn28XT70");

    setisLoading(false);
    alert("Message was sent!");
    setformData({ name: "", email: "", thoughts: "" }); // clear form
  } catch (error) {
    setisLoading(false);
    console.error(error);
    alert("Failed to send message.");
  }
};

//service_439ly68
//template_zwmdxin
  return (
    <section id="contact" className="relative flex  c-space section-spacing">
      <div
        className="flex flex-col 
         max-w-md p-5 mx-auto border border-white/10 rounded-2xl  
         "
      >
        <h1 className="text-heading">Let's Talk</h1>
        <p className="subtext mt-4">
          Weather you are looking to build a new website, improve your existing
          platform, or bring an unique project to life, I'm here to help.
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mt-10">
            <label className="field-label" htmlFor="name">
              FullName
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="entre your name"
              required
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              className="field-input field-input-focus"
            />
          </div>
          <div className="mt-10">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="entre your email"
              required
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="field-input field-input-focus"
            />
          </div>
          <div className="mt-10">
            <label className="field-label" htmlFor="message">
              Message
            </label>
            <textarea
              type="message"
              name="thoughts"
              id="message"
              placeholder="Share your thoughts...."
              required
              value={formData.thoughts}
              onChange={handleChange}
              rows={4}
              autoComplete="thoughts"
              className="field-input field-input-focus"
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 bg-radial  from-lavender to-royal rounded-xl mt-15 hover-animation"
          >
            {!isLoading? "send" : "sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
