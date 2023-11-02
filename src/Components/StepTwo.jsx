import Arcade from "../assets/IMG/icon-arcade.svg"
import Advance from "../assets/IMG/icon-advanced.svg"
import Pro from "../assets/IMG/icon-pro.svg"
const StepTwo = () => {
    return (
        <>
            <div className="bg-[#F0F6FF] md:h-[715px] h-[670px] md:flex md:justify-center">
                <div className="md:hidden bg-[url('assets/IMG/Desktopbg.svg')]  bg-contain bg-no-repeat w-[100%] h-[200px]">
                    <div className="flex justify-center">
                        <div className="mt-[40px]">
                            <span className="rounded-full px-[12px] py-[7px] border-2 text-[#FFFFFF]">1</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">2</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">3</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">4</span>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] mt-[50px] mx-[10px] rounded-xl h-[520px]">
                        <div className="pt-[20px] pl-[20px]">
                            <h1 className="text-[30px] text-[#02295A] font-medium ">Select Your Plan</h1>
                            <p className="text-[14px] text-[#9699AB] w-[75%] font-normal">You have the option of monthly or yearly billing.</p>
                        </div>
                        <div className="px-[20px] mt-[25px]">
                            <div className="border-2 rounded-xl border-[#473DFF] w-[100%] flex">
                                <img src={Arcade} className="ml-[20px] m-[10px] w-[15%]" />
                                <div className="mt-[10px] m-[10px]">
                                    <h2 className="text-[#02295A] text-[18px] font-medium">Arcade</h2>
                                    <p className="text-[#9699AB] text-[15px] font-normal">$9/mo</p>
                                </div>
                            </div>
                            <div className="border-2 rounded-xl border-[#9699AB] w-[100%] flex mt-[25px]">
                                <img src={Advance} className="ml-[20px] m-[10px] w-[15%]" />
                                <div className="mt-[10px] m-[10px]">
                                    <h2 className="text-[#02295A] text-[18px] font-medium">Advanced</h2>
                                    <p className="text-[#9699AB] text-[15px] font-normal">$12/mo</p>
                                </div>
                            </div>
                            <div className="border-2 rounded-xl border-[#9699AB] w-[100%] flex mt-[25px]">
                                <img src={Pro} className="ml-[20px] m-[10px] w-[15%]" />
                                <div className="mt-[10px] m-[10px]">
                                    <h2 className="text-[#02295A] text-[18px] font-medium">Pro</h2>
                                    <p className="text-[#9699AB] text-[15px] font-normal">$15/mo</p>
                                </div>
                            </div>
                        </div>
                        <span className="flex bg-[#FAFBFF] w-[90%] justify-center rounded-sm p-[10px] mt-[25px] ml-[20px]">
                            <h3 className="text-[#02295A] text-[15px] font-medium pr-[20px]">Monthly</h3>

                            <h3 className="text-[#9699AB] text-[15px] font-normal pl-[20px]">Yearly</h3>
                        </span>
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
                            <h1 className="md:text-[30px] text-[#02295A] font-medium ">Select Your Plan</h1>
                            <p className="text-[15px] text-[#9699AB] font-normal">You have the option of monthly or yearly billing.</p>
                        </div>
                        <div className=" mt-[40px] ml-[40px] flex">
                            <div className="border-2 rounded-xl border-[#473DFF] w-[150px] h-[180px] ">
                                <img src={Arcade} className="ml-[20px] mt-[20px]" />
                                <div className="mt-[40px] ml-[20px]">
                                    <h2 className="text-[#02295A] text-[18px] font-medium">Arcade</h2>
                                    <p className="text-[#9699AB] text-[15px] font-normal">$9/mo</p>
                                </div>
                            </div>
                            <div className="border-2 rounded-xl border-[#9699AB] w-[150px] h-[180px] ml-[30px]">
                                <img src={Advance} className="ml-[20px] mt-[20px]" />
                                <div className="mt-[40px] ml-[20px]">
                                    <h2 className="text-[#02295A] text-[18px] font-medium">Advanced</h2>
                                    <p className="text-[#9699AB] text-[15px] font-normal">$12/mo</p>
                                </div>
                            </div>
                            <div className="border-2 rounded-xl border-[#9699AB] w-[150px] h-[180px] ml-[30px]">
                                <img src={Pro} className="ml-[20px] mt-[20px]" />
                                <div className="mt-[40px] ml-[20px]">
                                    <h2 className="text-[#02295A] text-[18px] font-medium">Pro</h2>
                                    <p className="text-[#9699AB] text-[15px] font-normal">$15/mo</p>
                                </div>
                            </div>
                        </div>
                        <span className="flex bg-[#FAFBFF] w-[80%] justify-center rounded-sm p-[10px] mt-[40px] ml-[70px]">
                            <h3 className="text-[#02295A] text-[15px] font-normal pr-[20px]">Monthly</h3>

                            <h3 className="text-[#9699AB] text-[15px] font-normal pl-[20px]">Yearly</h3>
                        </span>
                        <div className=" flex justify-between mt-[90px]">
                            <button className="text-[#9699AB] font-normal text-[15px] ml-[70px]">Go Back</button>
                            <button className="p-[10px] font-normal text-md rounded-lg bg-[#02295A] text-[#FFFFFF] w-[20%]">Next Step</button>
                        </div>
                    </div>

                </section>

            </div>
            <div className="md:hidden flex justify-between px-[20px] py-[20px]">
                            <button className="text-[#9699AB] font-normal text-[15px]">Go Back</button>
                            <button className="p-[10px] font-normal text-md rounded-md bg-[#02295A] text-[#FFFFFF] w-[30%]">Next Step</button>
                        </div>
        </>
    )
}
export default StepTwo;