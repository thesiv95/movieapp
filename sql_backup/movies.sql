-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.20 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for movies
CREATE DATABASE IF NOT EXISTS `movies` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `movies`;

-- Dumping structure for table movies.movies
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL,
  `imdb_url` varchar(100) NOT NULL,
  `rating_admin` int NOT NULL DEFAULT '0',
  `rating_user` int NOT NULL DEFAULT '0',
  `user_likes` int NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table movies.movies: ~0 rows (approximately)
DELETE FROM `movies`;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` (`id`, `name`, `imdb_url`, `rating_admin`, `rating_user`, `user_likes`, `timestamp`) VALUES
	(1, 'Iron Man', 'tt1228705', 7, 4, 0, '2019-11-11 12:34:56'),
	(2, 'Fauda', 'tt4565380', 8, 9, 1, '2019-12-05 11:55:45'),
	(3, 'The Secret Garden', 'tt2702920', 6, 5, 0, '2020-01-01 14:14:14');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
