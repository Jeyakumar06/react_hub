function Abilities() {
    const abilities = {
      abilities: [
        {
          name: "Shadow Clone Jutsu",
          description: "Naruto can create multiple solid clones of himself to assist in combat and strategy."
        },
        {
          name: "Rasengan",
          description: "A powerful spinning sphere of chakra developed by Minato Namikaze, which Naruto has mastered and evolved into various forms."
        },
        {
          name: "Rasen Shuriken",
          description: "An advanced version of the Rasengan infused with Wind Release, capable of cutting on a cellular level."
        },
        {
          name: "Sage Mode",
          description: "Naruto can harness natural energy to enhance his physical abilities, perception, and chakra reserves."
        },
        {
          name: "Kurama Chakra Mode",
          description: "Naruto can access the power of the Nine-Tails (Kurama), significantly boosting his speed, strength, and chakra levels."
        },
        {
          name: "Tailed Beast Bomb",
          description: "A powerful sphere of condensed chakra created by Naruto in Kurama Chakra Mode, capable of massive destruction."
        },
        {
          name: "Six Paths Sage Mode",
          description: "Gifted by Hagoromo Otsutsuki, this mode grants Naruto the ability to fly, enhanced sensory abilities, and powerful chakra techniques."
        },
        {
          name: "Truth-Seeking Balls",
          description: "Spheres of chakra that can nullify any ninjutsu and are nearly indestructible, available in Six Paths Sage Mode."
        },
        {
          name: "Talk no Jutsu",
          description: "Naruto’s unique ability to convert enemies into allies through the power of heartfelt speeches."
        }
      ]
    };
  
    return (
      <div>
        <h2>Naruto's Abilities</h2>
        <div>
          {abilities.abilities.map((ability, index) => (
            <div key={index} className="ability">
              <h3>{ability.name}</h3>
              <p>{ability.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Abilities;
  