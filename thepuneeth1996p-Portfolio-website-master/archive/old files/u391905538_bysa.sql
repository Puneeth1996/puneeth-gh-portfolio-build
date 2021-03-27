-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 18, 2020 at 06:35 AM
-- Server version: 10.2.30-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u391905538_bysa`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblcontact`
--

CREATE TABLE `tblcontact` (
  `id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_name` varchar(55) NOT NULL,
  `user_email` varchar(55) NOT NULL,
  `subject` varchar(575) NOT NULL,
  `content` varchar(2025) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcontact`
--

INSERT INTO `tblcontact` (`id`, `time`, `user_name`, `user_email`, `subject`, `content`) VALUES
(1, '2019-02-21 11:01:51', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'as dfas f'),
(2, '2019-02-21 11:07:58', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'fsad  as'),
(3, '2019-02-21 12:02:37', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a sdfas df'),
(4, '2019-02-21 12:02:56', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a sdfas df'),
(5, '2019-02-21 12:03:02', 'Puneeth', 'puneethskingston@gmail.com', 'a sdf', 'as dfas dfasd f'),
(6, '2019-02-21 12:10:29', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a sdfasd fsadf sa'),
(7, '2019-02-21 12:10:46', 'Puneeth2312312', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a fsdasd f'),
(8, '2019-02-22 08:31:12', 'one123', 'one123@gmail.com', 'aklsdfj ', 'kl jsalkfasdf '),
(9, '2019-02-22 09:03:19', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'asdf asdf '),
(10, '2019-02-22 09:03:26', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a sdf asdf asdf asdf '),
(11, '2019-02-22 09:10:01', '12323', 'puneethskingston@gmail.com', 'slkfdjaklf', 'as'),
(12, '2019-02-22 09:11:57', '12323', 'puneethskingston@gmail.com', 'slkfdjaklf', 'as'),
(13, '2019-02-22 09:12:03', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'asd fas df'),
(14, '2019-02-22 09:21:41', '12345pun', 'puneeeeeeeeee@gmail.com', 'klasdlkjk', '12342453645656457567'),
(15, '2019-02-22 12:38:07', '12324345', 'one123@gmail.com', 'as f', 'asf '),
(16, '2019-02-22 12:43:05', 'saf asdf ', 'puneethskingston@gmail.com', 'asdfj asdjl', 'as fd'),
(17, '2019-02-22 12:46:44', '.....asdf', 'puneethskingston@gmail.com', 'asdf', 'asf as'),
(18, '2019-02-22 12:49:03', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a f'),
(19, '2019-02-22 12:51:09', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'a f'),
(20, '2019-02-22 12:51:16', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'as df'),
(21, '2019-02-22 12:52:06', 'Puneeth', 'puneethskingston@gmail.com', 'a sdfasd', 'apuneeth puneeth '),
(22, '2019-02-22 17:41:06', 'PUNEETH', 'puneeth1996p@gmail.com', 'fas fasf ', '......'),
(23, '2019-02-23 03:18:29', 'Please', 'puneeth1996p@gmail.com', 'Please', 'Please'),
(24, '2019-02-23 05:11:17', 'PUNEETH', 'puneeth1996p@gmail.com', '12. 12. 12 ', '12. 12. 12 '),
(25, '2019-02-23 05:13:54', 'PUNEETH', 'puneethskingston@gmail.com', '1234567890', '1234567890'),
(26, '2019-02-23 05:15:27', 'PUNEETH', 'puneethskingston@gmail.com', '1234567890', '1234567890'),
(27, '2019-02-23 05:15:52', 'PUNEETH', 'puneeth1996p@gmail.com', 'fas fasf ', 'asdf'),
(28, '2019-02-23 05:45:00', 'PUNEETH', 'puneeth1996p@gmail.com', '......', '......'),
(29, '2019-02-23 05:53:15', 'jaggu', 'jaggu@gmail.com', 'jaggu jaggu', 'jaggu jaggu'),
(30, '2019-02-25 11:59:02', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', '````````````````````````````````````````````````````````'),
(31, '2019-02-25 11:59:46', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', '````````````````````````````````````````````````````````'),
(32, '2019-02-25 14:40:47', 'Please', 'puneeth1996p@gmail.com', 'I', 'Bjkj'),
(33, '2019-02-26 08:53:42', 'Puneethafternoon', 'after@gmail.com', 'laksfj', 'kljsa df'),
(34, '2019-02-26 16:13:38', 'PUNEETH', 'puneeth1996p@gmail.com', 'as dfad f', '\r\n;'),
(35, '2019-02-26 16:19:51', 'PUNEETH', 'puneeth1996p@gmail.com', 'fas fasf ', 'asfd'),
(36, '2019-02-26 16:32:01', 'PUNEETH', 'puneeth1996p@gmail.com', 'fas fasf ', 'a12'),
(37, '2019-02-27 04:37:33', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'ss'),
(38, '2019-03-06 07:11:02', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'sf'),
(39, '2019-03-06 07:11:39', 'Puneeth', 'puneethskingston@gmail.com', 'asdfj asdjl', 'sf'),
(40, '2019-04-05 07:41:19', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'Gog goog gogg'),
(41, '2019-04-24 10:46:44', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(42, '2019-04-24 10:46:50', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(43, '2019-04-24 10:47:12', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(44, '2019-04-24 10:47:46', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(45, '2019-04-24 10:48:13', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(46, '2019-04-24 10:48:21', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(47, '2019-04-24 10:48:24', 'Puneeth', 'puneeth1996p@gmail.com', 'asdfj asdjl', 'asdf sadf '),
(48, '2019-09-10 14:48:50', 'Errol Delong', 'noreply@thewordpressclub1284.shop', 'Question', 'Hello There,\r\n\r\nAre you currently utilizing Wordpress/Woocommerce or might you intend to utilise it as time goes by ? We currently offer a little over 2500 premium plugins and themes completely free to get : http://stast.xyz/nUtQU\r\n\r\nThanks,\r\n\r\nErrol'),
(49, '2019-10-07 09:12:16', 'Guy Muench', 'noreply@gplforest0865.xyz', 'Question', 'Hi There,\r\n\r\nAre you presently utilising Wordpress/Woocommerce or perhaps do you actually project to implement it sooner or later ? We offer much more than 2500 premium plugins and additionally themes 100 percent free to download : http://screep.xyz/cqqxg\r\n\r\nRegards,\r\n\r\nGuy'),
(50, '2019-10-29 08:51:19', 'AveryOdold', 'raphaeUnlape@gmail.com', 'A new way of advertising.', 'Good day!  thepuneeth1996p.cf \r\n \r\nHave you ever heard of sending messages via contact forms? \r\n \r\nThink of that your offer will be readread by hundreds of thousands of your future customerscustomers. \r\nYour message will not go to the spam folder because people will send the message to themselves. As an example, we have sent you our suggestion  in the same way. \r\n \r\nWe have a database of more than 30 million sites to which we can send your letter. Sites are sorted by country. Unfortunately, you can only select a country when sending a letter. \r\n \r\nThe price of one million messages 49 USD. \r\nThere is a discount program when you purchase  more than two million letter packages. \r\n \r\n \r\nFree test mailing of 50,000 messages to any country of your choice. \r\n \r\n \r\nThis message is created automatically. Please use the contact details below to contact us. \r\n \r\n \r\n \r\nContact us. \r\nTelegram - @FeedbackFormEU \r\nSkype  FeedbackForm2019 \r\nEmail - feedbackform@make-success.com'),
(51, '2019-11-13 06:16:03', 'Puneeth', 'puneeth1996p@gmail.com', 'Please please share the Project Files Through Google Drive.', 'adsf adf adf s f'),
(52, '2019-12-17 06:55:22', 'puneethskingston@gmail.com', 'puneeth1996p@gmail.com', 'Please please share the Project Files Through Google Drive.', 'asdf sdf asdf '),
(53, '2019-12-27 23:31:15', 'Monkeylot', 'noreplyEdumpl@gmail.com', 'cheap monthly SEO plans', 'hi there \r\nI have just checked thepuneeth1996p.cf for the ranking keywords and seen that your SEO metrics could use a boost. \r\n \r\nWe will improve your SEO metrics and ranks organically and safely, using only whitehat methods, while providing monthly reports and outstanding support. \r\n \r\nPlease check our pricelist here, we offer SEO at cheap rates. \r\nhttps://www.hilkom-digital.de/cheap-seo-packages/ \r\n \r\nStart increasing your sales and leads with us, today! \r\n \r\nregards \r\nHilkom Digital Team \r\nsupport@hilkom-digital.de'),
(54, '2020-01-05 12:24:26', '', 'businessleads002@gmail.com', 'Hello', 'Generate Business Leads.\r\n\r\nHello\r\nYour  website .............. is so  nice\r\nDo you want a flood of leads and sale ?\r\nAnd want to be ahead from your competitor ?\r\nVisit now\r\nhttp://bit.ly/facebookkingmaker'),
(55, '2020-01-31 16:15:52', 'KennethHal', 'raphaeAvemnunseree@gmail.com', 'Delivery of your email messages.', 'Hi!  thepuneeth1996p.cf \r\n \r\nDid you know that it is possible to send proposal absolutely legally? \r\nWe suggesting a new method of sending request through feedback forms. Such forms are located on many sites. \r\nWhen such messages are sent, no personal data is used, and messages are sent to forms specifically designed to receive messages and appeals. \r\nAlso, messages sent through contact Forms do not get into spam because such messages are considered important. \r\nWe offer you to test our service for free. We will send up to 50,000 messages for you. \r\nThe cost of sending one million messages is 49 USD. \r\n \r\nThis offer is created automatically. Please use the contact details below to contact us. \r\n \r\nContact us. \r\nTelegram - @FeedbackFormEU \r\nSkype  FeedbackForm2019 \r\nEmail - feedbackform@make-success.com'),
(56, '2020-02-14 16:50:27', 'Louvenia Marlow', 'noreply@papawp9684.org', 'Question', 'Hi,\r\n\r\nDo you know that your Wordpress site thepuneeth1996p.cf is very slow to load and that you lose visitors, leads and customers every day?\r\n\r\nWe have already optimized more than 2000 sites since 2015, why not yours? : http://frong.xyz/FJEYx\r\n\r\nBest Regards,\r\n\r\nLouvenia'),
(57, '2020-02-15 09:53:59', 'parshuram.B', 'parshuramB@gamil.com', 'ppppppppp', 'iamparashuramB');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblcontact`
--
ALTER TABLE `tblcontact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcontact`
--
ALTER TABLE `tblcontact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
