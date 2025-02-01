import { DrillIcon as Drone, Settings, CheckCircle } from "lucide-react"
import ContactForm from "../components/ContactForm"
import {ReactTyped} from "react-typed"
import who from "../assets/who.png"
import copter from "../assets/copter.png"
import flyingDrone from "../assets/flying-drone.png"
import bgImage from "../assets/bgImage.png"
import course from '../assets/course.jpg'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  const cardArr = [
    {
      title: "World-class Tech Research and Design",
      content: "We collaborate with leading tech giants and leverage the expertise of experienced national and international defense personnel to ensure the timely success of every project.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738411334/person-working-relation-innovation-768x513.jpg_ezxham.png"
    },
    {
      title: "User-driven Design Approach",
      content: "Our expert technical teams, with decades of experience, are dedicated to creating exceptional products through advanced research and development.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738411334/businessman-application-human-digital-business-768x512.jpg_smeucc.png"
    },
    {
      title: "Tech and Defence Collaboration",
      content: "We have a deep understanding of end-user operational needs, allowing us to customize and optimize our products for a diverse range of applications.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738411334/technical-security-threat-intelligence-officer-updating-command-post-databases-768x512.jpg_anykwq.png"
    },

  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{backgroundImage:`url(${bgImage})`}}
      >
      <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      <div className="relative z-10 px-20 py-56">
        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight drop-shadow-lg">
        <span className="text-blue-400">Empowering Innovation with </span> <br />
          <ReactTyped
            strings={["Advanced Drone Tech", "High-Tech Aerial Solutions", "Next-Gen Drone Services"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 font-light drop-shadow-md">
          Unlock the future of aerial technology with our cutting-edge solutions.
        </p>
      </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center mx-auto">
          <div className="flex flex-col w-full md:w-1/3 text-center">
            <img
              loading="lazy"
              src={copter}
            />
            <h2 className="text-2xl font-bold mt-4 mb-4">DRONE SERVICES</h2>
            <p className="mb-4">
              We offer professional drone services for aerial photography, videography, and data collection across
              industries. Our expert pilots deliver high-quality results tailored to your needs, ensuring efficiency and
              precision.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">KNOW MORE</button>
          </div>
          <div className="flex flex-col w-full md:w-1/3 text-center">
            <img
            loading="lazy"
            src={flyingDrone}
            />
            <h2 className="text-2xl font-bold mt-6 mb-4">DRONE TRAINING</h2>
            <p className="mb-4">
              Our DGCA-certified drone pilot training offers expert instruction on safe drone operation, covering all
              essential skills and regulations for certification. Gain hands-on experience and become a proficient,
              industry- ready drone operator.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">KNOW MORE</button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
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
                src={who}
                alt="Drone at sunset"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Things We're Great At Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">A Few Things We're Great At</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We have a team of experienced and enthusiastic engineers, designers and technicians who possess deep
            understanding of drone technology and customer requirements. Our team is expert in:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Drone size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Drone Design and Development</h3>
              <p className="text-gray-700">
                We design, develop and customise drones to meet the specific requirements of our clients and ensure
                optimal performance, durability, and safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Settings size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Drone Integration and Customization</h3>
              <p className="text-gray-700">
                We integrate drones with various payloads, sensors, and softwares providing customized solutions for
                diverse applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Drone Testing and Validation</h3>
              <p className="text-gray-700">
                We conduct rigorous testing and validation procedures to ensure that our drones meet the most stringent
                safety and performance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Course Section */}
      <section className="bg-cover text-gray-100 py-16 px-4"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${course})`}}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join our DGCA Approved Training Course</h2>
          <button className="bg-gray-100 text-blue-600 px-8 py-3 rounded-md hover:bg-gray-300 font-semibold"
          onClick={()=>navigate("/training")}
          >
            Course Details
          </button>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Makes Us Different</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            What sets us apart is our focus on research-driven, cutting-edge technology, providing top-notch services
            and advanced training for industry-leading results.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cardArr.map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={item.src}
                  alt="Feature"
                  className="w-full h-48 object-cover"
                />
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

      {/* Contact Section */}
      <ContactForm />
    </div>
  )
}

export default Home

