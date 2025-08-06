const LoginOptions = () => {
  return (
    <div className="flex justify-start gap-16 text-[#848E9C]">
      {/* Continue with */}
      <div>
        <p className="mb-4">Or Continue With</p>
        <div className="flex gap-4">
            <button className="bg-[#1E2329] p-3 rounded-md border-[#333]">
                <img src="google.png" alt="Google" className="w-6 h-6"/>
            </button>
            <button className="bg-[#1E2329] p-3 rounded-md border-[#333]">
                <img src="apple.png" alt="Google" className="w-6 h-6"/>
            </button>
        </div>
      </div>
      {/* Download app */}
      <div>
        <p className="mb-4">Download App</p>
        <div className="flex gap-4">
             <button className="bg-[#1E2329] p-3 rounded-md border-[#333]">
                <svg className="bn-svg h-6 w-6 cursor-pointer text-PrimaryText" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z" fill="white"></path></svg>
            </button>
        </div>
      </div>
    </div>
  )
}

export default LoginOptions
