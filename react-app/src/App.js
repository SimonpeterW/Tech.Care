import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Search, Download, MessageSquare, Calendar, User, Users, FileText, DollarSign, MoreHorizontal, Settings, Heart, Thermometer, Wind, Clock, ChevronRight, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for blood pressure history
const bloodPressureData = [
  { month: 'Oct, 2023', systolic: 120, diastolic: 110 },
  { month: 'Nov, 2023', systolic: 115, diastolic: 70 },
  { month: 'Dec, 2023', systolic: 160, diastolic: 110 },
  { month: 'Jan, 2024', systolic: 115, diastolic: 90 },
  { month: 'Feb, 2024', systolic: 145, diastolic: 75 },
  { month: 'Mar, 2024', systolic: 155, diastolic: 80 },
];

// Mock patient data
const patientsData = [
  { id: 1, name: 'Emily Williams', gender: 'Female', age: 18, selected: false },
  { id: 2, name: 'Ryan Johnson', gender: 'Male', age: 45, selected: false },
  { id: 3, name: 'Brandon Mitchell', gender: 'Male', age: 36, selected: false },
  { id: 4, name: 'Jessica Taylor', gender: 'Female', age: 28, selected: true },
  { id: 5, name: 'Samantha Johnson', gender: 'Female', age: 56, selected: false },
  { id: 6, name: 'Ashley Martinez', gender: 'Female', age: 54, selected: false },
  { id: 7, name: 'Olivia Brown', gender: 'Female', age: 32, selected: false },
  { id: 8, name: 'Tyler Davis', gender: 'Male', age: 19, selected: false },
  { id: 9, name: 'Kevin Anderson', gender: 'Male', age: 30, selected: false },
];

