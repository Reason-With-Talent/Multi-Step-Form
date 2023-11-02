const StepOne = () => {
    return (
        <>
            <div className="bg-[#F0F6FF] md:h-[715px] h-[650px] md:flex md:justify-center">
                <div className="md:hidden bg-[url('assets/IMG/Desktopbg.svg')]  bg-contain bg-no-repeat w-[100%] h-[200px]">
                    <div className="flex justify-center">
                        <div className="mt-[40px]">
                            <span className="rounded-full px-[12px] py-[7px] border-2 text-[#FFFFFF]">1</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">2</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">3</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">4</span>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] mt-[50px] mx-[10px] rounded-xl">
                        <div className="pt-[20px] px-[15px]">
                            <h1 className="text-[30px] text-[#02295A] font-medium ">Personal info</h1>
                            <p className="text-[16px] font-normal w-[70%] text-[#9699AB]">Please provide your name, email address, and phone number.</p></div>
                        <form className="mt-[30px] ml-[15px] pb-[30px]">
                            <h5 className="text-[15px] ml-[5px] text-[#02295A]">Name</h5>
                            <input type="text" placeholder="e.g. Stephen King" className="border-2 w-[98%] outline-none p-[10px] rounded-lg mt-[5px]" />
                            <h5 className="text-[15px] ml-[5px] mt-[20px] text-[#02295A]">Email Address</h5>
                            <input type="email" placeholder="e.g. stephenking@lorem.com" className="border-2 w-[98%] outline-none p-[10px] rounded-lg mt-[5px]" />
                            <h5 className="text-[15px] ml-[5px] mt-[20px] text-[#02295A]">Phone Number</h5>
                            <input type="number" placeholder="e.g. +1 234 567 890" className="border-2 w-[98%] outline-none p-[10px] rounded-lg mt-[5px]" />
                        </form>
                    </div>

                </div>
                <section className="shadow-2xl md:flex bg-[#FFFFFF] md:mt-[60px] rounded-2xl md:w-[70%] md:h-[600px] ">
                    <div className=" bg-[url('assets/IMG/Mainbg.svg')] md:flex hidden bg-auto bg-no-repeat m-4 md:h-[580px] md:w-[30%]">
                        <div className="">
                            <div className="flex md:pt-[40px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">1</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 1</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">YOUR INFO</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">2</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 2</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">SELECT PLAN</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">3</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 3</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">ADD-ONS</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">4</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 4</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">SUMMARY</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex-col hidden md:flex">
                        <div className="md:mt-[45px] md:ml-[40px]">
                            <h1 className="md:text-[30px] text-[#02295A] font-medium ">Personal info</h1>
                            <p className="text-[15px] text-[#9699AB] font-normal">Please provide your name, email address, and phone number.</p>
                        </div>
                        <form className="mt-[40px] md:ml-[40px]">
                            <h5 className="text-[15px] ml-[5px text-[#02295A]">Name</h5>
                            <input type="text" placeholder="e.g. Stephen King" className="border-2 md:w-[500px] outline-none p-[10px] rounded-lg mt-[5px]" />
                            <h5 className="text-[15px] ml-[5px] mt-[20px] text-[#02295A]">Email Address</h5>
                            <input type="email" placeholder="e.g. stephenking@lorem.com" className="border-2 md:w-[500px] outline-none p-[10px] rounded-lg mt-[5px]" />
                            <h5 className="text-[15px] ml-[5px] mt-[20px] text-[#02295A]">Phone Number</h5>
                            <input type="number" placeholder="e.g. +1 234 567 890" className="border-2 md:w-[500px] outline-none p-[10px] rounded-lg mt-[5px]" />
                        </form>
                        <button className="p-[9px] font-normal text-md rounded-lg bg-[#02295A] text-[#FFFFFF] md:mt-[110px] md:ml-[450px]">Next Step</button>
                    </div>

                </section>

            </div>
            <button className="p-[9px] md:hidden font-normal text-md rounded-lg bg-[#02295A] text-[#FFFFFF] mt-[30px] ml-[320px] mb-[30px]">Next Step</button>
        </>
    )
}
export default StepOne; 