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
                    <div className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">

                    </div>
                    {/* text */}
                    <div>
                        <h2>About Me</h2>
                        <h3>I am a Doctor of Philosophy and a Lecturer with over 10 years of experience</h3>
                        <p>With over a decade of expertise as a Doctor of Philosophy specializing in education and management, I have dedicated my career to academia. As a seasoned lecturer, associate professor, and committed researcher, my passion lies in advancing knowledge and fostering critical thinking within the realms of education and management.</p>
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
