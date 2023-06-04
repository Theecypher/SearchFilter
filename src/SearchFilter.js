import { useState } from "react";

const persons = [
  { name: "Mma Obiora" },
  { name: "Meremu Obiora" },
  { name: "Arinze Obiora" },
  { name: "Patrick Obiora" },
  { name: "Chukwuma Obiora" },
  { name: "Favour Obiora" },
  { name: "Elizabeth Obiora" },
  { name: "Udo Obiora" },
  { name: "Adebanke Obiora" },
  { name: "Ike Obiora" }
];

const Searchfilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="tect"
        placeholder="search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {persons
        .filter((person) => {
          if (searchTerm == "") {
            return person;
          } else if (
            person.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return person;
          }
        })
        .map((val, key) => {
          return (
            <div className="persons">
              <ul className="list">
                <li>{val.name}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Searchfilter;
