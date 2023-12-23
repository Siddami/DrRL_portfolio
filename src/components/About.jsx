import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import {motion} from "framer-motion"
import { fadeIn } from "../variants"

function About(){
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return(
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div>
                    {/* img */}
                    <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">

                    </div>
                    {/* text */}
                    <div>
                        <h2>About Me</h2>
                        <h3>I am a Doctor of Philosophy and a Lecturer with over 10 years of experience</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi nemo neque quaerat ad voluptates modi, non odio. Praesentium dignissimos tenetur sed perspiciatis a adipisci quaerat vel illum totam sunt?</p>
                        {/* stats */}
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
