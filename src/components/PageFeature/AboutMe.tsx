import { PageInterface } from "@types";
export default function AboutMe({ messages }: PageInterface) {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-10 bg-darkGray flex-row w-full rounded-2xl p-8 gap-6">
        <div className="flex col-span-3 bg-yellow justify-center items-center p-4 rounded-lg ">
          <h3 className="text-4xl font-bold text-darkGray text-center">
            {messages.aboutTitle}
          </h3>
        </div>
        <p className="text-justify text-yellow text-xl leading-8 col-span-7">
          {messages.about}
        </p>
      </div>
    </div>
  );
}
