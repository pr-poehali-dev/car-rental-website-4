import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[hsl(215,25%,12%)] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={22} className="text-blue-400" />
            <span className="text-lg font-bold text-white">АвтоПрокат</span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-white transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-white transition-colors">Каталог</a>
            <a href="#about" className="hover:text-white transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </nav>

          <p className="text-sm">© 2026 АвтоПрокат. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
