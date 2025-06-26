import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg'; // Using the same hero image as in the Hero component
import aboutHeroImage from '../assets/images/about-hero.jpg'; // Import the about hero image

// Import team member images (will be undefined if files don't exist)
const jamesImg = () => {
  try {
    return require('../assets/images/team/james.jpg');
  } catch (e) {
    return null;
  }
};

const aliImg = () => {
  try {
    return require('../assets/images/team/ali.jpg');
  } catch (e) {
    return null;
  }
};

const collinsImg = () => {
  try {
    return require('../assets/images/team/collins.jpg');
  } catch (e) {
    return null;
  }
};

const teamMembers = [
  {
    id: 1,
    name: 'James Nganga',
    role: 'Founder & CEO',
    bio: 'With over 20 years in agribusiness, James leads our vision for sustainable and transformative farming in Kenya.',
    image: jamesImg(),
    initials: 'JN'
  },
  {
    id: 2,
    name: 'Mr. Ali',
    role: 'Head of Operations',
    bio: 'Mr. Ali oversees our day-to-day operations with a focus on process efficiency and top-tier service delivery.',
    image: aliImg(),
    initials: 'MA'
  },
  {
    id: 3,
    name: 'Collins Caretakers',
    role: 'Lead Agronomist',
    bio: 'Collins brings deep expertise in crop science and sustainable farming, helping clients improve yields through smart agronomic practices.',
    image: collinsImg(),
    initials: 'CC'
  }
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Text Overlay */}
      <div className="relative w-full">
        <div className="h-80 sm:h-[500px] w-full">
          <img
            src={aboutHeroImage}
            alt="Jace Farms - About Us"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center',
              imageRendering: 'auto',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl">
                <span className="block">About Jace Farms</span>
                <span className="block text-green-200 text-2xl sm:text-3xl md:text-4xl mt-2">Our Story & Mission</span>
              </h1>
              <p className="mt-3 text-sm text-green-100 sm:text-base sm:max-w-xl sm:mx-auto md:text-lg">
                Empowering farmers and transforming agriculture in Kenya since 2006.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section - Reduced top padding to account for hero */}
      <div className="bg-white pt-8 pb-16 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              <p className="mb-6">
                We are a dynamic agricultural consultancy firm dedicated to enhancing farm productivity and profitability through expert agronomic support, feed production, and poultry-rearing enterprises.
              </p>
              <p>
                With a mission to empower farmers with innovative solutions and sustainable practices, we provide comprehensive services that cater to the diverse needs of the agricultural sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Founded in 2006, Jace Farms & Consultancy Services Ltd began as a small family-owned farm in Egerton, Kenya. What started as a passion project has grown into a leading agribusiness and consultancy firm, serving hundreds of farmers across the country.
                </p>
                <p className="text-lg">
                  Over the past 17+ years, we've expanded our services to include poultry farming, crop production, and agricultural consultancy, always staying true to our commitment to sustainability and innovation.
                </p>
                <p className="text-lg">
                  Today, we're proud to have helped over 800 farmers improve their yields, increase profitability, and implement sustainable farming practices that benefit both their families and the environment.
                </p>
              </div>
            </div>
            <div className="mt-12 -mx-4 relative lg:mt-0 h-96">
              <div 
                className="relative mx-auto rounded-lg shadow-xl w-full h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="About Jace Farms"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Purpose</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mission, Vision & Values
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Guiding principles that drive our commitment to agricultural excellence.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Mission */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-base text-gray-500">
                    To be the leading agricultural consultancy firm that transforms farms into sustainable and profitable enterprises through innovative solutions and comprehensive support.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
                  <p className="mt-2 text-base text-gray-500">
                    To empower farmers by providing expert agronomic advice, high-quality feeds, poultry & products, and training in sustainable poultry management practices, ensuring optimal productivity and profitability.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Values</h3>
                  <ul className="mt-2 text-base text-gray-500 space-y-1">
                    <li>• <span className="font-medium">Sustainability:</span> Environmentally responsible practices</li>
                    <li>• <span className="font-medium">Innovation:</span> Cutting-edge agricultural solutions</li>
                    <li>• <span className="font-medium">Integrity:</span> Honest and ethical business</li>
                    <li>• <span className="font-medium">Collaboration:</span> Strong partnerships for growth</li>
                    <li>• <span className="font-medium">Excellence:</span> Uncompromising quality in all we do</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team of experienced professionals is dedicated to agricultural excellence.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6 flex flex-col items-center">
                      <div className="relative">
                        {member.image ? (
                          <>
                            <img
                              className="h-24 w-24 rounded-full object-cover border-2 border-green-500"
                              src={member.image}
                              alt={member.name}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                const fallback = e.target.nextElementSibling;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-2xl absolute top-0 left-0 hidden">
                              {member.initials}
                            </div>
                          </>
                        ) : (
                          <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-2xl">
                            {member.initials}
                          </div>
                        )}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">{member.name}</h3>
                      <p className="mt-1 text-base text-green-600 text-center">{member.role}</p>
                      <p className="mt-3 text-base text-gray-500 text-center">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to work with us?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            Join hundreds of farmers who trust Jace Farms for their agricultural needs.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Get in touch
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 bg-opacity-60 hover:bg-opacity-70"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
