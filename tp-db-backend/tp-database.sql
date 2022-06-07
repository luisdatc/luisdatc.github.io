CREATE TABLE IF NOT EXISTS `socios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `apellido` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `edad` tinyint NOT NULL,
  `fecha` timestamp NOT NULL,
  `provincia` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci COMMENT='tabla de socios para codo a codo. ';

INSERT INTO `socios` (`id`, `nombre`, `apellido`, `edad`, `fecha`, `provincia`) VALUES
	(1, 'Luis', 'Torres', 30, '1991-08-25 13:45:26', 'CABA'),
	(2, 'Jorge', 'Moreno', 17, '2005-03-01 02:46:08', 'CABA'),
	(3, 'Ender', 'Montiel', 31, '1998-05-27 02:46:39', 'CABA'),
	(4, 'Franco', 'Horisberger', 34, '1989-12-09 02:47:41', 'CABA'),
	(5, 'Mei', 'Lay', 30, '1991-06-04 02:48:45', 'CABA'),
	(6, 'David', 'Ng', 27, '1994-05-27 02:56:19', 'CABA');