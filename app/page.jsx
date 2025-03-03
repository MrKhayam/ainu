'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="w-full z-50 h-screen bg-[#020617] relative overflow-hidden gap-8 flex flex-col items-center justify-center font-[Geist] text-white">





      <div className=" h-full w-full absolute -z-50"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>




        
        <div className="w-full h-14 absolute top-0 flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">Ainu</h1>
        <Button disabled variant="secondary" className={"cursor-pointer"}>Sign In</Button>
        </div>
        <h1 className="md:text-6xl text-4xl text-center">World's First Ai <span className="font-bold text-[#d59fe2]">Copywriter</span></h1>
        <div className="flex gap-3 w-full justify-center md:px-40 flex-wrap">
          <Button variant="secondary" className={"cursor-pointer"}><Link href="/product-description">Product Description Copywriter </Link><FaLongArrowAltRight /> </Button>
          <Button disabled variant="secondary" className={"cursor-pointer"}>Email Copywriter</Button>
          <Button disabled variant="secondary" className={"cursor-pointer"}>Sales Copywriter</Button>
          <Button disabled variant="secondary" className={"cursor-pointer"}>Social Media Copywriter</Button>
        </div>
        <div className="footer absolute flex flex-col items-center justify-center bottom-0 w-full h-20">
          <p className="text-sm">Founder: Khayam Ijaz</p>
          <p className="text-sm">Co-Founder: Anam Naheed</p>
          <p className="text-sm">© 2025 Ainu. All rights reserved.</p>


        </div>
      </div>
          
    </>
  );
}