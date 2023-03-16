import blank_profile from "../assets/blank_profile.png";
import IWilder from "../interfaces/IWilder";
import Skill from "./Skill";
import "./WilderCard.css";

export type WilderCardProps = {
  wilder: IWilder;
};

export default function WilderCard({
  wilder: { name, city, skills },
}: WilderCardProps) {
  return (
    <article className="card">
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill key={skill.id} name={skill.name} />
        ))}
      </ul>
      {/* <button onClick={handleDeleteClick}>Supprimer</button> */}
    </article>
  );
}
