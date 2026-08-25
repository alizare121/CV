import { PageInterface } from "@types";
import { SvgIcon } from "@components";

interface AIAgentInterface extends PageInterface {
  aiAgents: any;
}
export default function AIAgent({ messages, aiAgents }: AIAgentInterface) {
  return (
    <section>
      <div className="mt-20 flex flex-col items-center justify-center">
        <span className="text-white">{messages.expertise}</span>
        <h3 className="text-4xl text-yellow font-bold">{messages.skills}</h3>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {aiAgents.map((item: any) => (
          <div key={item.alt}  className="h-[40px] rounded-md overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="h-[40px] rounded-md overflow-hidden"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
