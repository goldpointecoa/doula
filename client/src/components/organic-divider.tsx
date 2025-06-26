interface OrganicDividerProps {
  topColor?: string;
  bottomColor?: string;
  reverse?: boolean;
}

export default function OrganicDivider({ 
  topColor = "var(--warm-cream)", 
  bottomColor = "var(--sage-mist)", 
  reverse = false 
}: OrganicDividerProps) {
  const path1 = reverse 
    ? "M0,0 L1200,0 L1200,20 C1000,40 800,0 600,20 C400,40 200,0 0,20 Z"
    : "M0,40 C200,20 400,60 600,40 C800,20 1000,60 1200,40 L1200,0 L0,0 Z";
  
  const path2 = reverse
    ? "M0,0 L1200,0 L1200,30 C950,50 750,10 550,30 C350,50 150,10 0,30 Z"
    : "M0,50 C150,30 350,70 550,50 C750,30 950,70 1200,50 L1200,0 L0,0 Z";

  return (
    <div className="relative w-full h-16 overflow-hidden">
      <svg
        viewBox="0 0 1200 60"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Base layer - top color */}
        <rect width="1200" height="60" fill={topColor} />
        
        {/* Organic transition waves */}
        <path
          d={path1}
          fill={bottomColor}
        />
        <path
          d={path2}
          fill={bottomColor}
          opacity="0.8"
        />
      </svg>
      
      {/* Floating nature elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
        <span className="text-lg opacity-60 hero-nature-float" style={{animationDelay: '0s'}}>🌿</span>
        <span className="text-lg opacity-60 hero-nature-sway" style={{animationDelay: '1s'}}>🍃</span>
        <span className="text-lg opacity-60 hero-nature-float" style={{animationDelay: '2s'}}>🌸</span>
      </div>
    </div>
  );
}