// Mock diagnostic data
const diagnosticData = [
  { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
  { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
  { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
];

const App = () => {
  const [selectedPatient, setSelectedPatient] = useState(patientsData.find(p => p.selected));
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#00c8aa" />
                <path d="M15 10L30 25L15 40L0 25L15 10Z" fill="#0074cc" />
              </svg>
            </div>
            <span className="text-xl font-bold">Tech<span className="text-teal-500">.Care</span></span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <button className="px-3 py-2 flex items-center text-gray-600 hover:text-gray-900">
              <span className="mr-2"><User size={18} /></span>
              <span>Overview</span>
            </button>
            <button className="px-3 py-2 flex items-center text-white bg-teal-500 rounded-full hover:bg-teal-600">
              <span className="mr-2"><Users size={18} /></span>
              <span>Patients</span>
            </button>
            <button className="px-3 py-2 flex items-center text-gray-600 hover:text-gray-900">
              <span className="mr-2"><Calendar size={18} /></span>
              <span>Schedule</span>
            </button>
            <button className="px-3 py-2 flex items-center text-gray-600 hover:text-gray-900">
              <span className="mr-2"><MessageSquare size={18} /></span>
              <span>Message</span>
            </button>
            <button className="px-3 py-2 flex items-center text-gray-600 hover:text-gray-900">
              <span className="mr-2"><DollarSign size={18} /></span>
              <span>Transactions</span>
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="/api/placeholder/40/40" className="w-8 h-8 rounded-full" alt="Doctor profile" />
              <div className="ml-2 hidden md:block">
                <div className="text-sm font-medium">Dr. Jose Simmons</div>
                <div className="text-xs text-gray-500">General Practitioner</div>
              </div>
            </div>
            <button className="text-gray-600">
              <Settings size={20} />
            </button>
            <button className="text-gray-600">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Patient List */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold mb-4">Patients</h2>
              <div className="relative mb-4">
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {patientsData.map(patient => (
                  <div 
                    key={patient.id}
                    className={`flex items-center p-2 rounded-lg cursor-pointer ${patient.id === selectedPatient.id ? "bg-teal-50" : "hover:bg-gray-50"}`}
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <img src="/api/placeholder/40/40" className="w-10 h-10 rounded-full mr-3" alt={patient.name} />
                    <div className="flex-1">
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-sm text-gray-500">{patient.gender}, {patient.age}</div>
                    </div>
                    <button className="text-gray-400">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Patient Details and Diagnostics */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
                
                {/* Blood Pressure Chart */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Blood Pressure</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Last 6 months</span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={bloodPressureData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tick={{fontSize: 12}} />
                      <YAxis tick={{fontSize: 12}} domain={[60, 180]} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="systolic" 
                        stroke="#E83E8C" 
                        strokeWidth={2} 
                        dot={{ stroke: '#E83E8C', fill: '#E83E8C', r: 4 }}
                        activeDot={{ stroke: '#E83E8C', fill: '#E83E8C', r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="diastolic" 
                        stroke="#6F42C1" 
                        strokeWidth={2} 
                        dot={{ stroke: '#6F42C1', fill: '#6F42C1', r: 4 }}
                        activeDot={{ stroke: '#6F42C1', fill: '#6F42C1', r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                    <div className="mb-2 md:mb-0">
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                        <span>Systolic</span>
                      </div>
                      <div className="text-2xl font-bold mt-1">160</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ChevronUp size={16} className="text-red-500" />
                        <span>Higher than Average</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span>Diastolic</span>
                      </div>
                      <div className="text-2xl font-bold mt-1">78</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ChevronDown size={16} className="text-green-500" />
                        <span>Lower than Average</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vital Signs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Respiratory Rate */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Wind size={24} className="text-blue-500" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm text-gray-600">Respiratory Rate</h3>
                      <div className="text-2xl font-bold my-1">20 bpm</div>
                      <div className="text-sm text-gray-500">Normal</div>
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Thermometer size={24} className="text-red-500" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm text-gray-600">Temperature</h3>
                      <div className="text-2xl font-bold my-1">98.6°F</div>
                      <div className="text-sm text-gray-500">Normal</div>
                    </div>
                  </div>

                  {/* Heart Rate */}
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Heart size={24} className="text-pink-500" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm text-gray-600">Heart Rate</h3>
                      <div className="text-2xl font-bold my-1">78 bpm</div>
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <ChevronDown size={14} className="text-green-500 mr-1" />
                        <span>Lower than Average</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagnostic List */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Diagnostic List</h2>
                  <div className="bg-white rounded-lg">
                    <div className="grid grid-cols-3 gap-4 px-4 py-3 border-b text-sm font-medium text-gray-500">
                      <div>Problem/Diagnosis</div>
                      <div>Description</div>
                      <div>Status</div>
                    </div>
                    {diagnosticData.map((item, index) => (
                      <div 
                        key={index} 
                        className={`grid grid-cols-3 gap-4 px-4 py-4 ${index !== diagnosticData.length - 1 ? 'border-b' : ''} items-center`}
                      >
                        <div className="font-medium">{item.problem}</div>
                        <div className="text-gray-600">{item.description}</div>
                        <div>
                          <span 
                            className={`px-3 py-1 rounded-full text-xs font-medium
                              ${item.status === 'Under Observation' ? 'bg-blue-100 text-blue-800' : 
                                item.status === 'Cured' ? 'bg-green-100 text-green-800' : 
                                'bg-gray-100 text-gray-800'}`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Patient Profile */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col items-center mb-6">
                <img src="/api/placeholder/120/120" className="w-24 h-24 rounded-full mb-4" alt={selectedPatient.name} />
                <h2 className="text-xl font-bold">{selectedPatient.name}</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar size={20} className="text-gray-400 mr-4" />
                  <div>
                    <div className="text-sm text-gray-500">Date Of Birth</div>
                    <div className="font-medium">August 23, 1996</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 text-gray-400">
                    {selectedPatient.gender === 'Female' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><path d="M9 18h6"></path><path d="M12 18v5"></path></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                    )}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Gender</div>
                    <div className="font-medium">{selectedPatient.gender}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock size={20} className="text-gray-400 mr-4" />
                  <div>
                    <div className="text-sm text-gray-500">Contact Info</div>
                    <div className="font-medium">(415) 555-1234</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock size={20} className="text-gray-400 mr-4" />
                  <div>
                    <div className="text-sm text-gray-500">Emergency Contacts</div>
                    <div className="font-medium">(415) 555-5678</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FileText size={20} className="text-gray-400 mr-4" />
                  <div>
                    <div className="text-sm text-gray-500">Insurance Provider</div>
                    <div className="font-medium">Sunrise Health Assurance</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-full mt-6">
                Show All Information
              </button>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Lab Results</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Blood Tests</span>
                    <Download size={18} className="text-gray-500" />
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>CT Scans</span>
                    <Download size={18} className="text-gray-500" />
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Radiology Reports</span>
                    <Download size={18} className="text-gray-500" />
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>X-Rays</span>
                    <Download size={18} className="text-gray-500" />
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Urine Test</span>
                    <Download size={18} className="text-gray-500" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;