import { Download, Globe, Moon, Search } from "lucide-react"
const Header = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-[#181A20] text-white px-6 py-3 flex items-center justify-between">
        {/* {Left: Logo & Menu} */}
        <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src="binance.png" alt="Binance" className="w-6 h-6" />
                <span className="text-[#FCD535] font-bold text-lg">CryptCurr</span>
            </div>
            {/* Menu */}
            <div className="flex items-center space-x-4 text-[16px] text-[EAECEF] font-semibold">
                <span className="cursor-pointer hover:text-[#F0B90B]">Buy Crypto</span>
                <span className="cursor-pointer hover:text-[#F0B90B]">Markets</span>
                <span className="cursor-pointer hover:text-[#F0B90B]">Trade ▾</span>
                <span className="cursor-pointer hover:text-[#F0B90B]">Futures ▾</span>
                <span className="cursor-pointer hover:text-[#F0B90B]">Earn ▾</span>
                <span className="cursor-pointer hover:text-[#F0B90B]">Square ▾</span>
                <span className="cursor-pointer hover:text-[#F0B90B]">More ▾</span>
            </div>
        </div>

        {/*Right: Action  */}
        <div className="flex item-center space-x-4">
            <span className="text-xl cursor-pointer py-2 hover:text-[#F0B90B]"><Search></Search></span>
            <button className="text-[14px] font-semibold px-4 py-2 rounded-md bg-[#2B3139] hover:bg-[#343a43] ">Log In</button>
            <button className="text-[14px] font-semibold px-4 py-2 rounded-md bg-[#FCD535] text-[#202630] hover:bg-[#fcd435e2]">Sign Up</button>
            <span className="text-xl cursor-pointer  py-2  hover:text-[#F0B90B]"><Download></Download></span>
            <span className="text-xl cursor-pointer  py-2 hover:text-[#F0B90B]" ><Globe></Globe></span>
            <span className="text-xl cursor-pointer  py-2 hover:text-[#F0B90B]"><Moon></Moon></span>
        </div>
      </nav>
    </div>
  )
}
export default Header
