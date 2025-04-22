
import { ArrowDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white mb-4 animate-fade-in">
            Jessica & Michael
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            We're getting married!
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-slide-up delay-100">
            September 15, 2024 • New York City
          </p>
          <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white animate-slide-up delay-200">
            <Link to="/rsvp">
              RSVP Now
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
              alt="Couple" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-gray-800 mb-4">How We Met</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey began on a rainy afternoon in a small coffee shop in downtown Manhattan. 
              Jessica was working on her laptop when Michael asked if he could share her table as the café was full. 
              What started as a simple conversation over coffee turned into hours of talking, laughing, and discovering 
              shared passions for travel, photography, and classic films.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Three years later, during a surprise trip to Paris, Michael proposed at sunset with the Eiffel Tower 
              as the backdrop. And now, we're excited to begin the next chapter of our lives together, surrounded 
              by our beloved family and friends.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button asChild variant="outline" className="border-rose-400 text-rose-600 hover:bg-rose-50">
                <Link to="/timeline">
                  Our Timeline
                </Link>
              </Button>
              <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Event Details</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-2">The Date</h3>
              <p className="text-gray-600 mb-4">September 15, 2024</p>
              <p className="text-gray-500 text-sm">Sunday, 4:00 PM</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-2">The Venue</h3>
              <p className="text-gray-600 mb-4">The Plaza Hotel</p>
              <p className="text-gray-500 text-sm">768 5th Ave, New York, NY</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-2">The Reception</h3>
              <p className="text-gray-600 mb-4">Grand Ballroom</p>
              <p className="text-gray-500 text-sm">Dinner & Dancing</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
              <Link to="/location">
                View Location Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Join Us On Our Special Day</h2>
          <p className="text-white/90 mb-8 text-lg">
            We would be honored to have you join us as we celebrate our love and commitment.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-rose-600">
            <Link to="/rsvp">
              RSVP Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Counting Down To The Big Day</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-rose-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">124</div>
              <div className="text-gray-600">Days</div>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">16</div>
              <div className="text-gray-600">Hours</div>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">42</div>
              <div className="text-gray-600">Minutes</div>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">37</div>
              <div className="text-gray-600">Seconds</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;