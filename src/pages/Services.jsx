import { CheckCircle, Camera, Wifi, PlaneTakeoff, BarChart2, Target, Clock, Shield } from "lucide-react"

const Services = () => {
  const cardArr = [
    {
      title: "Security and Law Enforcement",
      content: "Surveillance drones are used for border patrol, search and rescue operations and crime scene investigation.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431078/shot-armenian-military-soldiers-training-dry-field-scaled_hsva9v.jpg"
    },
    {
      title: "Agricultural Support",
      content: "Drones are used for crop monitoring, yield prediction, and precision farming.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431091/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation_mfcmwh.jpg"
    },
    {
      title: "Construction and Infrastructure",
      content: "Drones are used for construction site monitoring, inspection, and surveying.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431102/cropped-construction-work-site_lha53s.jpg"
    },
    {
      title: "Disaster Management",
      content: "Drones are used for disaster management, damage assessment, search and rescue operations and debris removal help. They provide the desired information helping save precious lives and minimise the impact of disaster.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431122/people-marrakesh-city-after-earthquake-scaled_zafajk.jpg"
    },
    {
      title: "Crowd Detection & Management",
      content: "By aerial surveillance of events, gathering and public places drones help the authorities for crowd management, enhanced security and emergency response, thus ensuring public safety and efficient crowd control.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431143/blured-photo-graduates-their-parents-friends-are-waiting-prom-ceremony-outside-scaled_gkntrj.jpg"
    },
    {
      title: "Traffic Monitoring",
      content: "Aerial surveillance drones helps in traffic monitoring by providing data of traffic congestion, accidents and road damage. It helps the authorities to plan road construction, safety and overall infrastructure development.",
      src:"https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431155/people-driving-cars-city-street-scaled_ceauqs.jpg"
    },
  ]
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-800">
            Our drone services provide innovative aerial solutions for a variety of industries, offering high-quality
            photography, videography, and data collection. With expert pilots and state-of-the-art equipment, we deliver
            efficient, precise results for real estate, construction, agriculture, and more.
          </p>
        </div>
      </section>
      {/* Agricultural Spray Drones Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Agricultural Spray Drones</h2>
          <p className="text-xl text-center mb-12">
            Drones have revolutionized agricultural activities by helping farmers manage their crop production and
            progressive farming. One of the most significant drone applications in the field of agriculture is pesticide
            spraying.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738430914/agriculture-man-working-plantation-with-drone-sunset-background-scaled_jd99jm.jpg"
                alt="Agriculture Spray Drone"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Drone-based spraying offers a more efficient, precise, and environmentally friendly alternative to
                traditional methods. A comprehensive overview of the benefits and considerations of using drones for
                agricultural spraying is as under:
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Increased Efficiency",
                    content:
                      "Drones can cover large areas quickly, reducing the time and efforts required for manual spraying. This is specifically more useful for large farming fields and remote areas.",
                  },
                  {
                    icon: <Target className="w-6 h-6 text-blue-500" />,
                    title: "Precision Application",
                    content:
                      "Drones equipped with GPS and sensors can target specific areas, reducing wastage and minimizing the amount of chemicals. It also helps prevent over-spraying, which can harm crops, consumers, and the environment.",
                  },
                  {
                    icon: <BarChart2 className="w-6 h-6 text-purple-500" />,
                    title: "Reduced Chemical Usage",
                    content:
                      "By applying the exact amount of chemicals needed for spraying, drones can help reduce overall chemical usage, making farming more sustainable, economical, and environmentally friendly.",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Improved Crop Health",
                    content:
                      "Drones can detect pests, crop diseases, and nutrient deficiencies, helping farmers take targeted action to prevent damage and promote healthy crop growth.",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Cost Savings",
                    content:
                      "Drone-based spraying reduces labor costs, fuel consumption, and equipment maintenance expenses, making farming more profitable for farmers.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surveillance and Monitoring Drones Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Surveillance and Monitoring Drones</h2>
          <p className="text-xl text-center mb-12">
            Surveillance and monitoring drones have become essential tools for various industrial, security,
            agriculture, construction, and environment monitoring activities.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Our drones are equipped with advanced sensors, high-resolution cameras, and software, enabling them to
                capture high-resolution images, detect different activities, and provide real-time data. A comprehensive
                overview of the benefits and applications of surveillance and monitoring drones manufactured by SAARAS
                is as under:
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Enhanced Civil Security",
                    content:
                      "Our drones can patrol large and remote areas which are not easily accessible to personnel, detect intruders, and alert authorities in the shortest period, making them an effective tool for security agencies.",
                  },
                  {
                    title: "Improved Crop Monitoring",
                    content:
                      "In agriculture fields, drones can monitor crop health, detect pests and diseases & animal intrusion, thus helping the farming community for better output.",
                  },
                ].map((feature, index) => (
                  <div key={index+10} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738430958/aerial-overhead-shot-urban-modern-business-architecture-scaled_jszyiw.jpg"
                alt="Surveillance Drone"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications of Surveillance and Monitoring Drones */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Applications of Surveillance and Monitoring Drones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardArr.map((item,index) => (
              <div
                key={index+20}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  loading="lazy"
                  src={item.src}
                  alt={`Application ${index}`}
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

      {/* Key Features of Our Drones */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features of Our Drones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-blue-500" />,
                title: "High-Resolution Cameras",
                content:
                  "Our drones are equipped with high-resolution cameras that capture detailed images and videos of even small and short things.",
              },
              {
                icon: <Wifi className="w-12 h-12 text-green-500" />,
                title: "Real-Time Data Transmission",
                content: "Our drones can transmit data in real-time, enabling quick decision-making.",
              },
              {
                icon: <PlaneTakeoff className="w-12 h-12 text-purple-500" />,
                title: "Autonomous Flight",
                content: "Drones can fly autonomously by following pre-programmed routes and avoiding obstacles.",
              },
              {
                icon: <BarChart2 className="w-12 h-12 text-red-500" />,
                title: "Data Analytics",
                content:
                  "Our drones are equipped with advanced data analytic software that provides deep insights and recommendations.",
              },
            ].map((feature, index) => (
              <div key={index+30} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nano Drones Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Nano Drones</h2>
          <p className="text-xl text-center mb-12">
            Nano drones, also known as micro drones, are small unmanned aerial vehicles (UAVs) designed for precision
            and versatility in tight spaces for helping government and other organizations to enhance security, safety,
            photography, policing and crime detection and prevention. These are smaller and lighter than other models so
            these can fly through narrow openings. These drones provide situational awareness. These are smaller in size
            have less weight so these are easier to carry anywhere.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431022/cropped-teens-doing-experiments-robotics-laboratory-boy-protective-glasses-guy-vr-headset-scaled-1_kievv8.jpg"
                alt="Nano Drone"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Our Nano drones are equipped with advanced sensing and communication technologies which enable them to
                perform the desired activity. These drones have advanced features like auto hovering, 3D flips,
                therefore, these are useful for beginners as well as kids. These drones can be used for aerial
                photography, surveillance and military activities.
              </p>
              <h3 className="text-2xl font-bold mb-4">Types of Drones</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Drone with AI & ML capabilities (illegal construction detection, face detection, target classification, object tracking and locking etc.",
                  "Tear gas or smoke bomb dropper drones providing efficient dispersal in controlled areas",
                  "Volumetric analysis of area or object with a drone",
                  "Nano drone for room intervention mission",
                  "AI based camouflage detection system",
                ].map((content, index) => (
                  <div key={index+40} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kamikaze Drone Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Kamikaze Drone: A Lethal Aerial Weapon</h2>
          <p className="text-xl text-center mb-12">
            A kamikaze drone, also known as a suicide drone, loitering ammunition, or exploding drone, is a type of
            aerial weapon equipped with a built-in warhead. Unlike missiles, kamikaze drones can occupy an airspace for
            a relatively long period before engaging a target. They are capable of loitering, allowing them to survey an
            area and wait for the perfect moment to strike.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dxb7v9us0/image/upload/v1738431045/cropped-army-soldiers-fighting-with-guns-defending-their-country-scaled-1_maqbnl.jpg"
                alt="Kamikaze Drone"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Kamikaze drones are unmanned aircraft designed to carry out a specific mission, often with deadly
                precision. They are equipped with advanced navigation systems, allowing them to locate and track
                targets. Once a target is identified, the drone can be directed to engage, often with devastating
                consequences.
              </p>
              <h3 className="text-2xl font-bold mb-4">Examples</h3>
              <div className="space-y-4">
                {[
                  "AeroVironment's Switchblade drone is an advanced direct fire loitering missile system with high precision capabilities.",
                  "Russia's KMZ Vizir Sea Drone is a missile-armed kamikaze drone designed to counter Ukrainian lethal unmanned surface vehicles (USVs).",
                  "Ukraine's Stick M12 is a kamikaze drone that pushes the boundaries of long-range warfare.",
                ].map((content, index) => (
                  <div key={index+50} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-6 text-center">Tactical Advantages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-red-500" />,
                content: "High precision capabilities",
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-500" />,
                content: "Ability to loiter and survey an area before engaging a target.",
              },
              {
                icon: <Shield className="w-12 h-12 text-green-500" />,
                content: "Ability to counter swarm drones by directing kamikaze drones towards them.",
              },
            ].map((advantage, index) => (
              <div key={index+60} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <p className="text-gray-700">{advantage.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

