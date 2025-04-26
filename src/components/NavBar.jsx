import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs'
import { Link as ScrollLink } from 'react-scroll'

function Navbar(){
    return(
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className="container max-auto">
                {/* Inner nav */}
                <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl items-center text-accent'>
                    <ScrollLink to='home'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          offset={-200}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
                        <BiHomeAlt/>
                    </ScrollLink>
                    <ScrollLink to='about'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
                        <BiUser/>
                    </ScrollLink>
                    <ScrollLink to='services'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
                        <BsClipboardData/>
                    </ScrollLink>
                    <ScrollLink to='work'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
                        <BsBriefcase/>
                    </ScrollLink>
                    <ScrollLink to='contact'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
                        <BsChatSquareText/>
                    </ScrollLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
