import FreeAdd from "../components/FreeAdd/FreeAdd";
import FreeAdd2 from "../components/FreeAdd2/FreeAdd2";
import PremiumAdd from "../components/PremiumAdd/PremiumAdd";
import Promote from "../components/Promote/Promote";
import FavHeader from "../components/Shared/FavHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <FavHeader name="sadamon home" />
      <PremiumAdd />
      <FreeAdd />
      <FreeAdd />
      <FreeAdd />
      <FreeAdd />
      <Promote />
      <FreeAdd2 />
    </div>
  );
}
