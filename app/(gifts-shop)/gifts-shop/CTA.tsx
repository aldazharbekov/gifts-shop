import ActionButton from "../components/ActionButton";
import { Text } from "../components/Text";
import Timer from "../components/Timer";

export default function CTA() {
  return (
    <section
      id="cta"
      className="flex justify-center items-center w-full h-auto px-2 py-15 bg-cs-primary bg-no-repeat bg-center bg-cover rounded-b-[20px]"
      style={{ backgroundImage: "url('/bg-snow.png'), url('/bg-forest.png')" }}
    >
      <div className="section-container flex justify-center items-center h-auto py-15 rounded-[20px]">
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[426px] h-auto py-15 text-center">
          <Text type="Header2">
            Ready to start your journey to a better version of yourself?
          </Text>
          <ActionButton />
          <div className="flex flex-col justify-center items-center gap-2">
            <Text type="Caption"> The New Year is Coming Soon...</Text>
            <Timer />
          </div>
        </div>
      </div>
    </section>
  );
}
