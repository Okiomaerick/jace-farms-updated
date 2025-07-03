import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const PastProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h1>
          <p className="text-xl text-gray-600">
            Transforming Lives in Turkana: Jace Farms' Impact through the Skill Grow Project
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Project Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 mb-6">
                From <span className="font-semibold">February to June 2024</span>, Jace Farms and Consultancy Services Ltd had the privilege of implementing a transformative initiative in Turkana County — the <span className="font-semibold">Skill Grow Project</span>, in partnership with <span className="font-semibold">LEDO</span> and <span className="font-semibold">ECO Hydroponics</span>.
              </p>
              <p className="text-lg text-gray-700">
                This project was more than just training or service delivery; it was about restoring dignity, building resilience, and empowering individuals and families with the skills and tools they need to thrive in a challenging environment.
              </p>
            </div>

            {/* Project Goals */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-700 mb-6">🎯 Project Goals at a Glance</h2>
              <p className="text-gray-700 mb-4">
                The Skill Grow Project was designed to uplift 35 direct beneficiaries by achieving three key objectives:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 pl  -2">
                <li className="mb-3">
                  <span className="font-semibold">Improve Quality of Life</span> – By training 20 individuals in modern farming techniques and 15 in masonry, the project targeted the root causes of poverty and food insecurity.
                </li>
                <li className="mb-3">
                  <span className="font-semibold">Boost Incomes and Livelihood Resilience</span> – By promoting employment and self-employment opportunities, the project aimed to create sustainable sources of income.
                </li>
                <li>
                  <span className="font-semibold">Promote Health and Nutrition</span> – With self-grown food, families could access healthier diets, leading to reduced dependency on medical expenses.
                </li>
              </ol>
            </div>

            {/* Our Contribution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-700 mb-6">👩🏽‍🌾 Our Contribution as Jace Farms</h2>
              <p className="text-gray-700 mb-6">
                At the heart of the project was capacity building and hands-on support. Our team worked directly with the community to provide:
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">• Climate-Smart Agriculture & Poultry Training:</h3>
                  <p className="text-gray-700">
                    We trained 25 parents, 20 teachers, and 5 staff members on best practices in climate-smart agriculture and poultry husbandry. These sessions were practical, localized, and designed to equip trainees with knowledge they could implement immediately.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">• 600 Birds for Sustainable Livelihoods:</h3>
                  <p className="text-gray-700">
                    We supplied, brooded, and reared 600 healthy poultry birds for the LEDO organization, which were distributed to beneficiaries. This initiative offered families a reliable source of food and income.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">• Greening Schools with Hydroponics:</h3>
                  <p className="text-gray-700">
                    In partnership with ECO Hydroponics, we installed a 140-tower hydroponic garden at Hannah Emuriakin Primary School. The towers now supply the school with fresh vegetables year-round, improving nutrition and creating a live learning lab for students.
                  </p>
                </div>
              </div>
            </div>

            {/* Why It Mattered */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-700 mb-4">💡 Why This Project Mattered</h2>
              <p className="text-gray-700 mb-6">
                Turkana is one of Kenya's most vulnerable regions — harsh climate, limited access to education, and persistent food insecurity paint a tough picture. The Skill Grow Project brought hope through practical interventions that could be scaled, replicated, and owned by the community.
              </p>
              <p className="text-gray-700">
                At Jace Farms, we believe in solutions that are sustainable, inclusive, and impactful. The success of this project reaffirms our commitment to empowering communities, especially in arid and semi-arid areas, with tools that drive long-term change.
              </p>
            </div>

            {/* Looking Ahead */}
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">🙌 Looking Ahead</h2>
              <p className="text-gray-700 mb-6">
                As we reflect on the progress made in Turkana, we are inspired to take this model to more counties. The lessons learned, partnerships built, and lives touched continue to motivate us to grow stronger, together.
              </p>
              <p className="text-gray-700 mb-8">
                Stay tuned for more stories from the field. And if you're interested in partnering with us for similar projects, feel free to reach out — together, we can transform agriculture and livelihoods across Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
                >
                  Partner With Us
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors duration-200"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastProjects;
