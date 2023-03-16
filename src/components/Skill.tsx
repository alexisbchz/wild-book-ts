import "./Skill.css";

interface SkillProps {
  name: string;
}

export default function Skill({ name }: SkillProps) {
  return <li>{name}</li>;
}
