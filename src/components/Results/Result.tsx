export interface IResult {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
}

const Result = (props: IResult) => {
    return (
        <div className="my-2 px-3 py-1 flex flex-column justify-content-between border rounded cursor-pointer result">
            <div className="result-image"><img src={props.image} alt="" width={150} height='auto' /></div>
            <div className="result-info">
                <p className="name">{props.name.length > 50 ? props.name.slice(0,45) + '...' : props.name}</p>
                <span className="d-flex justify-content-between price">
                    <p>Price</p>
                    <p>{props.price}</p>
                </span>
            </div>
        </div>
    )
}

export default Result