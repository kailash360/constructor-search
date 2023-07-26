export interface IResult {
    id: string;
    image: string;
    price: string;
    description: string;
}

const Result = (props: IResult) => {
    return (
        <div className="my-2 px-3 py-1 flex flex-column border rounded cursor-pointer result">
            <div className="img-container"><img src={props.image} alt="" width={150} height='auto' /></div>
            <div className="d-flex justify-content-between">
                <p className="">Price</p>
                <p className="">{props.price}</p>
            </div>
        </div>
    )
}

export default Result