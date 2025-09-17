import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Home() {
    return (
        <div className="bg-[#031926] h-full w-screen font-poppins">
            <main className="min-h-screen w-full flex flex-col items-center justify-center">
                <div className={"flex flex-col w-full justify-center items-center bg-[url('/bg.png')] bg-cover bg-center bg-[#468189]/10"}>
                    <header className="w-full flex justify-around items-center py-5">
                        <div className="">
                            <a href={"#main"}><Image src="/lmgl.png" alt="Logo da página" height={130} width={130}/></a>

                        </div>
                        <ul className="flex items-center space-x-6 text-xl text-[#F2F5FA]">
                            <li>
                                <a href={"#main"} className="relative cursor-pointer hover:text-[#DFC582]
                              after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                              after:bg-[#DFC582] after:transition-all after:duration-300
                              hover:after:w-full">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href={"#sobreMim"} className="relative cursor-pointer hover:text-[#DFC582]
                              after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                              after:bg-[#DFC582] after:transition-all after:duration-300
                              hover:after:w-full">
                                    Sobre mim
                                </a>
                            </li>
                            <li>
                                <a className="relative cursor-pointer hover:text-[#DFC582]
                              after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                              after:bg-[#DFC582] after:transition-all after:duration-300
                              hover:after:w-full">
                                    Tecnologias
                                </a>
                            </li>
                            <li>
                                <a className="relative cursor-pointer hover:text-[#DFC582]
                              after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                              after:bg-[#DFC582] after:transition-all after:duration-300
                              hover:after:w-full">
                                    Projetos
                                </a>
                            </li>
                            <li>
                                <a className="relative cursor-pointer hover:text-[#DFC582]
                              after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                              after:bg-[#DFC582] after:transition-all after:duration-300
                              hover:after:w-full">
                                    Contatos
                                </a>
                            </li>
                        </ul>
                    </header>
                    <section id={"main"} className={"flex flex-col items-center justify-center w-3/5 text-center h-screen"}>
                        <h1 className={"uppercase text-[#DFC582] mb-2 font-black text-4xl"}>
                            Eu sou Lucas Gomes<br />& eu sou <span className={"text-[#F2F5FA]"}>desenvolvedor full stack.</span>
                        </h1>
                        <p className={"text-[#F2F5FA] text-sm px-10"}>Sou um desenvolvedor apaixonado por criar soluções
                            eficientes e inovadoras. Busco sempre aprender e aplicar as melhores tecnologias e
                            práticas de desenvolvimento.
                        </p>
                        <div className={"mt-10"}>
                            <Button asChild className={"bg-[#DFC582] text-[#031926] rounded-full mr-3 hover:shadow-lg hover:shadow-[#DFC582]/50 transition-shadow hover:bg-[#DFC582]"}>
                                <Link href="/curriculoNovo.pdf" download>
                                    <IoDocumentTextOutline/> Currículo
                                </Link>
                            </Button>
                            <Button asChild className={"bg-[#DFC582] text-[#031926] rounded-full hover:shadow-lg hover:shadow-[#DFC582]/50 transition-shadow hover:bg-[#DFC582]"}>
                                <Link href="#contatos">
                                    <MdOutlinePhone/> Contato
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
                <section id={"sobreMim"}
                         className={"h-screen w-2/3 flex flex-col items-center text-center text-[#9A0101]"}>
                    <h2 className={"tracking-[.5em] uppercase mt-20 mb-10 text-[#909595] text-lg px-7 py-2 font-semibold border-2 border-[#909595] rounded-xs"}>
                        Sobre mim
                    </h2>
                    <p className={""}>Olá! Sou Lucas Matheus, estudante de Análise e Desenvolvimento de Sistemas no
                        IFPB – Campus Esperança, com conclusão prevista para 2025. Apaixonado por tecnologia, tenho
                        experiência prática em projetos acadêmicos e pessoais que envolvem <span
                            className={"font-semibold text-[#C90000]"}>back-end, front-end e mobile</span>,
                        utilizando principalmente <span className={"font-semibold text-[#C90000]"}>Java (Spring Boot), React.js, React Native e Kotlin.</span>
                    </p>
                    <p className={""}>Já desenvolvi aplicações com <span className={"font-semibold text-[#C90000]"}>microsserviços, autenticação segura e integração com RabbitMQ</span>,
                        além de trabalhar com bancos de dados relacionais e não relacionais. Também atuei em equipes
                        ágeis com Scrum, participando de sprints, dailies e revisões, o que me trouxe experiência em
                        colaboração e entrega contínua.</p>
                    <p className={""}>Tenho maior interesse em atuar como <span
                        className={"font-semibold text-[#C90000]"}>desenvolvedor back-end</span>, mas minha vivência
                        em outras áreas me permite enxergar soluções de forma <span
                            className={"font-semibold text-[#C90000]"}>full stack</span>. Meu objetivo é aplicar
                        meus conhecimentos em projetos reais, contribuir para equipes colaborativas e continuar
                        evoluindo como profissional.</p>
                    <p className={""}></p>
                </section>
            </main>
        </div>
    );
}
