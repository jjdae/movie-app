import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";


const DramaDetail = () => {
    const API_KEY=process.env.REACT_APP_API_KEY;
    const {id} = useParams(); 
    const [appDrama, setAppDrama]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=ko-KR&page=1`)
        .then(res => {
            console.log(res.data)
            setAppDrama(res.data)
            setIsLoading(false)
        }).catch(err => {console.error(err)})
    }, [id])
    return (
        <div className='dramaDetail'>
            {
                isLoading ? (<div>로딩중...</div>) : (<div>

                    <div className="imgbox">
                        <img src={`https://image.tmdb.org/t/p/w500${appDrama.backdrop_path}`} alt="" />
                    </div>
                    <div className="textbox">
                        <div className="name">드라마제목 : {appDrama.name}</div>
                        <div className="homepage">홈페이지 주소 : {appDrama.homepage}</div>
                        <div className="created_by">출연진 :{
                            appDrama.created_by && appDrama.created_by.map((activer) => (
                                    <span key={activer.id} className="textBoxtActiver"> {activer.name}</span>
                                ))
                            }</div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DramaDetail;