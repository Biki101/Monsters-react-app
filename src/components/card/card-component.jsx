import react from 'react';
import './card-styles.css';

export const Card = props => (
        <div class = "cardcontainer" className="card-container card-container:hover">
                <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="images" />
           <h2>{props.monster.name}</h2>
           <h3>{props.monster.email}</h3>
        </div>
);