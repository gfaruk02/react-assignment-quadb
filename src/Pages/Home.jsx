import { useEffect, useState } from "react";
import Item from "../Components/Home/Item";


const Home = () => {
    const [showData, setShowData] = useState([]);
    // console.log(showData);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=> setShowData(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {showData?.map(item=> <Item key={item.show.id} item={item}> </Item>)}
        </div>
    );
};

export default Home;