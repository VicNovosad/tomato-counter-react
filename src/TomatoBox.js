export default function TomatoBox({tomatoes}){
    return (
        <div className="tomato-box">
        <h1>
            {tomatoes ? tomatoes : 'No Tomatoes'}
        </h1>
        </div>
    );
}