import "./styles/City.scss";

interface CityProps {
    name: string;
    country: string;
    timezone: string;
    image: string;
}

const City = (props: CityProps) => {
    return (
        <div className="cityBanner">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <label>
                {props.country} - {props.timezone}
            </label>
        </div>
    );
};

export default City;
