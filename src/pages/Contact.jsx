import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        </div>
      </section>
      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact

