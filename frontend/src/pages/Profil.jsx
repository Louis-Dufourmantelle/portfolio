import React from "react";
import louisProfil from "../assets/img/louis-profil.png";

export default function Home() {
  return (
    <>
      <h2 className="profile">A Propos de moi</h2>
      <section id="profile" className="biographie flex">
        <picture className="flex">
          <img src={louisProfil} alt="profil" className="photo" />
        </picture>
        <p>
          Bonjour ! Je m'appelle Louis Dufourmantelle, après plusieurs années
          dans le milieu du commerce j'ai décidé de me reconvertir dans le
          développement web.
          <br />
          Si j'ai décidé de me reconvertir c'est parce que le domaine du
          développement web me passione alors je me suis lancer dans une
          formation JavaScript / React à la Wild Code School de Reims
          <br />
          J'ai pour objectif d'apprendre les meilleures compétences et les
          bonnes pratiques à la sortie de ma formation, dans le but d'intégrer
          le milieu professionel du développement web.
        </p>
      </section>
    </>
  );
}
