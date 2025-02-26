import React, { useEffect } from 'react';
import { CircuitBoard, Cpu, Flame, Info, List, Mail, Play, Settings, Shield, Users, Wrench } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">
              Self Fire Brigade Robot
            </h1>
            <img 
              src="/Circuit breakers.png" 
              alt="Circuit Breakers Logo" 
              className="h-36 md:h-48 object-contain animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            />
          </div>
          <p className="text-xl md:text-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            An Arduino UNO-based autonomous fire detection and extinguishing system
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6 reveal">
              <Info className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-bold">Project Overview</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    The Self Fire Brigade Robot is an innovative autonomous system designed to detect and extinguish fires without human intervention. Built on the Arduino UNO platform, this robot combines advanced sensors, precise movement control, and efficient fire suppression capabilities to provide a reliable fire safety solution.
                  </p>
                </div>
              </div>
              <div className="reveal">
                <img 
                  src="/robot.jpg"
                  alt="Arduino-based robot"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Positive Uses */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6 reveal">
              <Shield className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-bold">Positive Uses</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
                <h3 className="text-xl font-semibold mb-3">Early Fire Detection</h3>
                <p className="text-gray-700">Continuous monitoring helps detect fires at their earliest stages, preventing major disasters and property damage.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
                <h3 className="text-xl font-semibold mb-3">24/7 Protection</h3>
                <p className="text-gray-700">Provides round-the-clock surveillance and response, ensuring safety even when humans are not present.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
                <h3 className="text-xl font-semibold mb-3">Hazardous Environments</h3>
                <p className="text-gray-700">Can operate in dangerous or hard-to-reach areas where human intervention might be risky or impossible.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
                <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                <p className="text-gray-700">Reduces the need for constant human monitoring while providing reliable fire protection at a fraction of the cost.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-gray-700">Immediate action upon fire detection minimizes damage and prevents fire spread, saving valuable assets.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
                <h3 className="text-xl font-semibold mb-3">Educational Value</h3>
                <p className="text-gray-700">Serves as an excellent learning platform for robotics, programming, and fire safety systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Working Principle */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6 reveal">
              <Play className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-bold">Working Principle</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>The robot continuously scans its surroundings using flame sensors to detect fire.</li>
                <li>Upon detecting a fire, the robot calculates the shortest path to reach the fire source.</li>
                <li>DC motors drive the robot towards the fire location while maintaining proper alignment.</li>
                <li>Once in position, the water pump activates to extinguish the fire.</li>
                <li>The robot continues monitoring until the fire is completely extinguished.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6 reveal">
              <List className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-bold">Components Used</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="reveal">
                <ComponentCard
                  icon={<Cpu />}
                  title="Control Unit"
                  items={[
                    "Arduino UNO R3",
                    "L298N Motor Driver",
                    "Breadboard",
                    "Jumper Wires"
                  ]}
                />
              </div>
              <div className="reveal">
                <ComponentCard
                  icon={<Settings />}
                  title="Sensors & Actuators"
                  items={[
                    "Flame Sensors (x4)",
                    "DC Motors (x2)",
                    "Servo Motor",
                    "Water Pump"
                  ]}
                />
              </div>
              <div className="reveal">
                <ComponentCard
                  icon={<Wrench />}
                  title="Mechanical Parts"
                  items={[
                    "Chassis",
                    "Wheels",
                    "Water Tank",
                    "Battery Holder"
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Circuit Diagram */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6 reveal">
              <CircuitBoard className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-bold">Circuit Diagram</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
              <img 
                src="/circuit.jpg"
                alt="Circuit diagram representation"
                className="w-full rounded-lg"
              />
              <div className="mt-4 text-gray-700">
                <h3 className="font-semibold mb-2">Connection Details:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Flame sensors connected to analog pins A0-A3</li>
                  <li>L298N motor driver connected to digital pins 5,6,9,10</li>
                  <li>Servo motor connected to pin 11</li>
                  <li>Water pump relay connected to pin 12</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6 reveal">
              <Users className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-bold">Circuit Breakers-Team Members</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 reveal">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Arvind Kumar",
                  "Mohit Gupta",
                  "Kanika",
                  "Gagandeep"
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-red-600" />
                    <span className="text-lg text-gray-700">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Circuit Breakers - Self Fire Brigade Robot Project</p>
        </div>
      </footer>
    </div>
  );
}

function ComponentCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-red-600">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;