import Headers from "@/src/components/headers";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import Navigation from "@/src/components/navigation";
import { onmouseleave } from "@/src/custom-cursor";
import Image from "next/image";
import ArrowDown from "@/assets/arrowDown.svg";
import React from "react";
import { Store } from "@/context";
import Footer from "@/src/components/footer";
import { jobs } from "@/data/jobs";
import Link from "next/link";

export default function Careers() {
  const { height } = React.useContext(Store);
  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#FDFDFD] flex flex-col"
        style={{ height }}
      >
        <Navigation />
        <Headers />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] text-5xl sm:text-8xl lg:text-[4.3vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col lg:leading-[5vw] lg:flex-row">
                Creative. Passionate.
              </div>
              <span className=" font-[Arial] text-5xl sm:text-8xl lg:text-[4.3vw]">
                Dedicated.
              </span>
            </div>
            <span className="font-[PPNeueMontreal] leading-[1.5] flex-col hidden sm:flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
              {`We know that finding a meaningful and rewarding\n
               job can be difficult at times. Our goal is to simplify\n
                that process for you. Ready to join the\n
                 revolution? Browse through the available\n
                  jobs and apply today. `
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
            <span className="font-[PPNeueMontreal] leading-[1.5] flex-col flex sm:hidden mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
              {`We know that finding a meaningful and\n 
              rewarding job can be difficult at times.\n
               Our goal is to simplify that process for \n
               you. Ready to join the revolution? Browse\n
                through the available jobs and apply\n
                 today. `
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <div className="flex w-full lg:absolute bottom-10 justify-center">
          <div className="flex w-[85%] justify-end">
            <div
              onClick={() => window.scrollTo(0, height)}
              className="button cursor-pointer w-32 lg:w-48 h-32 lg:h-48 flex flex-col items-center justify-between"
            >
              <div className="lg:w-36 w-24 h-24 lg:h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
                <Image src={ArrowDown} />
              </div>
              <h1 className="font-bold text-xl lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
                Scroll Down
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex py-20 lg:py-[5vw] justify-center">
        <div className="hidden sm:flex w-full font-[PPNeueMontreal] sm:w-[60%] border-t border-black">
          <table className="w-full text-sm text-left text-black">
            <thead className="text-xs text-gray-500 uppercase ">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Hours
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((i) => (
                <Link
                  key={"dsadasd" + i.id}
                  href={"mailto:gopal.batra@incubr.com"}
                >
                  <tr className="bg-white cursor-pointer border-b border-black">
                    <td
                      scope="row"
                      className="px-2 lg:px-6 py-8 text-xl lg:text-[3vw] font-medium text-gray-900 whitespace-nowrap"
                    >
                      {i.title}
                    </td>
                    <td className="px-6 py-4 lg:text-[1.2vw]">{i.hours}</td>
                    <td className="px-6 py-4 lg:text-[1.2vw]">{i.location}</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden block w-full px-5">
          <div className="sm:hidden flex flex-col w-full font-[PPNeueMontreal] sm:w-[60%] border-t border-black">
            {jobs.map((i) => (
              <Link key={"fgfrt" + i.id} href={"mailto:gopal.batra@incubr.com"}>
                <div className="flex flex-col w-full relative p-5 border-b border-black">
                  <h1 className="text-4xl pb-3">{i.title}</h1>
                  <table className="w-full mt-5 italic text-sm text-left text-black">
                    <thead className="text-xs text-gray-500 uppercase ">
                      <tr>
                        <th scope="col" className=" py-1">
                          Hours
                        </th>
                        <th scope="col" className=" py-1">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white text-xl ">
                        <td className=" py-2">{i.hours}</td>
                        <td className=" py-2">{i.location}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[20vh]"></div>
      <Footer isDark />
    </div>
  );
}
