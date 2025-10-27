/* eslint-disable react/no-unescaped-entities */
import { PageInterface } from "@types";
export default function WhyProgramming({ messages }: PageInterface) {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-10 bg-yellow flex-row w-full rounded-2xl p-8 gap-6">
        <div className="flex w-full col-span-3 bg-darkGray justify-center items-center p-4 rounded-lg">
          <h3 className="text-4xl font-bold text-lightGray text-center">
            {messages.whyProgrammingTitle}
          </h3>
        </div>
        <p className="text-justify text-darkGray text-xl leading-8 col-span-7">
          {messages.whyProgrammingText}
        </p>
      </div>
    </div>
  );
}