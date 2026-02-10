import { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle, Video, BookOpen, Award } from 'lucide-react';

function App() {
  const [showAssistance, setShowAssistance] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-red-700 to-red-900 text-white py-8 shadow-2xl animate-fadeIn">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-16 h-16 mr-4 animate-bounce" />
            <h1 className="text-5xl font-bold tracking-tight">LG CIC</h1>
          </div>
          <p className="text-center text-xl text-red-100 animate-slideUp">
            Welcome to LG Customer Interaction Center Training Program
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 animate-fadeIn">
          <div className="flex items-center mb-6">
            <BookOpen className="w-10 h-10 text-red-700 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Trainer Information</h2>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-gray-50 p-6 rounded-xl border-l-4 border-red-700">
            <p className="text-xl font-semibold text-gray-800 mb-2">Trainer Name: <span className="text-red-700">XXXX</span></p>
            <p className="text-gray-600 mb-1">Designation: Senior Training Specialist</p>
            <p className="text-gray-600">Expert in customer service excellence and technical product training with 10+ years of experience at LG CIC</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 animate-fadeIn delay-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Training Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-red-700 mb-2 text-lg">Duration</h3>
              <p className="text-gray-700">3 Days Classroom + OJT</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-red-700 mb-2 text-lg">Objectives</h3>
              <p className="text-gray-700">Master customer service & product knowledge</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-red-700 mb-2 text-lg">Outcome</h3>
              <p className="text-gray-700">Certified LG CIC Representative</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 animate-fadeIn delay-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Need Assistance?</h2>
            <HelpCircle className="w-8 h-8 text-red-700 animate-pulse" />
          </div>
          <button
            onClick={() => setShowAssistance(!showAssistance)}
            className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {showAssistance ? 'Hide Contact Info' : 'Get Help Now'}
          </button>
          {showAssistance && (
            <div className="mt-6 bg-gradient-to-r from-red-50 to-gray-50 p-6 rounded-xl border-l-4 border-red-700 animate-slideDown">
              <p className="text-gray-800 mb-2"><strong>Training Coordinator:</strong> +91-XXXX-XXXX</p>
              <p className="text-gray-800 mb-2"><strong>Email:</strong> training@lgcic.com</p>
              <p className="text-gray-800"><strong>Available:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>
            </div>
          )}
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 animate-fadeIn delay-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Points</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Be attentive and focused during sessions',
              'Follow all instructions carefully',
              'Maintain discipline and professionalism',
              'Active participation is mandatory',
              'Complete all assignments on time',
              'Respect your peers and trainer'
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-red-50 to-gray-50 rounded-lg hover:shadow-md transition-all duration-300 animate-slideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn delay-400">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Training Modules</h2>

          {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
            <div key={day} className="mb-4">
              <button
                onClick={() => toggleDropdown(day)}
                className="w-full flex justify-between items-center bg-gradient-to-r from-red-700 to-red-900 text-white p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span className="font-bold text-lg">{day}: {
                  index === 0 ? 'Introduction to LG CIC & Customer Service Fundamentals' :
                  index === 1 ? 'Product Knowledge & Technical Training' :
                  'Advanced Communication & Problem Solving'
                }</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openDropdown === day ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === day && (
                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 mt-2 rounded-xl border-l-4 border-red-700 animate-slideDown">
                  <ul className="space-y-3 mb-4">
                    {index === 0 && (
                      <>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> LG Company Overview & Values</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Customer Service Excellence Principles</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Communication Skills & Etiquette</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Call Handling Procedures</li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> LG Product Portfolio Overview</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Technical Specifications & Features</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Troubleshooting Common Issues</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Warranty & Service Policies</li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Handling Difficult Customers</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Conflict Resolution Strategies</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Advanced Problem Solving</li>
                        <li className="flex items-start"><span className="text-red-700 mr-2">•</span> Final Assessment & Certification</li>
                      </>
                    )}
                  </ul>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-center mb-3">
                      <Video className="w-5 h-5 text-red-700 mr-2" />
                      <span className="font-semibold text-gray-800">Training Video</span>
                    </div>
                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                      <p className="text-gray-600">[Video Player - {day} Training Content]</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 animate-fadeIn delay-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">On-the-Job Training (OJT)</h2>

          {['Phase 1', 'Phase 2'].map((phase) => (
            <div key={phase} className="mb-4">
              <button
                onClick={() => toggleDropdown(`OJT-${phase}`)}
                className="w-full flex justify-between items-center bg-gradient-to-r from-gray-700 to-gray-900 text-white p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span className="font-bold text-lg">OJT - {phase}: {
                  phase === 'Phase 1' ? 'Supervised Call Handling (Week 1-2)' :
                  'Independent Operations (Week 3-4)'
                }</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openDropdown === `OJT-${phase}` ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === `OJT-${phase}` && (
                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 mt-2 rounded-xl border-l-4 border-gray-700 animate-slideDown">
                  <ul className="space-y-3">
                    {phase === 'Phase 1' ? (
                      <>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Shadow experienced agents during live calls</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Handle calls with supervisor monitoring</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Practice documentation and case logging</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Daily feedback sessions and performance review</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Minimum 50 supervised interactions required</li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Handle customer calls independently</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Escalation management and decision making</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Meet quality and performance metrics</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Weekly assessment and coaching sessions</li>
                        <li className="flex items-start"><span className="text-gray-700 mr-2">•</span> Final certification upon successful completion</li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gradient-to-r from-red-900 to-red-700 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">LG Customer Interaction Center</p>
          <p className="text-red-200">Excellence in Every Interaction</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}

export default App;
