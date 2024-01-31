
const Item = ({item}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10 ">
                <figure><img className="h-[460px] w-full" src={item?.show?.image?.original} alt={item?.show?.name} /></figure>
                <div className="card-body">
                <h2 className="card-title">{item?.show?.name}</h2>
                    <div className="flex flex-row justify-evenly gap-8"> 
                    <p>Language: {item?.show?.language}</p>
                    <p>Average Rating: {item?.show?.rating?.average}</p>
                    </div>
                    <div className="flex flex-row justify-evenly gap-2"> 
                    <p>Type: {item?.show?.type}</p>
                    <p>Genres: {item?.show?.genres}</p>
                    </div>
                   
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;