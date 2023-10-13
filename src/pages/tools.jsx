import { useEffect, useState } from "react";
import { getAllItems, getAllTagsName, getItemsByTag } from "@/api/service";
import Card from "@/components/Card";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MotionDiv from "@/components/MotionDiv";

export default function Tools() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState(data);
  const [expandedCard, setExpandedCard] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultKeyword = searchParams.get("cari");
  const [inputValue, setInputValue] = useState("");

  const [tagsName, setTagsName] = useState([]);
  const [selectedTags, setSelectedTags] = useState("Semua");

  const handleCardClick = (index) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  const onKeywordChangeHandler = (cari) => {
    setInputValue(cari);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, cari },
    });
  };

  const clearInput = () => {
    setInputValue("");
    setSelectedTags("Semua");
    router.push({
      pathname: router.pathname,
      query: { ...router.query, cari: "" },
    });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getAllItems();
      if (data) {
        setData(data);
        setItems(data);
      }
    };
    getData();

    const getTagsName = async () => {
      const data = await getAllTagsName();
      setTagsName(data);
    };
    getTagsName();
  }, []);

  useEffect(() => {
    if (defaultKeyword !== null) {
      const searchResult = data.filter((item) => {
        const isNameMatch = item.name
          .toLowerCase()
          .includes(defaultKeyword.toLowerCase());
        const isDescMatch = item.desc
          .toLowerCase()
          .includes(defaultKeyword.toLowerCase());
        return isNameMatch || isDescMatch;
      });
      setItems(searchResult);
    }

    if (defaultKeyword === "" || defaultKeyword?.length <= 3) {
      setSelectedTags("Semua");
    }
  }, [defaultKeyword]);

  useEffect(() => {
    if (selectedTags === "Semua") {
      setItems(data);
    } else if (selectedTags) {
      const getTagsForChoosenTag = async () => {
        const itemsForTag = await getItemsByTag(selectedTags);
        setItems(itemsForTag);
      };
      getTagsForChoosenTag();
    } else {
      setItems(data);
    }
  }, [selectedTags, data]);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Navbar />
      <div className="w-full z-40 bg-black pt-20 md:px-20">
        <MotionDiv y={-100}>
          <div className="flex justify-center items-center px-4 relative md:px-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => onKeywordChangeHandler(e.target.value)}
              placeholder="Cari tools yang sesuai"
              className="bg-black text-gray-300 border-[0.7px] pl-10 py-2 rounded-l-2xl w-5/6 md:w-11/12"
            />
            <FiSearch className="absolute left-8 top-[32%] text-white md:left-[1.5%]" />

            <button
              onClick={clearInput}
              className="bg-[#D2FF3A] rounded-r-2xl w-1/6 flex justify-center items-center h-full py-[0.8rem] font-bold text-black md:w-1/12 hover:brightness-75"
            >
              <FiX />
            </button>
          </div>
        </MotionDiv>

        <MotionDiv y={-100} delay={1}>
          <div className="flex py-4 overflow-scroll gap-1 px-4 md:px-0">
            <button
              onClick={() => setSelectedTags("Semua")}
              className={`md:px-10 ${
                selectedTags === "Semua"
                  ? "bg-[#D2FF3A] text-black font-bold"
                  : "bg-transparent text-[#D2FF3A] border-[1px] border-[#D2FF3A]"
              } px-4 py-2 rounded-xl my-2 mx-1`}
            >
              Semua
            </button>
            {tagsName.map((tag, i) => (
              <button
                key={i}
                onClick={() => setSelectedTags(tag.name)}
                className={`md:px-10 ${
                  selectedTags === tag.name
                    ? "bg-[#D2FF3A] text-black font-bold"
                    : "bg-transparent text-[#D2FF3A] border-[1px] border-[#D2FF3A]"
                } px-4 py-2 rounded-xl my-2 mx-1`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </MotionDiv>
      </div>

      <div className="flex gap-5 flex-wrap md:flex-row relative h-full justify-center items-center pt-2 pb-16 md:px-20">
        {items.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            image={item.image}
            desc={item.desc}
            link={item.link}
            video={item.video}
            isExpanded={i === expandedCard}
            onClick={() => handleCardClick(i)}
          />
        ))}
      </div>

      <footer className="absolute w-full left-0">
        <Footer />
      </footer>
    </div>
  );
}
