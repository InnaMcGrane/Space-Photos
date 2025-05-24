import cn from "classnames";
import styles from "./roversList.module.scss";
import Rover from "../Rover/Rover";

import Curiosity from '../../assets/images/Curiosity.jpg';
import Opportunity from '../../assets/images/Opportunity.jpg';
import Perseverance from '../../assets/images/Perseverance.jpg';
import Spirit from '../../assets/images/Spirit.jpg';

const RoversList = ({ data, setCurrentRover }) => {
  const images = {
    Curiosity,
    Opportunity,
    Perseverance,
    Spirit,
  };

  return (
    <div className={cn(styles["rovers-list"])}>
      {data.map((rover) => {
        return (
          <Rover
            setCurrentRover={setCurrentRover}
            img={images[rover.name]}
            id={rover.id}
            name={rover.name}
            total_photos={rover.total_photos}
            cameras={rover.cameras}
            key={rover.id}
          />
        );
      })}
    </div>
  );
};

export default RoversList;