import {useState, useEffect} from 'react';
import { GoMoveToTop } from "react-icons/go";

const QuickBtn = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () =>{
            setIsVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const scrollTop = () =>{
        window.scrollTo({top:0, behavior:"smooth"})
    }
    return isVisible && (
        <div className='quickBtn'>
            <button className="top" onClick={scrollTop}>
                <GoMoveToTop className='upbtn' />
            </button>
        </div>
    );
};

export default QuickBtn;