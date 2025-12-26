import Image from "next/image";
import ComingSoon from "./components/ComingSoon";

export default function Home() {
  // Check if coming soon mode is enabled
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true';

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#82d9d0]/10 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/woof-logo.svg"
              alt="Woof Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h1 className="text-2xl font-bold text-[#82d9d0]">Woof</h1>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-gray-700 hover:text-[#82d9d0] transition-colors">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-[#82d9d0] transition-colors">За нас</a>
            <a href="#contact" className="text-gray-700 hover:text-[#82d9d0] transition-colors">Контакт</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            Премиум нега за вашето милениче
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Професионални услуги за нега на кучиња кои ќе ја разнежат вашата мила топка со крзно. Стручна грижа, нежно ракување и СПА искуство за вашиот љубимец.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-[#82d9d0] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6bc4bb] transition-colors shadow-lg"
            >
              Закажи термин
            </a>
            <a
              href="#services"
              className="bg-white text-[#82d9d0] px-8 py-4 rounded-full font-semibold border-2 border-[#82d9d0] hover:bg-[#82d9d0]/10 transition-colors"
            >
              Погледни услуги
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Наши услуги</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">✂️</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Комплетна нега</h4>
            <p className="text-gray-600">
              Целосен пакет за нега вклучувајќи капење, шишање, рамнење нокти и чистење уши. Вашето куче ќе изгледа и ќе се чувствува прекрасно!
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🛁</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Капење и четкање</h4>
            <p className="text-gray-600">
              Луксузно капење со премиум шампони, темелно четкање и сушење. Совршено за одржување на вашето куче свежо помеѓу комплетните третмани.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💅</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Нега на нокти и лапи</h4>
            <p className="text-gray-600">
              Професионално рамнење нокти и нега на лапи. Чувајте го вашето куче удобно и вашите подови заштитени од гребанки.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="bg-[#82d9d0] text-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Зошто да не изберете?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-2">Стручни негуватели</h4>
              <p className="text-white/90">Сертифицирани професионалци со години искуство</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-bold mb-2">Нежна грижа</h4>
              <p className="text-white/90">Секое куче го третираме како свое</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-xl font-bold mb-2">Природни производи</h4>
              <p className="text-white/90">Премиум, безбедни производи за миленици</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-xl font-bold mb-2">5 ѕвезди оценети</h4>
              <p className="text-white/90">Сакани од кучињата и нивните сопственици</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Подготвени да го разнежите вашето куче?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Закажете термин денес и дајте му на вашиот милениче СПА ден кој го заслужува!
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                <p className="text-gray-600">070 123 456</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Е-пошта</h4>
                <p className="text-gray-600">info@woof.mk</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Работно време</h4>
                <p className="text-gray-600">Понedelник - Сабота: 08:00 - 18:00</p>
                <p className="text-gray-600">Недела: Затворено</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Адреса</h4>
                <p className="text-gray-600">ул. Партизанска 12, Скопје 1000</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-[#82d9d0] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6bc4bb] transition-colors">
              Закажи сега
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/woof-logo.svg"
              alt="Woof Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h5 className="text-xl font-bold">Woof</h5>
          </div>
          <p className="text-gray-400">Премиум услуги за нега на кучиња</p>
          <p className="text-gray-500 text-sm mt-4">&copy; 2025 Woof. Сите права задржани.</p>
        </div>
      </footer>
    </div>
  );
}
