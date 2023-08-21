import React,{useState} from "react";
import { Box } from "@mui/material";
import HeorBanner from "../components/HeorBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  
  return( 
  <Box>
    <HeorBanner/>
    <SearchExercises setExercises={setExercises}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
    />
    <Exercises 
    setExercises={setExercises}
    bodyPart={bodyPart}
    exercises={exercises}
    />
  </Box>)
};

export default Home;
