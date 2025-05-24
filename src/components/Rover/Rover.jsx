import cn from "classnames";
import styles from "./rover.module.scss";

const Rover = ({ id, name, total_photos, cameras, img, setCurrentRover }) => {
  return (
    <div className={cn(styles["rover"])} onClick={() => setCurrentRover(name.toLowerCase())}>
      <div className={cn(styles["rover__img-wrapper"])}>
        <img className={cn(styles["rover__img"])} src={img} alt="" />
      </div>
      <div className={cn(styles["rover__content"])}>
        <h3 className={cn(styles["rover__name"])}>
          {id} : {name}
        </h3>
        <h4 className={cn(styles["rover__photos"])}>total photos: {total_photos}</h4>
        <div className={cn(styles["rover__cameras"])}>
          {cameras.map((camera) => {
            return (
              <span className={cn(styles["rover__camera"])} key={camera.name}>
                {camera.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rover;

/* 

{
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active",
      "max_sol": 4545,
      "max_date": "2025-05-19",
      "total_photos": 701245,
      "cameras": [
        {
          "id": 20,
          "name": "FHAZ",
          "rover_id": 5,
          "full_name": "Front Hazard Avoidance Camera"
        },
        {
          "id": 26,
          "name": "NAVCAM",
          "rover_id": 5,
          "full_name": "Navigation Camera"
        },
*/
