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
('scattered clouds', '2023-08-31', 30, 69, 1001, 4),
('fog', '2023-09-01', 25, 89, 1002, 4),
('fog', '2023-09-02', 30, 76, 1001, 4),
('scattered clouds', '2023-09-03', 31, 74, 1003, 2),
('partly sunny', '2023-09-04', 26, 81, 1002, 4),
('scattered clouds', '2023-09-05', 31, 68, 1001, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
