import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/ac08c5e8-abbe-4e6b-a5c0-72b87d7b749e.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-16">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Автопарк"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,25%,12%)]/90 via-[hsl(215,25%,12%)]/70 to-[hsl(215,25%,12%)]/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Icon name="Shield" size={14} className="text-blue-300" />
            <span className="text-sm text-blue-100 font-medium">Надёжный автопрокат</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Аренда авто
            <br />
            <span className="text-blue-300">на ваших условиях</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            Легковые и коммерческие автомобили от 4 400 ₽/сутки. Без скрытых платежей, с полным пакетом документов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base font-semibold px-8 py-6">
              <a href="#catalog">
                <Icon name="ChevronDown" size={18} className="mr-2" />
                Смотреть каталог
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-semibold px-8 py-6 bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white">
              <a href="#contacts">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Связаться с нами
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-10">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={20} className="text-blue-300" />
              <span className="text-sm text-gray-300">9 авто в парке</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="text-blue-300" />
              <span className="text-sm text-gray-300">Подача за 1 час</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-blue-300" />
              <span className="text-sm text-gray-300">Все документы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
