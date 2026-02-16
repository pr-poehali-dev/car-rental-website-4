import CarCard from "@/components/CarCard";

const cars = [
  { name: "Ford Transit", year: 2018, price: 7300, category: "Микроавтобус", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Peugeot Traveller", year: 2019, price: 7300, category: "Микроавтобус", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Geely Monjaro (KX11)", year: 2023, price: 7300, category: "Кроссовер", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "GAC GS8 GL", year: 2024, price: 7300, category: "Кроссовер", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Peugeot Expert Рефрижератор", year: 2023, price: 6050, category: "Коммерческий", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Peugeot Boxer Fourgon", year: 2019, price: 4800, category: "Фургон", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Peugeot Expert 3 места", year: 2019, price: 4600, category: "Коммерческий", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Citroen Jumper Furgon", year: 2019, price: 4800, category: "Фургон", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
  { name: "Geely Atlas PRO", year: 2023, price: 4400, category: "Кроссовер", image: "https://cdn.poehali.dev/intertnal/img/placeholder.jpg" },
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Наш автопарк</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Каталог автомобилей
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            {cars.length} автомобилей в наличии — от компактных кроссоверов до коммерческого транспорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.name} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
