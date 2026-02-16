import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Icon name="Car" size={28} className="text-primary" />
          <span className="text-xl font-bold text-foreground">АвтоПрокат</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Главная
          </a>
          <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Каталог
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            О нас
          </a>
          <a href="#contacts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <a
          href="tel:+70000000000"
          className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <Icon name="Phone" size={16} />
          Позвонить
        </a>
      </div>
    </header>
  );
};

export default Header;
