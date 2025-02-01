import { Mail } from "lucide-react"

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between gap-0">
            {/* Left half - How to reach us */}
            <div className="bg-blue-600 p-8 flex flex-col w-full md:w-1/3 justify-center items-center text-gray-50">
              <h2 className="text-xl md:text-2xl font-bold mb-6">How to reach us</h2>
              <Mail className="w-12 h-12 mb-6" />
              <p className="text-center text-md">Reach out to us through the form and we will reach out to you!</p>
            </div>
          <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-1">
            <div className="grid px-8 py-6 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full px-2 py-1 border-b border-gray-800 focus:border-blue-500 focus:ring-0"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-2 py-1 border-b border-gray-800 focus:border-blue-500 focus:ring-0"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-2 py-1 border-b border-gray-800 focus:border-blue-500 focus:ring-0"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-2 py-1 border-b border-gray-800 focus:border-blue-500 focus:ring-0"
                  required
                />
              </div>
            </div>
            <div className="px-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-2 py-1 border-b border-gray-800 focus:border-blue-500 focus:ring-0"
                required
              />
            </div>
            <div className="flex py-4 justify-center">
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

