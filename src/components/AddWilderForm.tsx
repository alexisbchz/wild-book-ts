import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useWilders } from "../contexts/WildersContext";
import { gql, useMutation } from "@apollo/client";

const ADD_WILDER = gql`
  mutation AddWilder($city: String!, $name: String!) {
    addWilder(city: $city, name: $name) {
      name
      city
      id
    }
  }
`;

export default function AddWilderForm() {
  const { fetchData } = useWilders();
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [addWilder, { loading }] = useMutation(ADD_WILDER);
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (event.target.id === "city") {
      setCity(event.target.value);
    } else {
      setName(event.target.value);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await addWilder({
      variables: { name, city },
    });
    fetchData();
    setName("");
    setCity("");
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
      <div>
        <label htmlFor="city">city</label>
        <input
          id="city"
          type="text"
          placeholder="Paris"
          value={city}
          onChange={handleChange}
        />
      </div>
      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}
