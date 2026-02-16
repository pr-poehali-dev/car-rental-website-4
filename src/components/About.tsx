import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Полная страховка",
    desc: "Все автомобили застрахованы по ОСАГО и КАСКО",
  },
  {
    icon: "FileText",
    title: "Прозрачные условия",
    desc: "Никаких скрытых платежей — всё прописано в договоре",
  },
  {
    icon: "Wrench",
    title: "Техобслуживание",
    desc: "Регулярное ТО всех автомобилей нашего парка",
  },
  {
    icon: "Clock",
    title: "Быстрая подача",
    desc: "Подаём автомобиль в течение 1 часа по городу",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">О компании</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы — компания по аренде автомобилей с проверенным автопарком.
            Работаем с частными клиентами и бизнесом, предлагая гибкие условия аренды.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={f.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
