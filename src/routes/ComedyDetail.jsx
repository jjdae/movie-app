import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




const ComedyDetail = () => {
    const {id} = useParams();
    const API_KEY=process.env.REACT_APP_API_KEY;
    const [comedy, setComedy] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const URL =`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&with_genres=35&language=ko-KR`;

    useEffect(() =>{
        axios.get(URL).then(res=>{
            console.log(res);
            setComedy(res.data)
            setIsLoading(false)
        })
    }, [id])
    return (
        <div className='comedysDetail'>
            {isLoading ? (<div>로딩중...</div>) : (
            <div className='comedys'>
                <div className="imgbox">
                    <img src={`https://image.tmdb.org/t/p/w500/${comedy.backdrop_path}`} alt={comedy.title} />
                </div>
                <div className="textBox">
                            <div className="textBoxtTitle">{comedy.title}</div>
                            <div className="textBoxtOriginal_title">{comedy.original_title}</div>
                            <div className="textBoxtOverview">{comedy.overview}</div>
                            <div className="textBoxtRelease_date">개봉일 : {comedy.release_date}</div>
                            <div className="textBoxtVote_average">평점 : ⭐ {comedy.vote_average}</div>
                            <div className="textBoxtVote_count">좋아요 : ❤️ {comedy.vote_count}</div>
                            <div className="textBoxtPopularity">인기도 : {comedy.popularity}</div>
                            <div className="textBoxtStatus">상태 : {comedy.status}</div>
                            <div className="textBoxtTagline">태그라인 : {comedy.tagline}</div> 
                            <div className="textBoxtGenres">
                                {comedy.genres && comedy.genres.map((genre) => (
                                    <span key={genre.id} className="textBoxtGenre">{genre.name}</span>
                                ))}
                            </div>  
                        </div>
            </div>)}
            
        </div>
    );
};

export default ComedyDetail;