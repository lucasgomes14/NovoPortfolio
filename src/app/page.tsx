import Image from "next/image";
import Background from "@/components/ui/Background";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Home() {
    return (
        <div className="bg-[#1B1717] h-full w-screen font-poppins">
            <Background />
            <div
                className={"fixed top-10 left-20 w-72 h-72 rounded-full bg-radial from-white/40 to-transparent blur-3xl -z-10"}></div>
            <div className="max-w-7xl mx-auto">
                <header className="w-full flex items-center justify-center relative pt-7">
                    <div className="absolute left-0">
                        <Image src="/lmgl.png" alt="Logo da página" height={150} width={150}/>
                    </div>
                    <ul className="flex items-center space-x-6 text-xl text-[#9A0101] absolute left-1/2 transform -translate-x-1/2">
                        <li>
                            <a href={"#main"} className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-[#C90000] after:transition-all after:duration-300
                  hover:after:w-full">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href={"#sobreMim"} className="relative cursor-pointer text-[#9A0101] hover:text-[#C90000]
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
                <main className="min-h-screen flex flex-col items-center justify-center">
                    <section id={"main"} className={"flex flex-col text-center w-1/2"}>
                        <h1 className={"flex flex-col text-[#909595] mb-4"}>
                            <span className={"text-2xl"}>Olá, eu sou </span>
                            <span className={"font-bold text-3xl"}>Lucas Matheus </span>
                            <span className={"text-2xl"}>Desenvolvedor Full Stack </span>
                        </h1>
                        <p className={"text-[#9A0101] text-lg"}>Sou um desenvolvedor apaixonado por criar soluções
                            eficientes e inovadoras. Busco sempre aprender e aplicar as melhores tecnologias e práticas
                            de desenvolvimento.
                        </p>
                        <div className={"mt-10"}>
                            <Button asChild className={"bg-[#9A0101] hover:bg-[#650A0B] hover:text-[#909595] mr-3"}>
                                <Link href="/curriculoNovo.pdf" download>
                                    <IoDocumentTextOutline /> Currículo
                                </Link>
                            </Button>
                            <Button asChild className={"bg-[#9A0101] hover:bg-[#650A0B] hover:text-[#909595] mr-3"}>
                                <Link href="#contatos">
                                    <MdOutlinePhone /> Contato
                                </Link>
                            </Button>
                        </div>
                    </section>
                    <section id={"sobreMim"} className={""}>
                    </section>
                </main>
            </div>
        </div>
    );
}
