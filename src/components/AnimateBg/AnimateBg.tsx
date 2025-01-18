export default function AnimatedBackground() {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#38AECC]/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#022F40]/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
    )
  }
  
  