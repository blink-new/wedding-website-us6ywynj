
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Couple at sunset',
      caption: 'Our first vacation together'
    },
    {
      src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      alt: 'Couple laughing',
      caption: 'Weekend getaway in the mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      alt: 'Couple holding hands',
      caption: 'Exploring Paris together'
    },
    {
      src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      alt: 'Engagement photo',
      caption: 'The day we got engaged'
    },
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      alt: 'Couple dancing',
      caption: 'Dancing at our friend\'s wedding'
    },
    {
      src: 'https://images.unsplash.com/photo-1623788452350-4c8853162525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      alt: 'Beach vacation',
      caption: 'Beach vacation in Hawaii'
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      alt: 'Hiking together',
      caption: 'Hiking in the mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      alt: 'Picnic in the park',
      caption: 'Sunday picnic in Central Park'
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Wedding venue',
      caption: 'Our wedding venue'
    }
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Our Gallery</h1>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            A collection of our favorite moments together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" onClick={() => setSelectedImage(index)}>
                  <div className="aspect-square relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-3">
                    <p className="text-gray-600 text-sm">{image.caption}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none shadow-none">
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 z-50 bg-black/50 text-white hover:bg-black/70 rounded-full"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  
                  <div className="relative">
                    <img 
                      src={images[selectedImage !== null ? selectedImage : index].src} 
                      alt={images[selectedImage !== null ? selectedImage : index].alt}
                      className="max-h-[80vh] w-auto mx-auto rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                      <p className="text-center">{images[selectedImage !== null ? selectedImage : index].caption}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;