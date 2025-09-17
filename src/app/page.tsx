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
            <div className="max-w-7xl mx-auto">
                <header className="w-full flex justify-around items-center bg-[#1B1717] py-5">
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
                <main className="min-h-screen flex flex-col items-center justify-center">
                <section id={"main"} className={"flex flex-col justify-center text-center w-1/2 h-screen"}>
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
                            <Button asChild className={"bg-[#9A0101] hover:bg-[#650A0B] hover:text-[#909595]"}>
                                <Link href="#contatos">
                                    <MdOutlinePhone /> Contato
                                </Link>
                            </Button>
                        </div>
                    </section>
                    <section id={"sobreMim"} className={"h-screen w-2/3 flex flex-col items-center text-center text-[#9A0101]"}>
                        <h2 className={"tracking-[.5em] uppercase mt-20 mb-10 text-[#909595] text-lg px-7 py-2 font-semibold border-2 border-[#909595] rounded-xs"}>
                            Sobre mim
                        </h2>
                        <p className={""}>Olá! Sou Lucas Matheus, estudante de Análise e Desenvolvimento de Sistemas no IFPB – Campus Esperança, com conclusão prevista para 2025. Apaixonado por tecnologia, tenho experiência prática em projetos acadêmicos e pessoais que envolvem <span className={"font-semibold text-[#C90000]"}>back-end, front-end e mobile</span>, utilizando principalmente <span className={"font-semibold text-[#C90000]"}>Java (Spring Boot), React.js, React Native e Kotlin.</span></p>
                        <p className={""}>Já desenvolvi aplicações com <span className={"font-semibold text-[#C90000]"}>microsserviços, autenticação segura e integração com RabbitMQ</span>, além de trabalhar com bancos de dados relacionais e não relacionais. Também atuei em equipes ágeis com Scrum, participando de sprints, dailies e revisões, o que me trouxe experiência em colaboração e entrega contínua.</p>
                        <p className={""}>Tenho maior interesse em atuar como <span className={"font-semibold text-[#C90000]"}>desenvolvedor back-end</span>, mas minha vivência em outras áreas me permite enxergar soluções de forma <span className={"font-semibold text-[#C90000]"}>full stack</span>. Meu objetivo é aplicar meus conhecimentos em projetos reais, contribuir para equipes colaborativas e continuar evoluindo como profissional.</p>
                        <p className={""}></p>
                    </section>
                </main>
            </div>
        </div>
    );
}
