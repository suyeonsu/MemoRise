CREATE DATABASE  IF NOT EXISTS `memorise` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `memorise`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: j9b106.p.ssafy.io    Database: memorise
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookmark`
--

DROP TABLE IF EXISTS `bookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmark` (
  `bookmark_seq` bigint NOT NULL AUTO_INCREMENT,
  `user_seq` bigint NOT NULL,
  `memo_seq` bigint NOT NULL,
  PRIMARY KEY (`bookmark_seq`),
  KEY `fk_user_bookmark_idx` (`user_seq`),
  KEY `fk_memo_bmk_idx` (`memo_seq`),
  CONSTRAINT `fk_memo_bmk` FOREIGN KEY (`memo_seq`) REFERENCES `memo` (`memo_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_bookmark` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmark`
--

LOCK TABLES `bookmark` WRITE;
/*!40000 ALTER TABLE `bookmark` DISABLE KEYS */;
INSERT INTO `bookmark` VALUES (49,36,197),(50,37,199),(52,36,208);
/*!40000 ALTER TABLE `bookmark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_seq` bigint NOT NULL AUTO_INCREMENT,
  `item_image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `item_name` varchar(200) NOT NULL,
  PRIMARY KEY (`item_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (207,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/fc9a4fe9-3626-407a-9542-fd48ca9350ad.jpeg','2023-10-04 05:52:20','651cfd9322a056c3b911233f'),(208,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/786e19c6-ae8f-4ab9-a4a0-a47ff18712d3.jpeg','2023-10-04 06:01:31','651cffba22a702240623ddd2'),(209,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/3d8c6d87-0aed-42b5-9612-e73df4911b16.jpeg','2023-10-04 07:12:31','651d105c520fbda4a9ce65d9'),(210,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/09d7d58b-0c72-4a71-bb46-3d9a6f391e05.jpeg','2023-10-04 07:16:15','651d113d520fbda4a9ce65da'),(211,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/01add1df-9fa8-4405-ad65-bbe03933a536.jpeg','2023-10-04 07:29:35','651d145c564636309857d359'),(212,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/15081721-f06a-45c5-9aa2-bc781edc6c96.jpeg','2023-10-04 12:20:31','651d588dfa048c6a11c6d615'),(213,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/58ef7d3d-daa2-4e0c-95bd-636f6ff37fe7.jpeg','2023-10-04 13:33:38','651d69b07d06a319a0e1aec7'),(214,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/e0969f09-ac2a-4c12-a674-ac7b2695ea82.jpeg','2023-10-05 04:03:40','651e359c441a47ea916a0784'),(215,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/fa6a4570-a7ae-41e0-a4f0-a93cac6d5028.jpeg','2023-10-05 04:08:54','651e36d5441a47ea916a0785'),(216,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/539ddb68-570e-4774-82ca-219084b9b695.jpeg','2023-10-05 04:10:01','651e3718441a47ea916a0786'),(217,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/49ecca27-f213-4932-98a4-9bc147b0baab.jpeg','2023-10-05 04:11:58','651e378e441a47ea916a0787'),(218,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/881c818f-9dcb-43e0-989c-a876a8edf642.jpeg','2023-10-05 04:13:43','651e37f6441a47ea916a0788'),(219,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/e269ff78-0a45-4439-bc7a-593db605bd4b.jpeg','2023-10-05 04:14:10','651e3811441a47ea916a0789'),(220,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/5c0ca492-ca47-44c2-9761-33e469116579.jpeg','2023-10-05 04:38:52','651e3dda441a47ea916a078a'),(221,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/5c43a74f-f191-42cc-af9f-31ffb1322e53.jpeg','2023-10-05 04:42:41','651e3ec0441a47ea916a078b'),(222,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/7206bb72-1781-4b17-bab6-745274b50d3f.jpeg','2023-10-05 05:08:02','651e44b1fba4e6f5cadb13da'),(223,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/00f44dad-36fd-49c9-9a90-ba4afe3f39df.jpeg','2023-10-05 05:09:07','651e44f2fba4e6f5cadb13db'),(224,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/9a9a0036-68de-4b49-93ff-ca8ff35be2d4.jpeg','2023-10-05 05:11:29','651e4580fba4e6f5cadb13dc'),(225,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/04b6228b-8d4a-4b85-88d4-6d14434e87cd.jpeg','2023-10-05 05:21:38','651e47e27c81a26b1a537469'),(226,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/7a400091-5166-4667-a7a4-aabb28509fec.jpeg','2023-10-05 08:01:42','651e6d64a7b445c9cf7d4c40'),(227,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/item-image/c3f96eb9-fc42-40d7-8443-252ed436fa41.jpeg','2023-10-05 10:35:54','651e918830863326ea135923');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memo`
--

DROP TABLE IF EXISTS `memo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memo` (
  `memo_seq` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `item_seq` bigint NOT NULL,
  `access_type` enum('CLOSED','OPEN','RESTRICT') DEFAULT 'OPEN',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL,
  `user_seq` bigint NOT NULL,
  `file` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`memo_seq`),
  KEY `fk_mmmm_iiii_idx` (`item_seq`),
  KEY `fk_m_i_idx` (`item_seq`),
  KEY `fk_m_u_idx` (`user_seq`),
  CONSTRAINT `fk_m_u` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_memo_i` FOREIGN KEY (`item_seq`) REFERENCES `item` (`item_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=229 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memo`
--

LOCK TABLES `memo` WRITE;
/*!40000 ALTER TABLE `memo` DISABLE KEYS */;
INSERT INTO `memo` VALUES (197,'마우스 엥',207,'OPEN','2023-10-04 14:52:27','2023-10-04 15:45:56',0,NULL,36,NULL),(198,'커피컵',208,'OPEN','2023-10-04 15:01:39','2023-10-04 15:01:39',0,NULL,36,NULL),(199,'마우스 좋은거네~',207,'OPEN','2023-10-04 15:45:38','2023-10-04 15:45:38',0,NULL,37,NULL),(200,'음료수',209,'OPEN','2023-10-04 16:12:38','2023-10-04 16:12:38',0,NULL,37,NULL),(201,'프링글스에요 히힛',210,'OPEN','2023-10-04 16:16:37','2023-10-04 16:16:37',0,NULL,37,NULL),(202,'나는야 페브리즈',211,'OPEN','2023-10-04 16:29:59','2023-10-04 16:29:59',0,NULL,37,NULL),(203,'싸피 마우스',207,'OPEN','2023-10-04 17:04:07','2023-10-04 17:21:17',0,NULL,37,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/memo-image/712ed07b-5814-4719-a251-48477c5c4c8b.jpg'),(204,'메모수정',207,'OPEN','2023-10-04 17:21:31','2023-10-04 17:42:04',0,NULL,37,NULL),(205,'메모작성2',207,'OPEN','2023-10-04 17:42:20','2023-10-04 17:47:48',0,NULL,37,NULL),(206,'플젝 할때 좋군',207,'RESTRICT','2023-10-04 21:13:27','2023-10-04 21:43:13',0,NULL,36,''),(207,'누끼',212,'OPEN','2023-10-04 21:21:31','2023-10-04 21:21:31',0,NULL,36,NULL),(208,'싸피 마우스잖아~~~나도있음',207,'OPEN','2023-10-04 21:42:11','2023-10-04 21:44:34',0,NULL,36,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/memo-image/1d94650d-86fe-4e01-a7f5-53046ea1fe5b.jpg'),(209,'마우스 얼마임?',207,'OPEN','2023-10-04 21:42:25','2023-10-04 21:42:25',0,NULL,36,NULL),(210,'1',213,'OPEN','2023-10-04 22:33:44','2023-10-04 22:33:44',0,NULL,36,NULL),(211,'내 마우스',214,'OPEN','2023-10-05 13:03:47','2023-10-05 13:03:47',0,NULL,38,NULL),(212,'마우스다아',215,'OPEN','2023-10-05 13:09:00','2023-10-05 13:09:00',0,NULL,38,NULL),(213,'마',217,'OPEN','2023-10-05 13:12:05','2023-10-05 13:12:05',0,NULL,38,NULL),(214,'ㅋㅋㅋ',219,'OPEN','2023-10-05 13:14:15','2023-10-05 13:14:15',0,NULL,38,NULL),(215,'ㅋㅋㅋㅋ',219,'OPEN','2023-10-05 13:14:28','2023-10-05 13:14:28',0,NULL,38,NULL),(216,'하이',215,'RESTRICT','2023-10-05 13:21:45','2023-10-05 13:21:45',0,NULL,38,NULL),(217,'dkdkdk',220,'OPEN','2023-10-05 13:38:59','2023-10-05 13:38:59',0,NULL,37,NULL),(218,'이 마우스는 꽤나 오래 전부터 전해져 내려온 그런 마우스입니다. 우와 진짜 신기방기죠?? 네.. 그렇습니다',222,'OPEN','2023-10-05 14:08:08','2023-10-05 15:40:37',0,NULL,38,NULL),(219,'너를 향한 내 마음이야 열어서 확인해봐',223,'OPEN','2023-10-05 14:09:25','2023-10-05 14:09:25',0,NULL,38,NULL),(220,'내 선물상자',224,'OPEN','2023-10-05 14:11:36','2023-10-05 14:11:36',0,NULL,38,NULL),(221,'1',225,'OPEN','2023-10-05 14:21:48','2023-10-05 14:21:48',0,NULL,38,NULL),(222,'마우스에 메모를 남겨보겠습니다!!',219,'OPEN','2023-10-05 15:41:41','2023-10-05 15:41:41',0,NULL,38,NULL),(223,'진짜 신기하죠!!',222,'CLOSED','2023-10-05 15:42:02','2023-10-05 15:42:02',0,NULL,38,NULL),(224,'귀여운 고양이 사진이다!!',222,'OPEN','2023-10-05 15:44:50','2023-10-05 15:44:50',0,NULL,38,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/memo-image/9d5c8821-1bf5-4e91-9fb9-00fa0c5e75ac.png'),(225,'1',226,'OPEN','2023-10-05 17:01:49','2023-10-05 17:14:19',1,'2023-10-05 17:14:19',36,NULL),(226,'경인아, 오래 전부터 너를 좋아해왔어.\n처음 본 순간부터 너를 생각하기만 하면 가슴이 떨려와...\n우리 사귀지 않을래?\n너도 내 맘과 같다면 6시에 우리가 처음 만났던  그 장소로 와줘',226,'RESTRICT','2023-10-05 17:13:47','2023-10-05 17:36:18',0,NULL,36,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/memo-image/57a22dd3-2eb2-468c-b29b-a5e2dfccbb08.jpg'),(227,'경인아, 오래 전부터 너를 좋아해왔어.\n처음 본 순간부터 너를 생각하기만 하면 가슴이 떨려와...\n우리 사귀지 않을래?\n너도 내 맘과 같다면 6시에 우리가 처음 만났던 그 장소로 와줘.',226,'RESTRICT','2023-10-05 17:19:03','2023-10-05 17:19:03',0,NULL,37,NULL),(228,'[ 밥솥 사용법 ]\n\n1. 싱크대 제일 아래 쌀통에 있는 쌀을 씻어서 밥솥에 넣어!\n2. 물은 손등에 약간 걸칠 정도만!!\n3. 뚜껑을 닫고, 잠금장치를 닫아\n4. 메뉴를 4번 눌러서 일반취사에 맞춰\n5. 취사시작 버튼을 누르고 밥이 다 될 때까지 기다려!!\n6. 밥 완성되면 잘 섞어줘\n\n',227,'OPEN','2023-10-05 19:39:17','2023-10-05 19:39:46',0,NULL,37,'https://b106-memorise.s3.ap-northeast-2.amazonaws.com/memo-image/85554989-d8a3-4f85-8180-2fadf4e7fcca.jpg');
/*!40000 ALTER TABLE `memo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `notification_seq` bigint NOT NULL AUTO_INCREMENT,
  `notification_type_seq` bigint NOT NULL,
  `content_seq` bigint DEFAULT NULL,
  `team_seq` bigint DEFAULT NULL,
  `subject_seq` bigint NOT NULL,
  `target_seq` bigint NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`notification_seq`),
  KEY `fk_notification_type_notification_idx` (`notification_type_seq`),
  CONSTRAINT `fk_notification_type_notification` FOREIGN KEY (`notification_type_seq`) REFERENCES `notification_type` (`notification_type_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification_type`
--

DROP TABLE IF EXISTS `notification_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification_type` (
  `notification_type_seq` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`notification_type_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification_type`
--

LOCK TABLES `notification_type` WRITE;
/*!40000 ALTER TABLE `notification_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tagged_team`
--

DROP TABLE IF EXISTS `tagged_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagged_team` (
  `team_seq` bigint NOT NULL,
  `memo_seq` bigint NOT NULL,
  `tagged_team_seq` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`tagged_team_seq`),
  KEY `fk_memo_tagged_team_idx` (`memo_seq`),
  KEY `fk_team_tagged_team_idx` (`team_seq`),
  CONSTRAINT `fk_memo_tagged_team` FOREIGN KEY (`memo_seq`) REFERENCES `memo` (`memo_seq`),
  CONSTRAINT `fk_team_tagged_team` FOREIGN KEY (`team_seq`) REFERENCES `team` (`team_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tagged_team`
--

LOCK TABLES `tagged_team` WRITE;
/*!40000 ALTER TABLE `tagged_team` DISABLE KEYS */;
INSERT INTO `tagged_team` VALUES (44,206,29);
/*!40000 ALTER TABLE `tagged_team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tagged_user`
--

DROP TABLE IF EXISTS `tagged_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagged_user` (
  `memo_seq` bigint NOT NULL,
  `user_seq` bigint NOT NULL,
  `tagged_user_seq` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`tagged_user_seq`),
  KEY `fk_memo_tagged_user_idx` (`memo_seq`),
  KEY `fk_user_tagged_user_idx` (`user_seq`),
  CONSTRAINT `fk_memo_tagged_user` FOREIGN KEY (`memo_seq`) REFERENCES `memo` (`memo_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_tagged_user` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tagged_user`
--

LOCK TABLES `tagged_user` WRITE;
/*!40000 ALTER TABLE `tagged_user` DISABLE KEYS */;
INSERT INTO `tagged_user` VALUES (216,37,61),(226,38,62),(227,38,63);
/*!40000 ALTER TABLE `tagged_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `owner` bigint NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`team_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (44,'6팀',37,NULL,'2023-10-04 15:46:57','2023-10-04 15:46:57');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_user`
--

DROP TABLE IF EXISTS `team_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_user` (
  `team_user_seq` bigint NOT NULL AUTO_INCREMENT,
  `team_seq` bigint NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`team_user_seq`),
  KEY `fk_user_team_user_idx` (`user_seq`),
  KEY `fk_team_team_user_idx` (`team_seq`),
  CONSTRAINT `fk_team_team_user` FOREIGN KEY (`team_seq`) REFERENCES `team` (`team_seq`),
  CONSTRAINT `fk_user_team_user` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_user`
--

LOCK TABLES `team_user` WRITE;
/*!40000 ALTER TABLE `team_user` DISABLE KEYS */;
INSERT INTO `team_user` VALUES (92,44,37),(93,44,36),(94,44,38);
/*!40000 ALTER TABLE `team_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_seq` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `profile` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int NOT NULL DEFAULT '0',
  `deleted_at` datetime(6) DEFAULT NULL,
  `role` enum('ADMIN','GUEST','MEMBER') NOT NULL DEFAULT 'MEMBER',
  PRIMARY KEY (`user_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (36,'elle6044@naver.com','이준용','https://k.kakaocdn.net/dn/ccCsEj/btshTvuyRq7/9r3fbfZL4QcK886A0N98kk/img_640x640.jpg','2023-10-04 14:19:45','2023-10-04 14:19:45',0,NULL,'MEMBER'),(37,'wnsgud7131@naver.com','쫀디기','https://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg','2023-10-04 14:39:05','2023-10-04 14:39:05',0,NULL,'MEMBER'),(38,'chldudw@naver.com','경인','https://k.kakaocdn.net/dn/hyiJ7/btstxmAQFnT/kPTaKK8lBifHpkQOntSOf0/img_640x640.jpg','2023-10-04 14:58:21','2023-10-04 14:58:21',0,NULL,'MEMBER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-05 22:19:37
