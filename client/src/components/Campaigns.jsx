import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './Campaigns.css';

const flyers = [
  {
    id: 1,
    alt: 'July Promo on Chicks',
    webp: '/images/campaigns/promo-chicks-july.webp',
    png: '/images/campaigns/promo-chicks-july.png'
  },
  {
    id: 2,
    alt: 'Feed Discount Promo',
    webp: '/images/campaigns/feed-discount-promo.webp',
    png: '/images/campaigns/feed-discount-promo.png'
  }
];

export default function Campaigns() {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedFlyer, setSelectedFlyer] = useState(null);

  function openModal(flyer) {
    setSelectedFlyer(flyer);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedFlyer(null);
  }

  return (
    <section className="campaigns-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
        Ongoing Campaigns & Special Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flyers.map((flyer) => (
          <button
            key={flyer.id}
            className="focus:outline-none"
            onClick={() => openModal(flyer)}
            aria-label={`Open flyer: ${flyer.alt}`}
          >
            <picture>
              <source srcSet={flyer.webp} type="image/webp" />
              <img
                src={flyer.png}
                alt={flyer.alt}
                loading="lazy"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-auto"
              />
            </picture>
          </button>
        ))}
      </div>

      {/* Modal for lightbox view */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />

          <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl mx-auto p-4 shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            {selectedFlyer && (
              <picture>
                <source srcSet={selectedFlyer.webp} type="image/webp" />
                <img
                  src={selectedFlyer.png}
                  alt={selectedFlyer.alt}
                  className="max-w-full max-h-[80vh] rounded"
                />
              </picture>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}
