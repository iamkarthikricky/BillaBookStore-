import { useEffect, useState} from "react";
import SlickSlider from "../../SlickSlider/slider";




const TrendingBooks=()=>{

    const [TrendingBooksList,setTrendingBooksList] = useState([])

    const fetchBookData=async ()=>{
        const apiKey='AIzaSyC7QlnvOJ5AXqVNyQ3LwG0IE9XNCyYpFTM'
        const url=`https://www.googleapis.com/books/v1/volumes?q=modi&filter=paid-ebooks&orderBy=newest&key=${apiKey}`
        const options={
            method:'GET',
            headers:{
            'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url,options)
        if(response.ok){
            const fetchedData = await response.json()
            
            setTrendingBooksList(fetchedData.items)
        }
        else{
            console.log('error')
        }
    }

    useEffect(()=>{fetchBookData()},[])

    return(
        <div>
            {TrendingBooksList.length > 0 ? <SlickSlider booksList={TrendingBooksList}  heading='Top Trending Books' /> : ''}
        </div>

    )
}




export default TrendingBooks