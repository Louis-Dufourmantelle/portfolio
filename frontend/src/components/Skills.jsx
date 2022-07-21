import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../assets/img/CV-Louis-Dufourmantelle.png";

export default function Skills() {
  return (
    <article
      id="skills"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "auto repeat(2, 1fr)",
        alignItems: "center",
      }}
    >
      <h1
        className="skill"
        style={{
          gridColumn: "1 / -1",
          gridRow: "1 / 2",
        }}
      >
        Compétences
      </h1>
      <section
        className="front-end"
        style={{
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
        }}
      >
        <h2>FRONT-END</h2>
        <div>
          <FontAwesomeIcon className="logo" icon={faHtml5} />
          <FontAwesomeIcon className="logo" icon={faCss3Alt} />
          <FontAwesomeIcon className="logo" icon={faJs} />
        </div>
      </section>
      <section
        className="back-end"
        style={{
          gridColumn: "1 / 2",
          gridRow: "3 / 4",
        }}
      >
        <h2>BACK-END</h2>
        <div>
          <FontAwesomeIcon className="logo" icon={faNodeJs} />
        </div>
      </section>
      <picture
        className="cv"
        style={{
          gridColumn: "2 / 3",
          gridRow: "2 / -1",
        }}
      >
        <img className="imgcv" src={CV} alt="CV" />
      </picture>
    </article>
  );
}
