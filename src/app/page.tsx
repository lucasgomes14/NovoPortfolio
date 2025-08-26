import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-[#1B1717] h-full w-screen font-poppins">
          <div className="max-w-7xl mx-auto px-4">
              <header className="mb-20 w-full flex items-center justify-center relative pt-7">
                  <div className="absolute left-0">
                      <Image src="/lmgl.png" alt="Logo da página" height={150} width={150}/>
                  </div>
                  <ul className="flex items-center space-x-6 text-xl text-[#9A0101] absolute left-1/2 transform -translate-x-1/2">
                      <li>
                          <a className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-[#C90000] after:transition-all after:duration-300
                  hover:after:w-full">
                              Início
                          </a>
                      </li>
                      <li>
                          <a className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-[#C90000] after:transition-all after:duration-300
                  hover:after:w-full">
                              Sobre mim
                          </a>
                      </li>
                      <li>
                          <a className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-[#C90000] after:transition-all after:duration-300
                  hover:after:w-full">
                              Tecnologias
                          </a>
                      </li>
                      <li>
                          <a className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-[#C90000] after:transition-all after:duration-300
                  hover:after:w-full">
                              Projetos
                          </a>
                      </li>
                      <li>
                          <a className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-[#C90000] after:transition-all after:duration-300
                  hover:after:w-full">
                              Contatos
                          </a>
                      </li>
                  </ul>
              </header>
              <main className={"bg-white h-screen"}></main>
          </div>
      </div>
);
}
