import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData';
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails= () => {
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([]);
const [exerciseVideos, setExerciseVideos] = useState([]);
const [exerciseDetail, setExerciseDetail] = useState({});
const {id}=useParams();

// fetching api from rapid api
useEffect(() => {
  const fetchExercisesData=async()=>{
const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
  
const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)//exerciseOptions allows us to use the api as it is a key 
setExerciseDetail(exerciseDetailData);

const exerciseVideoData= await fetchData
(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
setExerciseVideos(exerciseVideoData.contents);

const targetMuscleExerciseData=await fetchData(
  `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
  setTargetMuscleExercises(targetMuscleExerciseData);

const equipmentExercisesData=await fetchData(
  `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
  setEquipmentExercises(equipmentExercisesData);

}
  fetchExercisesData();
}, [id]);


 return(

 <Box>
<Detail exerciseDetail={exerciseDetail}/>
<ExerciseVideos exerciseVideos={exerciseVideos}  name={exerciseDetail.name} />
<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}  />


 </Box>

 ) 
}

export default ExerciseDetails;
