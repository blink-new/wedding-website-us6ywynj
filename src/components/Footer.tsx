
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="font-serif text-2xl text-rose-600 mb-4">
            Jessica & Michael
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-rose-500 fill-rose-500" />
            <span>for our special day</span>
          </div>
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Jessica & Michael Wedding
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;