export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4"
        style={{
          backgroundImage: "url('https://news.ua.edu/wp-content/uploads/2025/08/DSZ_4194-1-1-scaled.jpg')"
        }}
      >        
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-6">Calvin Formula Racing</h1>
          <p className="text-xl mb-8">Building Tomorrow's Engineers Through Competition</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-calvin-maroon  px-6 py-3 rounded-lg font-semibold hover:bg-calvin-gold transition">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.greatplacetowork.ca/images/Asset_3.webp" 
                alt="Calvin FSAE Team" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Calvin FSAE</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2023, Calvin FSAE is dedicated to providing students with hands-on engineering 
                experience through the design, build, and testing of a formula-style race car.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our goal this year is to complete building a trial car for driving practice and to grow 
                interest in our club. We're also starting the design process for our competition car, 
                focusing on acquiring crucial components and building our technical expertise.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-calvin-blue p-4 rounded-lg">
                  <h3 className="font-bold text-2xl text-black">2022</h3>
                  <p className="text-sm text-gray-800">Founded</p>
                </div>
                <div className="bg-calvin-red p-4 rounded-lg bg-opacity-10">
                  <h3 className="font-bold text-2xl text-black">18</h3>
                  <p className="text-sm text-gray-800">Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-calvin-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Engineering</h3>
              <p className="text-gray-600">
                Students collaborate on CAD design, simulation, and engineering analysis 
                to create competitive race car components.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build & Manufacturing</h3>
              <p className="text-gray-600">
                Hands-on experience with machining, welding, composites, and assembly 
                to bring designs to life.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Test & Compete</h3>
              <p className="text-gray-600">
                Test our vehicles through rigorous validation and prepare for 
                Formula SAE competition events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Trial Car Development</h3>
              <p className="mb-4">
                Building our first functional vehicle to gain experience and test our systems 
                before competing.
              </p>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="text-sm font-semibold">Status: In Progress</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Competition Car Design</h3>
              <p className="mb-4">
                Initial design phase for our future competition vehicle, focusing on 
                component research and procurement.
              </p>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="text-sm font-semibold">Status: Planning Phase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Calvin Formula Racing</h2>
          <p className="text-xl mb-8 text-gray-300">
            Be part of building something amazing. No experience required – just passion for learning!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
              Contact Us
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold transition">
              View Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
