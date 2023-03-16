import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useWilders } from "../contexts/WildersContext";

export default function AddWilderForm() {
  const { fetchData } = useWilders();
  const [name, setName] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/api/wilders", {
      name,
    });
    fetchData();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="René Girard"
          value={name}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
