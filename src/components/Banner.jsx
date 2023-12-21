import { IoIosMail } from "react-icons/io"
import { SiGooglescholar } from "react-icons/si";
import {FaYoutube} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variant'

function Banner(){
    return(
        <section className="min-h-[85vh]" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/* text */}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
                            DR. RL <span>ABDULKAREEM</span>
                        </h1>
                        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='text-white mr-4'>I am </span>
                            <TypeAnimation sequence={[
                                'an Academia',
                                2000,
                                'a Researcher',
                                2000,
                                'a Lecturer',
                                2000,
                                'a Dr. of Philosophy',
                                2000
                            ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                            />
                        </div>
                        <p className="mb-8 max-w-lg max-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repellendus a dignissimos enim corporis molestiae eius cum expedita, quasi magnam sequi assumenda pariatur maxime nisi velit inventore ipsum veniam tenetur!</p>
                        <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button className='btn btn-lg'>Contact Me</button>
                            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
                        </div>
                        {/* socials */}
                        <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
                            <a href="#">
                                <FaYoutube />
                            </a>
                            <a href="#">
                                <SiGooglescholar />
                            </a>
                            <a href="#">
                                <IoIosMail />
                            </a>
                        </div>
                    </div>
                    {/* image */}
                    <div>
                       <img src="/images/drRL.png" alt="Dr RL holding a microphone" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
