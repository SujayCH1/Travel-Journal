import data from "./data";
import "./Journal.css"

export const Journal = () => {
    return (
        <div className="Journal">
            {
                data.map((place) => {
                    return (
                        <div key={place.id} className="Location">
                            <div className="LocationImage">
                                <img 
                                    src={place.img.src} 
                                    alt={place.img.alt} 
                                />
                                <h3>{place.title}</h3>
                            </div>
                            <div className="LocationInfo">
                                <p><strong>Country:</strong> {place.country}</p>
                                <p><strong>Date:</strong> {place.dates}</p>
                                <p>{place.text}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};
