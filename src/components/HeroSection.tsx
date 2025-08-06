import LoginOptions from "./LoginOptions";

const HeroSection = () => {
  return (
    <section className="bg-[#181A20] text-white px-6 py-22  flex justify-center items-center">
      {/* Left: Trust info & Sign Up */}
      <div className="w-1/2">
        <h1 className="text-[84px] font-bold leading-[1.2]">
          <span className="text-[#F0B90B]">278,922,866</span> <br />
          USERS <br />
          TRUST US
        </h1>

        {/* SignUp form */}
        <div className="flex flex-row gap-4 my-14">
          <input
            type="text"
            placeholder="Email/Phone number"
            className="p-3 text-gray-300 font-semibold border rounded-lg w-1/2 border-gray-700 focus:outline-none hover:border-[#F0B90B]"
          />
          <button className="bg-[#FCD535] text-[#202630] font-semibold text-[16px] px-6 py-3 rounded-lg  hover:bg-[#fcd435e9] w-[200px]">
            Sign Up{" "}
          </button>
        </div>
        <div className="mt-40">
            <LoginOptions/>
        </div>
      </div>

      {/* Right: Coin List & News */}
      <div className="w-1/3 flex flex-col gap-8 text-[16px] relative ">
        {/* Coin List */}
        <div className="bg-[#1E2329] rounded-xl p-6 w-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-white font-semibold mr-4 border-b-[3px] border-[#F0B90B]">
                Popular
              </span>
              <span className="text-[#848E9C]">New Listing</span>
            </div>
            <div>
              <a
                href="#"
                className="text-[#848E9C] text-sm hover:text-[#737c89]"
              >
                View All 350+ Coins →
              </a>
            </div>
          </div>
            {/* Coin Rows */}
            {[
                {name:"BTC", label:"Bitcoin",price:"$108,567.60",change:"+1.17%" ,color:"text-green-500",icon:"bitcoin.png"},
                {name:"ETH", label:"Ethereum",price:"$2,500.51",change:"+2.89%" ,color:"text-green-500",icon:"ethereum.png"},
                {name:"BNB", label:"BNB",price:"$653.86",change:"+0.84%" ,color:"text-green-500",icon:"bnb.png"},
                {name:"XRP", label:"XRP",price:"$2.20",change:"+0.44%" ,color:"text-green-500",icon:"xrp.png"},
                {name:"SOL", label:"Solana",price:"$151.26",change:"+3.00%" ,color:"text-green-500",icon:"solana.png"},
            ].map((coin,idx)=>(
                <div key={idx} className="flex  justify-between py-2 font-semibold">
                    <div className="flex items-center gap-2">
                        <img src={coin.icon} alt={coin.name} className="h-8 w-8"/>
                        <span className="font-semibold">{coin.name}</span>
                        <span className="text-gray-400">{coin.label}</span>
                    </div>
                    <div className="flex items-center gap-13">
                        <span className="font-medium">{coin.price}</span>
                        <span className={`${coin.color} font-medium`}>{coin.change}</span>
                    </div>
                </div>
            ))}
        </div>
        {/* News Section */}
        <div className="bg-[#1E2329] rounded-xl p-6 w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-[16px]">News</h3>
                <a href="#" className="text-[#848E9C] text-[14px] hover:text-[#9aa4b4]">View All News →</a>
            </div>
            <ul className="space-y-3 text-[16px] text-white">
                <li className="hover:text-[#9aa4b4] cursor-pointer">Significant Cryptocurrency Losses Reported Amid Market Volatility</li>
                <li className="hover:text-[#9aa4b4] cursor-pointer">Ethereum Foundation Transfers 1000 ETH Without Further Action</li>
                <li className="hover:text-[#9aa4b4] cursor-pointer">SEC Nears Decision on Grayscale Digital Large Cap ETF Approval</li>
                <li className="hover:text-[#9aa4b4] cursor-pointer">Texas Recognizes Gold and Silver as Legal Tender for Daily Transactions</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


