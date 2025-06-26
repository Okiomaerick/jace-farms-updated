import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, name: 'Farmers Served', value: 800, suffix: '+' },
  { id: 2, name: 'Years Experience', value: 17, suffix: '+' },
  { id: 3, name: '4 -6 weeks old chicks brooded and sold', value: 4000, suffix: '+' },
  { id: 4, name: 'Satisfaction Rate', value: 98, suffix: '%' },
  ];

const Stats = () => {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-white py-12 sm:py-16">
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
