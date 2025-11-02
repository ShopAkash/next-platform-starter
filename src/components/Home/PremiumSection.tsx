import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PremiumSection = () => {

    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
    const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation<HTMLDivElement>();
    const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation<HTMLDivElement>();
    const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation<HTMLDivElement>();


    return (
        <section className="py-32 lg:py-40 bg-gray-950">
            {/* Premium Support Section */}
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`} >
                <div className={`grid lg:grid-cols-2 lg:gap-16 items-start ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`} ref={titleRef}
                >
                    <div>
                        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8`}>
                            Premium Gym Support,<br />at Scale
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl text-white/80 mb-12">
                            As a Brocan Gym Management user, you gain access to priority support and a robust platform that empowers your gym business to achieve its unique goals.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-16">
                    {/* Sites at scale */}
                    <div className={`bg-gray-800 rounded-lg h-fit overflow-hidden ${section1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`} ref={section1Ref}
                    >
                        <div className="p-6 mt-4 lg:mt-0 lg:p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4 lg:mb-6">Gyms at Scale</h3>
                            <p className="text-white/80 text-lg">
                                Easily create, organize, and manage as many gym branches or locations as needed—from a single club to dozens or hundreds—without limits. Track equipment, staff, and memberships across all facilities.
                            </p>
                        </div>
                        <div className="h-[20rem] mt-4 bg-[url('/assets/Gyms-at-Scale.webp')] bg-cover bg-center bg-top">

                        </div>
                    </div>

                    {/* Concierge support */}
                    <div className={`rounded-lg h-fit overflow-hidden bg-gray-300 ${section1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`} ref={section1Ref}
                    >
                        <div className="p-6 mt-4 lg:mt-0 lg:p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Concierge Support</h3>
                            <p className="text-lg text-gray/80">
                                Experience dedicated assistance for setting up your gym operations, managing member data, and launching new services or fitness programs—so you can focus on growing your gym faster.
                            </p>
                        </div>
                        <div className="h-[20rem] mt-4 bg-[url('/assets/Concierge-Support.webp')] bg-cover bg-center bg-top">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PremiumSection;