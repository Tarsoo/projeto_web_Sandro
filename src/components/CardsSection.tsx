import Card from "./Card";
import Champion from "../assets/champion.svg";
import Delivery from "../assets/delivery.svg";
import Healthy from "../assets/healthy.svg";
import "../styles/Card.css";

export default function CardsSection() {
  return (
    <section className="cards-container">
      <Card
        icon={Champion}
        title="Produto Vencedor"
        description="Nosso time já venceu eventos como o CityFarm da FAG e o Startup Garage."
      />
      <Card
        icon={Delivery}
        title="Entrega Rápida"
        description="Seu pedido chega quentinho e no prazo em qualquer região da cidade."
      />
      <Card
        icon={Healthy}
        title="Comida Saudável"
        description="Nossas receitas são 100% saudáveis e feitas com carinho de mãe."
      />
    </section>
  );
}
