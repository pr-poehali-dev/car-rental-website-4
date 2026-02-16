import CarCard from "@/components/CarCard";

const cars = [
  { name: "Ford Transit", year: 2018, price: 7300, category: "Микроавтобус", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/fb54cac9-5ff9-4987-947a-c0e2c52769eb.jpg" },
  { name: "Peugeot Traveller", year: 2019, price: 7300, category: "Микроавтобус", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/7a616d61-653f-4a53-8709-104dc4ea4c0c.jpg" },
  { name: "Geely Monjaro (KX11)", year: 2023, price: 7300, category: "Кроссовер", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/d74ab692-d9ca-4e57-a45e-c259a5a1e928.jpg" },
  { name: "GAC GS8 GL", year: 2024, price: 7300, category: "Кроссовер", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/2b6c173a-49bd-4180-86bd-977aea64914a.jpg" },
  { name: "Peugeot Expert Рефрижератор", year: 2023, price: 6050, category: "Коммерческий", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/bcbe19dc-c116-45f5-a852-61fc6d7a4b67.jpg" },
  { name: "Peugeot Boxer Fourgon", year: 2019, price: 4800, category: "Фургон", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/80e0b554-3ad3-4c07-bb1f-0eab9ede00d1.jpg" },
  { name: "Peugeot Expert 3 места", year: 2019, price: 4600, category: "Коммерческий", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/b3e8fc04-6ccd-49f6-be5e-b082efda8de3.jpg" },
  { name: "Citroen Jumper Furgon", year: 2019, price: 4800, category: "Фургон", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/ddab76f0-35e2-479c-87e8-9b6a32bdbbdb.jpg" },
  { name: "Geely Atlas PRO", year: 2023, price: 4400, category: "Кроссовер", image: "https://cdn.poehali.dev/projects/7c6c9e80-1639-4d39-808a-a337f208e6ca/files/c9156ed9-8122-4530-a8b3-033dac1ec653.jpg" },
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