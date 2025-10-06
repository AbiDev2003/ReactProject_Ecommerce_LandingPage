function LandingBody() {
  return (
    <div 
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1920&q=80')" }}
    >
        {/* Blurness extent */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
    
        {/* Content */}
        <div className="relative z-10 text-center px-4">
            <h1 className="text-7xl md:text-8xl text-white mb-6 drop-shadow-2xl font-normal font-serif">
                Welcome to UrbanNex
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 mb-8 drop-shadow-lg font-normal">
                Your modern e-commerce solution
            </p>
            <p className="text-sm md:text-base text-white drop-shadow-md font-thin">
                A small project built with React + Tailwind CSS
            </p>
        </div>
    </div>
  )
}

export default LandingBody