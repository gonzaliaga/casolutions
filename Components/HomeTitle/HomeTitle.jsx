/* import Button from "@/components/button/Button" */
import Link from "next/link"

export default function HomeTitle() {
  const gradientText = {
    background:
      "-webkit-linear-gradient(90deg, hsla(79, 60%, 58%, 1) 0%, hsla(156, 96%, 31%, 1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
  return (
    <div className=" w-full h-full flex flex-col justify-center bg-black/30 py-2 pl-5 space-y-4 z-20">
      <h1 className="text-4xl font-bold animate-fade-left animate-delay-300">
        <span className="text-white"></span><span style={gradientText}>7dev_</span>
      </h1>
      <h2 className="text-lg  font-semibold animate-fade-up animate-delay-300">
        <span className="text-white">Desarrollo de Aplicaciones WEB</span>
      </h2>
      <div className="animate-fade-up animate-delay-400 space-y-4">
        <p className="w-[70%] ">
          {/* Aca va otro titulo si es necesario */}
        </p>
{/*         <div className="md:">
          <Link href="/#">
            <Button text={"Productos"} />
          </Link>
        </div> */}
      </div>
      <div className="flex flex-col justify-items-center ">
        <span className="inline-block animate-bounce rounded-full p-4 bg-transparent text-white text-sm">
          <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </div>
  )
}