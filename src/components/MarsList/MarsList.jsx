import cn from "classnames"
import styles from "./marslist.module.scss";
import MarsCard from "../MarsCard/MarsCard";

const MarsList = () => {
    return <div className={cn(styles["mars-list"])}>
        <MarsCard img="https://lipsum.app/random/1600x900"/>
        <MarsCard img="https://lipsum.app/random/1600x900"/>
        <MarsCard img="https://lipsum.app/random/1600x900"/>
        <MarsCard img="https://lipsum.app/random/1600x900"/>
        <MarsCard img="https://lipsum.app/random/1600x900"/>
    </div>
}

export default MarsList