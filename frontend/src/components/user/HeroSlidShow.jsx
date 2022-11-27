import React, {useState, useEffect} from 'react'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import { getLatestUploads } from '../../api/movie';
import { useNotification } from '../../hooks';

export default function HeroSlidShow() {
    const [slide, setSlide] = useState({});
    const [movies, setMovies] = useState([]);

    const {updateNotification} = useNotification();

    const fetchLatesUPloads = async () => {
        const {error, movies} = await getLatestUploads();
        if(error) return updateNotification('error', error);

        setMovies([...movies]);
        setSlide(movies[0]);
    }
    useEffect(() => {
        fetchLatesUPloads();
    }, []);

    return (
        <div className='w-full flex'>
            <div className='w-4/5 aspect-video relative'>
                <img src={slide.poster} alt=""  />
                <SlideShowController />
            </div>
            <div className='w-1/5 aspect-video bg-red-300'></div>
        </div> 
    )
}

const SlideShowController = ({onNextClick, onPrevClick}) => {
    const btnClass = "bg-primary border-white rounded border-2 text-white text-xl p-2 outline-none";
    return (
        <div className='absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between px-2'>
                    <button onClick={onPrevClick} className={btnClass} type='button'>
                        <AiOutlineDoubleLeft />
                    </button>
                    <button onClick={onNextClick} className={btnClass} type='button'>
                        <AiOutlineDoubleRight />
                    </button>
        </div>
    )
}
