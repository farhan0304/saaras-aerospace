import { Lightbulb, Shield, Users, Handshake, Award } from "lucide-react"

const AboutUs = () => {
  const whyArr= [
    {
      title: "Specialized Drones",
      content: "We specialize in the development of kamikaze drones, loitering munitions, anti-tank drone, etc.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738429934/white-drone-hovering-bright-blue-sky-scaled_tn4cch.jpg"
    },
    {
      title: "Navigation and Communication Systems",
      content: "We are also engaged in the development of cutting-edge navigation and communication systems for soldiers.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738429957/defocused-map-with-pinpoints-scaled_puflrv.jpg"
    },
    {
      title: "Government Partnerships",
      content: "We work closely with government bodies, including Ordnance Factories, Defence Public Sector Undertakings (DPSUs)",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738429986/corporate-business-handshake-partners-scaled_fnsola.jpg"
    },
    {
      title: "Collaborations with Armed Forces",
      content: "We have conducted successful trials and collaborations with elite units such as Para SF and other armed forces",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738430001/cropped-diverse-army-officers-examining-real-time-data-hologram_edliyn.jpg"
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3)",
        }}
      >
        <h1 className="text-5xl font-bold text-gray-100">About Us</h1>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700">
                We, SAARAS Aerospace, are a drone manufacturing & development company dedicated to revolutionizing the
                drone industry with innovative and cutting-edge solutions. Our mission is to empower business houses,
                governments and individuals with the power of drones and enabling them to achieve high levels of
                efficiency, productivity, safety and saving their time, energy, efforts and finances.
              </p>
              <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                KNOW MORE
              </button>
            </div>
            <div className="relative h-[300px]">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738429879/qtq70fmfjpeg-3_amquqf.jpg"
                alt="Drone at sunset"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">What We Envision</h2>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to innovate new technologies catering the need of every stake holder and become the
                leading drone manufacturing company globally with our exceptional quality, reliability, continuous
                technology improvement & innovation, collaboration & co-operation and focusing on customer-centric
                approach.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738429909/standard-quality-control-concept-m_y5hqkz.jpg"
                alt="Drone Vision"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Values We Follow</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At SAARAS Aerospace, we are guided by a set of core values that shape our culture and drive our success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Innovation",
                content: "We embrace innovation, encourage creativity and experiments to stay ahead of the curve.",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Quality",
                content:
                  "We are committed to deliver exceptional quality and ensure that our drones meet the highest standards of performance, safety, and reliability.",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Customer Focused",
                content:
                  "We prioritize customer satisfaction by providing personalized support and tailored solutions to meet their specific requirements.",
              },
              {
                icon: <Handshake className="w-12 h-12" />,
                title: "Collaboration",
                content:
                  "We foster a culture of collaboration by working closely with our clients, partners and stakeholders to achieve the desired goals.",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Integrity",
                content:
                  "We operate with full dedication, transparency and integrity thus uphold the highest ethical standards in all our activities.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-700 text-center">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer unmatched expertise, cutting-edge technology, and commitment to delivering tailored, high-quality
              solutions that meet your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyArr.map((item,index) => (
              <div
                key={index+10}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Feature ${index}`}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

