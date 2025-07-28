import { Link } from 'react-router-dom';
import PictureWithFallback from '../components/ui/PictureWithFallback';
import heroImage from '../assets/images/heroes/about-hero.webp';
import storyImage from '../assets/images/webp/hero.webp';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'James Nganga',
    role: 'Director',
    bio: 'James Nganga is the Founder and Director of Jace Farms and Consultancy Services. James leads the company\'s strategic direction and operations across poultry farming, animal feed sales, and farm consultancy.',
    image: '/images/team/james-nganga.jpg',
    keyRoles: [
      'Strategic Leadership',
      'Business Oversight',
      'Client Relations',
      'Team Management',
      'Quality & Compliance'
    ]
  },
  {
    id: 2,
    name: 'Cecilia Mumbi',
    role: 'Operations Manager',
    bio: 'Cecilia Mumbi holds a Bachelor\'s degree in Business Management and is passionate about entrepreneurship and programming. She ensures day-to-day operations align with the company\'s goals.',
    image: '/images/team/cecilia-mumbi (copy 1).jpg',
    keyRoles: [
      'Process Management',
      'Customer Service Coordination',
      'Inventory & Logistics Oversight',
      'Team Supervision',
      'System Improvement'
    ]
  },
  {
    id: 3,
    name: 'Gideon Mwangi',
    role: 'Marketing and Training Coordinator',
    bio: 'Gideon Mwangi serves as the Marketing and Training Coordinator at Jace Farms and Consultancy Service Ltd, where he plays a pivotal role in developing and delivering impactful farmer training programs while leading strategic marketing efforts. His passion lies in empowering farmers economically by helping them turn their farms into profitable and resilient ventures. Gideon ensures that every training session is practical, relevant, and tailored to meet the evolving needs of smallholder farmers. He leads outreach efforts to connect with farming communities, development partners, and agro-based institutions, committed to helping farmers achieve real growth and long-term success through knowledge and implementation support.',
    image: '/images/team/gideon-mwangi.jpg',
    keyRoles: [
      'Farmer Training & Capacity Building',
      'Marketing and Outreach',
      'Farmer Support & Advisory Services',
      'Program Coordination & Reporting'
    ]
  }
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Text Overlay */}
      <div className="relative w-full bg-gray-900">
        <div className="relative h-80 sm:h-[500px] w-full">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <PictureWithFallback
            src={heroImage}
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
            fallbackType="webp"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                About Jace Farms
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
                Leading the way in sustainable agriculture and innovative farming solutions in Kenya
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Get in Touch
                </Link>
              </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-3 text-xl text-green-600">
              From a Feed Store to a Model of Agricultural Innovation
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 w-full">
              <PictureWithFallback
                src={storyImage}
                alt="Jace Farms - Our Story"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center center',
                  imageRendering: 'auto',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
                loading="eager"
                fallbackType="webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold">Our Journey in Agriculture</h3>
                <p className="mt-2 text-green-200">Transforming farming through innovation and education</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 lg:p-12">
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <p>
                Jace Farms and Consultancy Service Ltd started its journey in February 2023 under the name Jace Feed Store, located in Maili Nne, Nyandarua County. The mission was clear: to provide quality and affordable animal feeds to small-scale farmers rearing poultry, cattle, and pigs.
              </p>
              <p>
                However, it soon became evident that feeds alone could not address the wider challenges farmers were facing. Many of our clients lacked access to practical agricultural advice and technical support. In response, we introduced extension services, conducting farm visits and offering personalized agronomic support.
              </p>
              <p>
                This natural progression led to the evolution of our enterprise into Jace Farms and Consultancy Service Ltd, officially registered as a limited company in January 2024.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10">Expanding Reach through Farmer Training</h3>
              <p>
                As our services gained traction, we attracted partnerships with like-minded organizations. We were contracted to train farmers through various initiatives, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>LEDO Kenya in Lokichoggio, Turkana County</li>
                <li>Compassion International, training caregivers at Manguo and Gatero CYDC centers</li>
              </ul>
              <p>
                Our training focused primarily on poultry production. However, even with knowledge, many farmers still faced barriers to accessing quality chicks, and some suffered losses due to early chick mortality. Moreover, there was a clear gap: farmers needed a practical learning center to bridge the gap between theory and practice.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10">Practical Solutions: Jace Poultry Model Unit</h3>
              <p>
                In June 2024, we established the Jace Poultry Model Unit in Njoro, near Egerton University. This model farm has a capacity of 3,000 chickens and demonstrates the full poultry production cycle—from day-old chick brooding to grower and laying stages.
              </p>
              <p>
                The unit not only serves as a production site but also acts as a training and demonstration center. We welcome farmers from across Kenya to visit, learn, and gain hands-on experience in modern poultry farming practices.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10">Greener Solutions: Jace Green Farm</h3>
              <p>
                As our poultry operations expanded, so did the challenge of managing poultry waste—especially due to the strong ammonia smell and volume of droppings. This led to the creation of Jace Green Farm, an organic vegetable farm that recycles poultry waste into fertilizer.
              </p>
              <p>
                Vegetables grown here support both household use and feed supplementation for our chickens. To enhance sustainability further, we are working on installing a biogas unit to convert poultry waste into renewable energy for chick brooding.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10">Empowering Farmers Across Kenya</h3>
              <p>
                Every two months, we host farmer training sessions that bring together individuals from various regions to build their skills, confidence, and productivity in poultry and sustainable farming.
              </p>
              <p className="text-xl font-medium text-green-700 mt-8">
                At Jace Farms and Consultancy, we believe in farming with purpose—offering products, knowledge, and innovation that help farmers grow sustainably, profitably, and with resilience.
              </p>
              </div>
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

          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="md:flex h-full">
                    <div className="md:flex-shrink-0 md:w-2/5 relative group">
                      <img 
                        className="h-80 w-full object-cover md:h-full" 
                        src={member.image} 
                        alt={`${member.name}, ${member.role}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-green-300 font-medium">{member.role}</p>
                        <div className="mt-2 pt-2 border-t border-green-300/30">
                          <ul className="space-y-1">
                            {member.keyRoles.slice(0, 3).map((role, index) => (
                              <li key={index} className="flex items-center text-white/90 text-sm">
                                <svg className="h-4 w-4 text-green-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:w-3/5">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed">
                            {member.bio}
                          </p>
                          <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-2">
                              {member.keyRoles.map((role, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-700">{role}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                              <span className="sr-only">Twitter</span>
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
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
