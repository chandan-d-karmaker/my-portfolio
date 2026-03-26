import homeImg from "../assets/heroImg.png";
import logoBox from "../assets/LogoBox.svg";
import Dots from "../assets/Dots.svg"

function QuoteBlock() {
    return (
        <div className="mt-10 mb-6 hidden md:block">
            <div className="mx-auto max-w-2xl">
                <div className="rounded-none border border-white/15 bg-white/5 px-6 py-6">
                    <div className="text-sm leading-relaxed text-white/70">
                        “With great power comes great electricity bill”
                    </div>
                    <div className="mt-4 flex items-center justify-end text-xs text-white/50">
                        -Dr. who
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function HeroSection() {
    return (
        <section id="home" className="relative scroll-mt-24 pt-10 md:pt-14">
            <div className="mx-auto max-w-7xl px-6 pb-10 md:pb-16">
                <div className="grid gap-10 md:grid-cols-2 md:items-start">
                    <div>
                        <div className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                            <span className="text-white">Chandan</span>{" "}
                            <span className="text-white">is a</span>{" "}
                            <span className="text-purple-400">Full-Stack</span> Web developer
                        </div>

                        <p className="mt-5 max-w-prose text-sm leading-relaxed text-white/60 md:text-base">
                            He crafts responsive websites where technologies meet
                            creativity.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="#contacts"
                                className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
                            >
                                Contact me!!
                            </a>
                        </div>

                        <QuoteBlock />


                    </div>

                    <div className="relative">
                        <div className="relative mx-auto max-w-lg">

                            <div className="absolute left-2 top-6">
                                <img src={logoBox} alt="" />
                            </div>
                            <div className="absolute right-4 bottom-8 z-30">
                                <img src={Dots} alt="" />
                            </div>


                            <div className="relative h-130 w-full">
                                <img
                                    src={homeImg}
                                    alt=""
                                    className="h-full w-full"
                                    draggable={false}
                                />
                                <div className="rounded-none border border-white/10 bg-white/5 px-4 py-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-4 w-4 bg-purple-400" />
                                        <div className="text-xs leading-relaxed text-white/70">
                                            Currently working on <span className="mt-1 text-sm font-semibold text-white">Portfolio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

