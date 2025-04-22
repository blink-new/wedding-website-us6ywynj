
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Car, Train, Plane } from 'lucide-react';
import { Button } from '../components/ui/button';

const Location = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#fdf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Location</h1>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Join us at The Plaza Hotel in New York City for our wedding celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl text-gray-800 mb-2">The Plaza Hotel</h2>
                    <p className="text-gray-600 mb-4">
                      768 5th Ave, New York, NY 10019
                    </p>
                    <p className="text-gray-600 mb-4">
                      The Plaza Hotel is a historic landmark and luxury hotel located in Midtown Manhattan. 
                      The ceremony will take place in the beautiful garden, followed by the reception in the Grand Ballroom.
                    </p>
                    <Button 
                      className="bg-rose-600 hover:bg-rose-700 text-white"
                      onClick={() => window.open('https://maps.google.com/?q=The+Plaza+Hotel+New+York', '_blank')}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Car className="h-6 w-6 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-gray-800 mb-2">By Car</h3>
                      <p className="text-gray-600">
                        Valet parking is available at the hotel for $75 per day. 
                        There are also several parking garages within walking distance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Train className="h-6 w-6 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-gray-800 mb-2">By Public Transit</h3>
                      <p className="text-gray-600">
                        The nearest subway stations are 5th Ave/59th St (N, R, W) and 57th St (F). 
                        Both are within a 5-minute walk of the venue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Plane className="h-6 w-6 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-gray-800 mb-2">From the Airport</h3>
                      <p className="text-gray-600">
                        JFK Airport is approximately 18 miles from the venue (45-60 min by car).
                        LaGuardia Airport is approximately 9 miles from the venue (30-45 min by car).
                        Newark Airport is approximately 16 miles from the venue (45-60 min by car).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden">
            {/* Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1606553176384!2d-73.9764968!3d40.764438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6aa300ba8339d!2sThe%20Plaza!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-gray-800 mb-6 text-center">Accommodations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-gray-800 mb-2">The Plaza Hotel</h3>
                <p className="text-gray-600 mb-4">
                  We have reserved a block of rooms at the wedding venue with a special rate for our guests.
                </p>
                <p className="text-rose-600 font-medium mb-2">$550/night</p>
                <p className="text-gray-500 text-sm mb-4">Use code: JMWEDDING</p>
                <Button 
                  variant="outline" 
                  className="w-full border-rose-400 text-rose-600 hover:bg-rose-50"
                  onClick={() => window.open('https://www.theplazany.com', '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-gray-800 mb-2">Park Hyatt New York</h3>
                <p className="text-gray-600 mb-4">
                  A luxury hotel located just a few blocks from the wedding venue.
                </p>
                <p className="text-rose-600 font-medium mb-2">$450/night</p>
                <p className="text-gray-500 text-sm mb-4">0.3 miles from venue</p>
                <Button 
                  variant="outline" 
                  className="w-full border-rose-400 text-rose-600 hover:bg-rose-50"
                  onClick={() => window.open('https://www.hyatt.com', '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-gray-800 mb-2">The Quin Central Park</h3>
                <p className="text-gray-600 mb-4">
                  A boutique hotel with modern amenities and a great location.
                </p>
                <p className="text-rose-600 font-medium mb-2">$350/night</p>
                <p className="text-gray-500 text-sm mb-4">0.4 miles from venue</p>
                <Button 
                  variant="outline" 
                  className="w-full border-rose-400 text-rose-600 hover:bg-rose-50"
                  onClick={() => window.open('https://www.thequinhotel.com', '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;