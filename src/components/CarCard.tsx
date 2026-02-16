import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CarCardProps {
  name: string;
  year: number;
  price: number;
  category: string;
  image: string;
}

const CarCard = ({ name, year, price, category, image }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-xs">
          {category}
        </Badge>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{year} год</p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">от</p>
            <p className="text-2xl font-extrabold text-primary">
              {price.toLocaleString("ru-RU")} ₽
              <span className="text-sm font-medium text-muted-foreground">/сутки</span>
            </p>
          </div>
          <Button size="sm" className="font-semibold">
            <Icon name="Phone" size={14} className="mr-1.5" />
            Забронировать
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
