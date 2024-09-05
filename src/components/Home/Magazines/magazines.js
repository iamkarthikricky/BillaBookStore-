import { useEffect, useState} from "react";
import SlickSlider from "../../SlickSlider/slider";

const Magazines=()=>{

    const [MagazinesList,setMagazinesList] = useState([])

    const fetchMagazineData=async ()=>{
        const apiKey='AIzaSyC7QlnvOJ5AXqVNyQ3LwG0IE9XNCyYpFTM'
        const url=`https://www.googleapis.com/books/v1/volumes?q=sports&printType=books&filter=partial&key=${apiKey}`
        const options={
            method:'GET',
            headers:{
            'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url,options)
        if(response.ok){
            const fetchedData = await response.json()
            setMagazinesList(fetchedData.items)
        }
        else{
            console.log('error')
        }
    }

    useEffect(()=>{fetchMagazineData()},[])

    return(
        <div>
            {MagazinesList.length > 0 ? <SlickSlider booksList={MagazinesList}  heading='Top Selling Magazines' /> : ''}
        </div>

    )
}



export default Magazines