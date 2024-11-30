{
  /* images */
}
import catImage from "../assets/images/cat.png";
import dogImage from "../assets/images/dog.png";
import elephantImage from "../assets/images/elephant.png";
import lionImage from "../assets/images/lion.png";

{
  /* sounds */
}
import catSound from "../assets/sounds/cat-sound.mp3";
import dogSound from "../assets/sounds/dog-sound.mp3";
import elephantSound from "../assets/sounds/elephant-sound.mp3";
import lionSound from "../assets/sounds/lion-sound.mp3";

import "../components/styles/Animals.css";

function Animals() {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="animals-container">
      <h1>Animal Fun for Daycare</h1>
      <div className="animal-grid">
        <div className="animal-card">
          <img src={catImage} alt="Cat" className="animal-img" />
          <p>Cat</p>
          <button onClick={() => playSound(catSound)} className="animal__link">
            Cat Sound
          </button>
        </div>

        <div className="animal-card">
          <img src={dogImage} alt="Dog" className="animal-img" />
          <p>Dog</p>
          <button onClick={() => playSound(dogSound)} className="animal__link">
            Dog Sound
          </button>
        </div>

        <div className="animal-card">
          <img src={elephantImage} alt="Elephant" className="animal-img" />
          <p>Elephant</p>
          <button onClick={() => playSound(elephantSound)}>
            Elephant Sound
          </button>
        </div>

        <div className="animal-card">
          <img src={lionImage} alt="Lion" className="animal-img" />
          <p>Lion</p>
          <button onClick={() => playSound(lionSound)} className="animal__link">
            Lion Sound
          </button>
        </div>
      </div>
    </div>
  );
}

export default Animals;
