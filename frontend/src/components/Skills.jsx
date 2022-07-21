import axios from "axios";
import { useEffect, useState } from "react";

export default function Skills() {
  const [allSkills, setAllskills] = useState();
  const getAllskills = () => {
    axios
      .get("http://localhost:5000/technology")
      .then((res) => res.data)
      .then((data) => setAllskills(data));
  };

  useEffect(() => {
    getAllskills();
  }, []);
  return (
    <>
      <h2>Compétence</h2>
      <div>
        {allSkills &&
          allSkills.map((technology) => (
            <div>
              <div>
                <div>
                  <h2>{technology.name}</h2>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
