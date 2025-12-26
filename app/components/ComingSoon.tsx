import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#82d9d0] via-[#82d9d0]/80 to-[#6bc4bb] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/woof-logo.svg"
            alt="Woof Logo"
            width={200}
            height={200}
            className="w-50 h-50"
            priority
          />
        </div>

        {/* Subheading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-6">
          Наскоро доаѓаме!
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl mx-auto">
          Работиме на нешто прекрасно за вашите миленици.
          Останете со нас!
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-20 bg-white/30 rounded"></div>
          <div className="text-4xl">🐕</div>
          <div className="h-1 w-20 bg-white/30 rounded"></div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            Контактирајте не
          </h3>
          <div className="space-y-3 text-white/90">
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">📞</span>
              <span>070 123 456</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">✉️</span>
              <span>info@woof.mk</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Скопје, Македонија</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white/60 text-sm mt-8">
          &copy; 2025 Woof. Премиум услуги за нега на кучиња
        </p>
      </div>

      {/* Animated paw prints decoration */}
      <div className="fixed bottom-10 left-10 text-6xl opacity-20 animate-pulse hidden md:block">
        🐾
      </div>
      <div className="fixed top-20 right-10 text-6xl opacity-20 animate-pulse hidden md:block" style={{animationDelay: '1s'}}>
        🐾
      </div>
      <div className="fixed bottom-32 right-32 text-6xl opacity-20 animate-pulse hidden md:block" style={{animationDelay: '2s'}}>
        🐾
      </div>
    </div>
  );
}
