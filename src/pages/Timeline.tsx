
import { Card, CardContent } from '../components/ui/card';

const Timeline = () => {
  const events = [
    {
      title: 'Ceremony',
      time: '4:00 PM - 5:00 PM',
      description: 'Join us as we exchange vows and begin our journey as a married couple.',
      location: 'The Plaza Hotel Garden',
      icon: '💍'
    },
    {
      title: 'Cocktail Hour',
      time: '5:00 PM - 6:00 PM',
      description: 'Enjoy drinks and hors d\'oeuvres while we take photos.',
      location: 'The Plaza Hotel Terrace',
      icon: '🥂'
    },
    {
      title: 'Reception',
      time: '6:00 PM - 7:30 PM',
      description: 'Dinner will be served, followed by speeches and toasts.',
      location: 'Grand Ballroom',
      icon: '🍽️'
    },
    {
      title: 'First Dance',
      time: '7:45 PM',
      description: 'Watch as we share our first dance as a married couple.',
      location: 'Grand Ballroom',
      icon: '💃'
    },
    {
      title: 'Cake Cutting',
      time: '8:30 PM',
      description: 'Join us as we cut our wedding cake.',
      location: 'Grand Ballroom',
      icon: '🍰'
    },
    {
      title: 'Dancing & Celebration',
      time: '8:45 PM - 12:00 AM',
      description: 'Dance the night away with us!',
      location: 'Grand Ballroom',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#fdf8f5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Wedding Timeline</h1>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Here's what to expect on our special day, Sunday, September 15, 2024.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-rose-100 border-4 border-rose-400 flex items-center justify-center text-2xl hidden md:flex">
                  {event.icon}
                </div>
                
                <Card className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} relative z-10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  <CardContent className="p-6">
                    <div className="flex md:hidden items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-rose-400 flex items-center justify-center text-xl mr-4">
                        {event.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-gray-800">{event.title}</h3>
                        <p className="text-rose-600 font-medium">{event.time}</p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <h3 className="font-serif text-xl text-gray-800 mb-1">{event.title}</h3>
                      <p className="text-rose-600 font-medium mb-3">{event.time}</p>
                    </div>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <p className="text-gray-500 text-sm">
                      <span className="font-medium">Location:</span> {event.location}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "We can't wait to celebrate with you!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;