import GiftCard from "../components/GiftCard";
import { Text } from "../components/Text";

export default function BestGiftsSection() {
  return (
    <section
      id="best-gifts"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-snow.png')" }}
    >
      <div className="section-container flex flex-col justify-center items-center gap-5 h-auto">
        <div className="flex flex-col items-center gap-3 w-full text-center">
          <Text type="Caption">Best Gifts</Text>
          <Text type="Header2">Especially for you</Text>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 w-full h-auto">
          <GiftCard />
          <GiftCard />
          <GiftCard />
          <GiftCard />
        </div>
      </div>
    </section>
  );
}
