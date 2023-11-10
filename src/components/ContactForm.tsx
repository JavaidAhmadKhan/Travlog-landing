const ContactForm = () => {
  const hadleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Form submitted, we will contact you soon!");
  };

  return (
    <div>
      <form onSubmit={hadleFormSubmit} className="px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row  gap-4">
          <input
            type="text"
            required
            className="py-4 px-4 w-full outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            required
            className="py- px-4 w-full outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col lg:flex-row pt-4 pb-4 gap-4">
          <input
            type="email"
            required
            className="py-4 px-4 w-full outline-none"
            placeholder="Enter your email"
          />
          <input
            type="tel"
            required
            className="py-4 px-4 w-full outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        <textarea
          required
          className="py-8 px-4 w-full outline-none"
          placeholder="Enter your message..."
        />
        <div className="flex items-center justify-center md:justify-start lg:justify-start pt-4 pb-4">
          <button
            type="submit"
            className="py-6 pt-6 pb-6 px-12 w-64 bg-[#F85E9F] text-white font-semibold text-[18px] uppercase cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
