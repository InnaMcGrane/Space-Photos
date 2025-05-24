import cn from "classnames";
import styles from "./marsCard.module.scss";

const MarsCard = ({img}) => {
  return (
    <div className={cn(styles["mars-card"])}>
      <div className={cn(styles["mars-card__img-wrapper"])}>
        <img className={cn(styles["mars-card__img"])} src={img} />
      </div>
      {/* <div className={cn(styles["mars-card__content"])}>
        <h4>rover info:</h4>
        <ul>
          <li>id: 5</li>
          <li>name: Curiosity</li>
          <li>status: active</li>
        </ul>
      </div> */}
    </div>
  );
};

export default MarsCard;

/* 

{
      "id": 424926,
      "sol": 1000,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    },

name	Name of the Rover
landing_date	The Rover's landing date on Mars
launch_date	The Rover's launch date from Earth
status	The Rover's mission status
max_sol	The most recent Martian sol from which photos exist
max_date	The most recent Earth date from which photos exist
total_photos	Number of photos taken by that Rover
It also includes a list of objects under the "photos" key which are grouped by sol, and each of which contains:

Key	Description
sol	Martian sol of the Rover's mission
total_photos	Number of photos taken by that Rover on that sol
cameras	Cameras for which there are photos by that Rover on that sol

*/
