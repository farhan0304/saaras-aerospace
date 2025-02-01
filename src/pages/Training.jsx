import { Book, Laptop, Plane as Drone, Award, CheckCircle } from "lucide-react"

const Training = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training</h1>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-800">
            We at SAARAS, provide very effective drone flying training. Please join our comprehensive Remote Pilot
            License training course. This is a DGCA certified course. This course covers all essential aspects of drone
            piloting with theoretical knowledge and hands-on practical experience.
          </p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Curriculum Offers</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg">
                Our <span className="font-bold">DGCA-approved</span> curriculum and syllabus are designed to provide
                comprehensive, industry-standard training for aspiring drone pilots. Covering essential topics like
                airspace regulations, safety protocols, flight techniques, and maintenance, our program ensures
                compliance with DGCA guidelines and prepares students for successful certification and real-world
                operations.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738432170/man-s-hand-holding-drone-outdoors_gh8a8w.jpg"
                alt="Drone Training"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Training Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Book className="w-12 h-12 text-blue-500" />,
                title: "Day 1: Theory class",
                points: [
                  "UAS Rules & Regulations",
                  "Basic Principles of Flight",
                  "ATC Procedures & Radio Telephony",
                  "Weather & Meteorology",
                  "Drone Equipment & Maintenance",
                  "Emergency Handling",
                  "Payload Installation & Utilization",
                  "Image & Video Interpretation",
                ],
              },
              {
                icon: <Laptop className="w-12 h-12 text-green-500" />,
                title: "Day 2: Theory & INITIAL PRACTICALS",
                points: [
                  "Continued theory sessions",
                  "Basic Flight Simulator Sessions",
                  "Advanced Flight Sim Sessions & Sim Check",
                ],
              },
              {
                icon: <Drone className="w-12 h-12 text-purple-500" />,
                title: "Day 3: PRACTICAL FLYING",
                points: [
                  "Assemble your own drone",
                  "Practical flying of your assembled drone",
                  "Introduction to NPNT & Digital Sky Platform",
                  "RPAS familiarization",
                  "Dual flying of RPAS with Instructor",
                  "Solo flying",
                  "Flight logging",
                ],
              },
              {
                icon: <Award className="w-12 h-12 text-red-500" />,
                title: "Day 4 & 5: Advanced Practical Session",
                points: ["Continued solo flying", "Final Skill Test"],
              },
            ].map((schedule, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {schedule.icon}
                  <h3 className="text-xl font-bold ml-4">{schedule.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {schedule.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section
        className="py-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                SAARAS INVITES APPLICATIONS FOR NEW DGCA-CERTIFIED RPAS (DRONE) TRAINING BATCH
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Pre-requisites (For Remote Pilot Certificate Training):
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Min Class 10th Pass from a recognized Board",
                      "Min 18 years of age",
                      "Aadhar Card possession is mandatory",
                      "Secondary ID (Voter ID/ Ration Card/ Drivers License/ Passport)",
                      "Medical Certificate of Fitness",
                    ].map((requirement, index) => (
                      <li key={index+20} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Coming Soon
                  </button>
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738432185/cropped-young-female-inventor-her-workshop-scaled-1_nv82qs.jpg"
                    alt="Drone Training Application"
                    className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Training

