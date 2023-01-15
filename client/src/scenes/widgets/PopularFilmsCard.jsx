import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Box, Typography, Divider,Button } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";

const PopularFilmsCard = () => {
  const [movieData, setMovieData] = useState([]);
   

  useEffect(() => {
    getTrendingMovieData("movie");
    
  }, []);

  async function getTrendingMovieData2(type) {
    try {
      const apiKey = '5f553c96c5d14cacf3dce0a3a71b38ea';
      let resp = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`); 
      
      console.log(21, resp.data.results);
      
      setMovieData(resp.data.results);
      

    } catch (e) {


    } finally {

    }

  }
  async function getTrendingMovieData(type) {
    try {
      const apiKey = '5f553c96c5d14cacf3dce0a3a71b38ea';
      let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`);
      
      console.log(21, resp.data.results);
      
      setMovieData(resp.data.results);
      

    } catch (e) {


    } finally {

    }

  }
  return (
    <>
      <WidgetWrapper>
        <Box display="flex" justifyContent="center" >

          <Box m={2}>
            <Typography variant="h2">
              Popüler Film ve Diziler
            </Typography>
             <Divider />
            <Box m={2} ml={6} display={"flex"} marginRight={"20px"} alignItems={"center"} >
              <Button color="secondary" onClick={()=> getTrendingMovieData("movie")} style={{padding:15,gap:10}}>
                TREND FİLMLER
              </Button>
              <Button color="secondary" onClick={() => getTrendingMovieData("tv")} style={{padding:15,gap:10}}>
                TREND DİZİLER
              </Button>
              <Button color="secondary" onClick={() => getTrendingMovieData2("top_rated")} style={{padding:15,gap:10}}>
                EN İYİ FİLMLER
              </Button>

              
            </Box>
              <Divider />
              <Divider />
              <Divider />
            <Box mt={3}>
             
        <Box m={3}>
                {movieData.map((item) =>
            
            <div>
  
              
              <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="resim"/>
              <div className="movie_name">
                <Typography variant="h4" style={{ color: '#EA3742', fontWeight: 'bold', padding:'10px' }}>
                    {item.original_title ? item.original_title : item.original_name}
                </Typography>
                
                <Divider />
                <Divider />
              

              </div>
            </div>
          )}
              </Box>
              </Box>
          </Box>
          </Box>
        </WidgetWrapper>
    </>
  );
}

export default PopularFilmsCard;
