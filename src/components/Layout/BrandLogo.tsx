interface BrandLogoProps {
  className?: string;
}

/**
 * logo_cropped.png is logo_whitebg.png trimmed to its visible mark (the
 * source 500x500 file has the icon/wordmark/tagline sitting in a small
 * centered region with huge white margins, which made it render as a tiny,
 * washed-out sliver at normal nav sizes).
 */
const BrandLogo = ({ className = "" }: BrandLogoProps) => (
  <span className={`inline-flex items-center bg-white rounded-md shadow-sm px-2 py-1 ${className}`}>
    <img
      src="/images/logo_cropped.png"
      alt="Lamona Realtors"
      className="h-full w-auto object-contain"
    />
  </span>
);

export default BrandLogo;
