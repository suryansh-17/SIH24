"use client";
import Link from "next/link";
import LeaderBoard from "@/components/leaderboard";
import AvatarLeaderboard from "@/components/avatar-leaderboard";
import Footer from "@/components/footer";
import Image from "next/image";

import { ConnectWallet } from "@/components/connect-wallet";
import { NavbarDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <div className='px-10 flex justify-between pb-[10px] bg-gradient-to-r from-pink-100 via-blue-500 to-purple-500'>
				<div className='mt-4'>
					<Link href='/'>
						<Image src='/logo.png' width={200} height={0} alt='Logo' />
					</Link>
				</div>
				<div className='mt-6 flex gap-12 text-[20px] text-white'>
					<Link href='https://myriadflow.com' target='_blank'>
						Home
					</Link>
					<Link href='https://discover.myriadflow.com' target='_blank'>
						Discover
					</Link>
					<Link href='https://studio.myriadflow.com' target='_blank'>
						Studio
					</Link>
					<Link href='https://webxr.myriadflow.com/' target='_blank'>
						WebXR
					</Link>
				</div>
				<div className='mt-6'>
					<ConnectWallet />
				</div>
			</div> */}
      <NavbarDemo />
      <div className="flex h-screen bg-[#121212] text-white relative mt-[-25px]">
        <div className="absolute right-0 bottom-[0px] md:left-[25%] w-[140px] lg:w-[337px] h-[125px] lg:h-[316px] bg-[#11D9C5] rounded-full blur-3xl opacity-20" />
        <div className="absolute right-0 top-0 md:right-[10%] w-[140px] lg:w-[337px] h-[125px] lg:h-[316px] bg-[#DF1FDD] rounded-full blur-3xl opacity-20" />

        <div className="w-1/2 h-full px-16 flex flex-col justify-center">
          <div className="text-7xl font-bold text-[#DF1FDD]">WebXR</div>
          <div className="text-6xl font-semibold mt-6 text-[#DF1FDD]">
            Experience & Interact
          </div>
          <div className="text-2xl mt-10">
            Interact with unique AI-powered avatars and brand ambassadors. Buy a
            phygital and own the avatar. Customize and rise to the Leaderboard.
          </div>
          <div className="mt-10">
            <ConnectWallet />
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden">
            {/* <img src="MFsquarebackgroun1.png" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
            <Image
              src="/heroframe.png"
              alt="AI Avatar"
              height={350}
              width={350}
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black via-gray-900 to-purple-900">
        <LeaderBoard />
      </div>

      {/* <div className="bg-gradient-to-r from-black via-gray-900 to-purple-900 pt-20">
        <AvatarLeaderboard />
      </div> */}

      <div className="bg-gradient-to-r from-black via-gray-900 to-purple-900 pt-20">
        {/* Call to Action */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-1 rounded-lg w-96 h-96 flex items-center justify-center bg-transparent border-8 border-transparent rounded-8 bg-gradient-to-r from-black to-gray-800 bg-clip-border">
            <div className="text-center h-80 w-80 flex flex-col items-center justify-center">
              <h1 className="text-white font-bold mb-4 text-3xl">
                Create Profile
              </h1>
              <p className="mb-4 text-white">& Earn Rewards</p>
              <button className="rounded bg-transparent border-8 border-transparent bg-gradient-to-r from-white to-pink-500 bg-clip-border text-black cursor-pointer hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-black via-gray-900 to-purple-900 pt-20">
        <Footer />
      </div>
    </div>
  );
}
