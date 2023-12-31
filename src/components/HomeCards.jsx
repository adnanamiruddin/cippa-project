import Image from "next/image";
import Link from "next/link";
import peopleCommunityIcon from "../../public/people-community-icon.png";
import bardAiText from "../../public/bard-ai-text.png";
import chatGptText from "../../public/chat-gpt-text.png";
import MotionDiv from "./MotionDiv";

const HomeCards = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:flex-row">
      <MotionDiv x={-100} delay={0.6}>
        <div className="bg-stone-900 p-8 rounded-lg md:h-72">
          <h3 className="text-2xl">Filterisasi dan Temukan Tools yang tepat</h3>
          <p className="mt-6">
            Dengan dukungan AI, para content-creator dapat mengoptimalkan alur
            kerja mereka dan membuka pintu efisiensi yang baru
          </p>
          <div className="mt-6 flex justify-between gap-4">
            <div
              className="border-2 border-gray-500 py-2 px-7 rounded-full w-1/2 flex justify-center items-center"
            >
              <Image src={bardAiText} alt="" />
            </div>
            <div
              href="https://chat.openai.com/"
              target="_blank"
              rel="noopener"
              className="border-2 border-gray-500 py-2 px-7 rounded-full w-1/2 flex justify-center items-center"
            >
              <Image src={chatGptText} alt="" />
            </div>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv x={100} delay={0.6}>
        <div className="bg-stone-900 p-8 rounded-lg md:h-72">
          <Image src={peopleCommunityIcon} alt="" className="w-10" />
          <h3 className="text-2xl mt-3 md:mt-5">
            Gabung Komunitas dan Temukan Informasi Seputar Tools AI
          </h3>
          <p className="mt-4 md:mt-7">
            Generating innovative ideas is a crucial aspect of any creative
            endeavor. AI tools can help spark inspiration by analyzing vast
            amounts of data
          </p>
        </div>
      </MotionDiv>
    </div>
  );
};

export default HomeCards;
