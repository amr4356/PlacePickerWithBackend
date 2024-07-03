import { useEffect } from "react";

function useFetch(){
    useEffect(()=>{
        async function fetchPlaces(){
          setIsFetching(true);
          try{
            const userPlacess=await fetchUserPlaces();
            setUserPlaces(userPlacess);
          }catch(error){
            setError({message:error.message || 'Could not fetch user places, please try again later'});
          } 
          setIsFetching(false);
        }
    
        fetchPlaces();
      },[])
}