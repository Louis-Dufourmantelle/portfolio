-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project`
--

INSERT INTO `project` (`id`, `title`, `description`, `date`, `link`) VALUES
(1, "trombinoscope","Ceci est un trombinoscope qui à pour but de présenter notre promotion.", "14/03/2022 au 25/03/2022", "https://github.com/Louis-Dufourmantelle/trombinoscope"),
(2, "posteries", "Une application web dynamique qui utilise les données d'une API qui est the Movies Database", "04/04/2022 au 11/05/2022", "https://github.com/Louis-Dufourmantelle/2022-03-JS-Reims-project-2-posteries"),
(3, "postverta", "Une application qui permet de lire des livres en ligne et qui permet de jouer à un jeu de carte", "23/05/2022 au 15/07/2022", "https://github.com/WildCodeSchool/2022-03-JS-Reims-project-3-postverta");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- Structure de la table `technology`
--

CREATE TABLE `technology` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `technology`
--

INSERT INTO `technology` (`id`, `name`) VALUES
(1, "HTML"),
(2, "CSS"),
(3, "JavaScript"),
(4, "Mysql"),
(5, "Express"),
(6, "Node.js");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `technology`
--
ALTER TABLE `technology`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--
-- Structure de la table `project_technology`
--

CREATE TABLE `project_technology` (
  `project_id` int(11) UNSIGNED NOT NULL,
  `technology_id` int(11) UNSIGNED NOT NUll,
  PRIMARY KEY(project_id, technology_id),
  CONSTRAINT FK_ProjectTechnology_Project FOREIGN KEY (project_id)
    REFERENCES project(id),
  CONSTRAINT FK_ProjectTechnology_User FOREIGN KEY (technology_id)
    REFERENCES technology(id)  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project_technology`
--

INSERT INTO `project_technology` (`project_id`, `technology_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
