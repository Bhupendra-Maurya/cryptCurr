import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is a cryptocurrency exchange?",
    answer:
      "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The CryptCurr exchange is the largest crypto exchange by trade volume.",
  },
  {
    id: 2,
    question: "What products does CryptCurr provide?",
    answer:
      "CryptCurr provides products like spot trading, futures, staking, savings, and its own BNB token for discounted fees.",
  },
  {
    id: 3,
    question: "How to buy Bitcoin and other cryptocurrencies on CryptCurr",
    answer:
      "You can buy cryptocurrencies using credit/debit cards, bank transfers, or peer-to-peer (P2P) trading on CryptCurr.",
  },
  {
    id: 4,
    question: "How to track cryptocurrency prices",
    answer:
      "CryptCurr offers real-time charts, price alerts, and market overviews on its platform and mobile app.",
  },
  {
    id: 5,
    question: "How to trade cryptocurrencies on CryptCurr",
    answer:
      "To trade, register on CryptCurr, deposit funds, and use the spot or futures market to place buy/sell orders.",
  },
  {
    id: 6,
    question: "How to earn from crypto on CryptCurr",
    answer:
      "You can earn by staking, providing liquidity, participating in launchpools, and using CryptCurr Earn programs.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index:number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div>
      <div className="max-w-full p-20  m-auto items-center text-center text-white bg-[#181A20]">
        <h2 className="text-5xl font-bold tecxt-center mb-20">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={faq.id}>
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-md text-[#EAECEF] flex item-center justify-center border border-gray-500">
                    {faq.id}
                  </div>
                  <span className="text-[20px] font-semibold">
                    {faq.question}
                  </span>
                </div>
                <span
                  className={`text-xl font-bold w-6 h-6 flex items-center justify-center rounded-full
                   ${openIndex === index ? "bg-yellow-400" : "text-white"}`}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="px-12 pb-4 text-start text-[#EAECEF] text-[18px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <section className="bg-[#1E2329] py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Start earning today
        </h2>
        <button className="text-[18px] font-semibold px-4 py-2 rounded-md bg-[#FCD535] text-[#323946] hover:bg-[#fcd435e2]">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Faq;
