import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const stats = [
  { id: 1, name: 'Farmers Served', value: 800, suffix: '+' },
  { id: 2, name: 'Years Experience', value: 17, suffix: '+' },
  { id: 3, name: '4-6 weeks old chicks brooded and sold', value: 4000, suffix: '+' },
  { id: 4, name: 'Satisfaction Rate', value: 98, suffix: '%' },
];

const Stats = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      setStartCounting(true);
      return;
    }

    // Create intersection observer
    const handleIntersect = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setStartCounting(true);
        if (observer.current) {
          observer.current.disconnect();
        }
      }
    };

    // Set up the observer
    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    });

    // Start observing the target
    if (statsRef.current) {
      observer.current.observe(statsRef.current);
    }

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={statsRef} className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="px-4 py-5 bg-green-50 rounded-lg overflow-hidden">
              <p className="text-lg font-medium text-gray-900">
                {startCounting ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    className="block text-3xl font-bold text-green-600"
                  />
                ) : (
                  <span className="block text-3xl font-bold text-green-600">0</span>
                )}
                <span className="text-green-600">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
