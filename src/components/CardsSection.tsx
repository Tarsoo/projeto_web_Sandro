import Card from "./Card";
import Champion from "../assets/champion.svg";
import Delivery from "../assets/delivery.svg";
import Healthy from "../assets/healthy.svg";
import "../styles/Card.css";

export default function CardsSection() {
  return (
    <>
      <Card
        icon={Champion}
        title="O mais rápido"
        description="Com testes de benchmark, a Digitaliza te entrega a solução mais rápida do mercado"
      />
      <Card
        icon={Delivery}
        title="Análise imediata"
        description="Relatórios com os riscos de possíveis problemas em tempo recorde"
      />
      <Card
        icon={Healthy}
        title="Máquinas mais seguras"
        description="Você no controle total do seu parque de máquinas"
      />
    </>
  );
}
