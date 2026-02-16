import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Контакты</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Свяжитесь с нами
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="tel:+70000000000"
            className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name="Phone" size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Телефон</h3>
            <p className="text-primary font-semibold">+7 (000) 000-00-00</p>
          </a>

          <a
            href="mailto:info@avtoprokat.ru"
            className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name="Mail" size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Email</h3>
            <p className="text-primary font-semibold">info@avtoprokat.ru</p>
          </a>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name="MapPin" size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Адрес</h3>
            <p className="text-muted-foreground text-sm">Москва, ул. Примерная, д. 1</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Clock" size={20} className="text-primary" />
            <h3 className="font-bold text-foreground">Режим работы</h3>
          </div>
          <p className="text-muted-foreground ml-8">
            Пн–Вс: 09:00 – 21:00 · Подача автомобиля — круглосуточно
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
