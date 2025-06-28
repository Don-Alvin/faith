import MetaData from '@/components/Meta/meta';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <MetaData 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist. Return to Lamona Realtors homepage to find your dream property."
        url="/404"
      />
      
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-gray-200 mb-4">404</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Oops! We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
          
          <div className="text-center">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-primary hover:text-yellow-600 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;