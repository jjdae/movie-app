import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Sports = () => {
    const API_KEY=process.env.REACT_APP_API_KEY;
    const [sports, setSports] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
    const URL =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko-KR`;
  

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            console.log(res.data.results)
            setSports(res.data.results);
            setIsLoading(false)
        })
        .catch((err) => {
            console.error('에러 발생:', err);
            setIsLoading(false)
        });
    }, []);

    return (
        <div className='comedy'>
            <h2>코미디</h2>
           {
            isLoading ? (<div className='loading'>로딩중...</div>) : (
            <div className='sports'>
                {sports.map((item,i) => (
                    <Link to={`/sports/${item.id}`}>
                        <div className='sportsWrap' key={i}>
                            <div className="imgbox">
                               {
                                item.poster_path && (
                                     <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.title} />
                                )
                               }
                            </div>
                            <div className="textbox">
                                 <div className="original_name">{item.original_name}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            )
           }
        </div>
    );
};

export default Sports;