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
                        <div className={"mt-5"}>
                            <Button asChild className={"bg-[#DFC582] text-[#031926] font-semibold rounded-full mr-3 hover:shadow-lg hover:shadow-[#DFC582]/50 transition-shadow hover:bg-[#DFC582]"}>
                                <Link href="#projetos">
                                    Meus trabalhos
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
                <section
                    id="sobreMim"
                    className="relative h-screen w-full rounded-bl-[25rem] rounded-br-[12rem] bg-[#468189]/50 overflow-hidden flex items-center justify-end px-10"
                >
                    {/* imagem no fundo */}
                    <Image
                        src="/sobremim.png"
                        alt="Sobre mim imagem"
                        width={300}
                        height={300}
                        className="absolute bottom-0 left-1/5 -translate-x-1/2 w-full max-w-sm h-auto"
                    />

                    {/* conteúdo alinhado */}
                    <div className="max-w-xl mr-15 text-[#F2F5FA] text-sm">
                        <h2 className="text-4xl font-semibold">Sobre mim</h2>
                        <div className="h-1 w-20 bg-[#DFC582] mt-3 rounded-full"></div>
                        <p className="mt-6">
                            Olá! Sou Lucas Matheus, estudante de Análise e Desenvolvimento de Sistemas no
                            IFPB – Campus Esperança, com conclusão prevista para 2025. Apaixonado por tecnologia, tenho
                            experiência prática em projetos acadêmicos e pessoais que envolvem back-end, front-end e
                            mobile,
                            utilizando principalmente Java (Spring Boot), React.js, React Native e Kotlin.
                        </p>
                        <p className="mt-4">
                            Já desenvolvi aplicações com microsserviços, autenticação segura e integração com RabbitMQ,
                            além de trabalhar com bancos de dados relacionais e não relacionais. Também atuei em equipes
                            ágeis com Scrum, participando de sprints, dailies e revisões, o que me trouxe experiência em
                            colaboração e entrega contínua.
                        </p>
                        <p className="mt-4">
                            Tenho maior interesse em atuar como desenvolvedor back-end, mas minha vivência
                            em outras áreas me permite enxergar soluções de forma full stack. Meu objetivo é aplicar
                            meus conhecimentos em projetos reais, contribuir para equipes colaborativas e continuar
                            evoluindo como profissional.
                        </p>
                        <div className={"mt-10"}>
                            <Button asChild className={"bg-transparent text-[#DFC582] mr-3 rounded-full border hover:shadow-lg hover:shadow-[#F2F5FA]/50 transition-shadow hover:bg-transparent font-semibold"}>
                                <Link href="#contatos">
                                    <MdOutlinePhone/> Contato
                                </Link>
                            </Button>
                            <Button asChild className={"bg-[#DFC582] text-[#031926] rounded-full hover:shadow-lg hover:shadow-[#DFC582]/50 transition-shadow hover:bg-[#DFC582] font-semibold"}>
                                <Link href="/curriculoNovo.pdf" download>
                                    <IoDocumentTextOutline/> Download CV
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
