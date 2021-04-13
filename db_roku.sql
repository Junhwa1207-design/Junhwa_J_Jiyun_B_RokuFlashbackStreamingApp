-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 16, 2020 at 10:27 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `channelA`
--

CREATE TABLE `channelA` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `channelA`
--

INSERT INTO `channelA` (`id`, `name`, `year`, `description`, `image`) VALUES
(1, 'Ingrid Goes West', '2017 | 1h 38m', 'Desperate for human contact, an obsessive young woman moves to Venice Beach, Calif., to strike up a friendship with a social media celebrity.', 'movieChannelA1.jpg'),
(2, 'Racer and the Jailbird', '2017 | 2h 10m', 'From the Academy Award nominated director of Bullhead.', 'movieChannelA2.jpg'),
(3, 'Bad Ass', '2012 | 1h 45m', 'A decorated Vietnam War veteran (Danny Trejo) takes justice into his own hands when his best friend is murdered and the police are slow to solve the case.', 'movieChannelA3.jpg'),
(4, 'Hell\'s Kitchen', '2005', 'Genres: Reality | Cooking', 'tvChannelA1.jpg'),
(5, 'Forensic Files', '1996', 'Genres: Documentary | Crime | Medical\\r\\n\\r\\nRetracing the steps of real investigations with interviews and dramatic re-creations as experts draw on forensic science to solve baffling crimes and other mysteries.', 'tvChannelA2.jpg'),
(6, 'Doc Martin', '2004', 'Genres: Comedy drama | Medical\\r\\nDr Martin Ellingham leaves a busy London practice to start a small surgery in Portwenn, but his abrasive bedside manner leaves the locals wanting him gone.', 'tvChannelA3.jpg'),
(7, 'Literally, Right Before Aaron', '2017 | 1h 42m', 'Adam is devastated to learn that his ex-girlfriend has invited him to her upcoming wedding. Returning home for the festivities, Adam must confront unresolved feelings while trying to convince himself and everyone else that he is truly happy for her.', 'movieChannelA4.jpg'),
(8, 'Cash Cab', '2005', 'Unsuspecting taxi cab passengers answer trivia questions posed by host Ben Bailey; the passengers may reach their destination with cold hard cash or walk away empty-handed.', 'tvChannelA4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `channelK`
--

CREATE TABLE `channelK` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `channelK`
--

INSERT INTO `channelK` (`id`, `name`, `description`, `image`) VALUES
(1, 'KidoodleTV - Safe Streaming', 'Stream over 25,000+ FREE episodes of your favorite kids’ shows (like PAW Patrol: Pup Tales, Talking Tom, Roblox, My Little Pony, and more!), pre-screened by real people.', 'kidsChannel1.jpeg'),
(2, 'HappyKids.tv', 'HappyKids.tv is a FREE and SAFE app designed to Educate and Entertain kids. The content is segmented by age group for 0-2 years, 2-4 years, 4-6 years, and 6+. Find kid safe content across Popular Shows, Music, Movies, Learn at Home, DIY, and more. No registration needed. Install and stream instantly', 'kidsChannel2.jpeg'),
(3, 'Neon Rider', 'Neon Rider gets really addictive and challenging game as you start playing it and keep making progress. Perform insane stunts while you cruise through the never-ending world of Rider! Grab your motorcycle and start flipping like a maniac!', 'kidsChannel3.jpeg'),
(4, 'Pokémon TV', 'Watch amazing Pokémon animated adventures starring Ash, Pikachu, and all their friends. Plus, don\'t miss exciting special features and trailers for upcoming Pokémon movie events. It\'s the perfect app for Pokémon fans to keep up with Pokémon TV episodes. Even better - this Pokémon TV app is free!', 'kidsChannel4.jpeg'),
(5, 'The Gummibaer Channel', 'The channel to watch everyone\'s favorite singing and dancing animated gummy bear!', 'kidsChannel5.jpeg'),
(6, 'LooLoo Kids - Nursery Rhymes', 'LooLoo Kids is the place where kids find all their favorite nursery rhymes and songs with lyrics. Our fun 3D animated videos are perfectly adapted for their development, and kids enjoy learning new things while watching the videos. Enjoy the best quality edutainment for babies, toddlers and kids!', 'kidsChannel6.jpeg'),
(7, 'Knowledge Kids', 'Paw Patrol, Wild Kratts, Abby Hatcher, Geronimo Stilton, Shaun the Sheep and more! Watch 100\'s of top-rated children\'s TV shows completely FREE and without ads or commercials. Brought to you by Knowledge Network, British Columbia\'s public broadcaster', 'kidsChannel7.jpeg'),
(8, ' Fortnite Lovers', 'We all love Fortnite, we all love adventure: discover one of the greatest channels of Fortnite lovers. gaming fanatics from all over the world enjoying fortnite, funny Creative Commons videos and mainly have an awesome time', 'kidsChannel8.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `channelA`
--
ALTER TABLE `channelA`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channelK`
--
ALTER TABLE `channelK`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `channelA`
--
ALTER TABLE `channelA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `channelK`
--
ALTER TABLE `channelK`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
