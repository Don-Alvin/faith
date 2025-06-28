import SEO from '../SEO/SEO';
import { MetaDataProps } from '@/types';

const MetaData: React.FC<MetaDataProps> = ({ 
  title, 
  subtitle, 
  content, 
  description,
  keywords,
  image,
  url 
}) => {
  return (
    <SEO
      title={title}
      description={description || content || 'Find your dream property with Lamona Realtors - Kenya\'s premier real estate agency'}
      keywords={keywords}
      image={image}
      url={url}
    />
  );
};

export default MetaData;