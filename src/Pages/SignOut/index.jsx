import Layout from "../../Components/layout";


function SignIn() {
 
    return (
      <>
        <Layout>
        <div className="flex flex-col w-80 bg-gray-900 p-10 m-10 rounded-xl shadow-xl">
          <form className="flex flex-col">
            <div className="flex flex-col relative">
              <input className="py-3 mb-8 text-base bg-transparent border-b border-white outline-none focus:border-blue-500"
               type="text" name="" required="" />
              <label className="absolute -top-5">Your Name</label>
            </div>
            <div className="flex flex-col relative">
              <input className=" py-3 text-base mb-8  bg-transparent border-b border-white outline-none focus:border-blue-500 "
               type="email" name="" required="" />
              <label className="absolute -top-5" for="">Email</label>
            </div>
            <div className="flex flex-col relative">
              <input className=" py-3 text-base mb-8  bg-transparent border-b border-white outline-none focus:border-blue-500 "
               type="password" name="" required="" />
              <label className="absolute -top-5" for="">Password</label>
            </div>
            <a className="self-center px-5 py-3 mt-10 overflow-hidden hover:bg-[#03f40f] hover:rounded-md " 
            href="#">
                    Login
                <span></span>
            </a>
          </form>
          </div>
        </Layout>
      </>
    )
  }
  
  export default SignIn