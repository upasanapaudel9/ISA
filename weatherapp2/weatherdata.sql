-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2023 at 01:43 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weatherdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `weatherdata`
--

CREATE TABLE `weatherdata` (
  `description` text NOT NULL,
  `date` date NOT NULL,
  `temperature` int(11) NOT NULL,
  `humidity` int(11) NOT NULL,
  `pressure` int(11) NOT NULL,
  `wind` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weatherdata`
--

INSERT INTO `weatherdata` (`description`, `date`, `temperature`, `humidity`, `pressure`, `wind`) VALUES
('fog', '2023-08-07', 26, 84, 1001, 2),
('low clouds', '2023-08-08', 24, 94, 1002, 2),
('light rain', '2023-08-09', 26, 87, 1001, 2),
('fog', '2023-08-10', 25, 88, 1003, 4),
('fog', '2023-08-11', 25, 92, 1002, 4),
('light rain', '2023-08-12', 25, 91, 1003, 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
