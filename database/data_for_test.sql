use vtc_database;

select * from `client`;

INSERT INTO `enterprise` (`id`,`name`,`balance`,`description`)
VALUES
  (1,"Auctor Non Feugiat Limited","4483.55","risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a"),
  (2,"Magna Cras Convallis Institute","7875.41","euismod est arcu ac orci. Ut semper pretium neque. Morbi"),
  (3,"Et Commodo LLP","6348.84","Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra."),
  (4,"Maecenas Iaculis Inc.","7183.33","penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean"),
  (5,"Sapien Gravida LLC","7115.11","eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus"),
  (6,"Pede Ultrices A Associates","2284.75","Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus"),
  (7,"Donec Tempor Corporation","1385.23","urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus"),
  (8,"Convallis Ante Lectus LLP","9618.97","a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed"),
  (9,"Arcu Vel Quam Industries","0612.35","magna a neque. Nullam ut nisi a odio semper cursus."),
  (10,"In Felis LLC","3172.25","Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu.");
  
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("9C39B63B-824A-E1FD-F6F7-B231E3BBF765","Louis Edwards","42.71","1987-6-13"),
  ("3A95FD48-8C37-A7E1-5B27-7B1C4DA081C4","Connor Miles","01.89","1995-10-30"),
  ("D65FDD16-625A-3E4E-4835-29B532B8CDA1","Chandler Compton","09.42","1981-1-30"),
  ("9678149C-8D5B-FA78-2BAE-A631A814E889","Kennan Bird","08.78","1983-12-11"),
  ("EBC91085-0A97-DB53-D2DA-B2EFE7368867","Wesley Jimenez","03.67","1986-3-2"),
  ("1DD7EECE-C356-B250-9B7D-174AACB2212D","Bertha Finch","09.56","2001-2-15"),
  ("E787292E-D6D8-EB88-60A4-89CD2EDB898E","Bruce Wade","01.75","1994-11-29"),
  ("789635B2-F1BC-0A81-A615-D7B2C8A9F752","May Lindsay","10.58","1987-12-18"),
  ("99AD4E4C-E290-70F0-503A-27A7986C7EF7","Gwendolyn Contreras","28.22","2007-10-11"),
  ("BB29A216-D358-3761-CE1E-1C2D3F566EB4","Nevada Bishop","05.23","1998-3-9");
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("43668DC1-A4F6-5B6C-5A34-C0554E73A07F","Amity Gentry","05.54","1997-4-1"),
  ("8A4642BA-6F9D-B445-5A9F-46EC392AC971","Reece Rodriguez","21.62","2014-9-23"),
  ("D816A21C-B3D8-738D-CBD1-12DA329DD5D9","Ivor Reeves","06.24","1982-9-19"),
  ("0CDE8AFB-DDDE-6FD5-D7ED-73E81BD2D45B","Paula Ortega","05.34","2022-8-12"),
  ("AC252924-9841-17B5-EAB1-51F386904627","Mohammad Kelley","31.26","1987-8-9"),
  ("7BD3C11C-EAA4-8B1D-7B53-6B4971157A41","Winter Gonzalez","63.83","1982-9-2"),
  ("5EE66A96-A69F-74A6-C952-FFFD14D7A5CB","Kimberly Barrett","08.36","2003-11-5"),
  ("5D1665AE-D34C-1FCC-13DD-ED4CB011441D","Meghan Powers","01.41","1995-4-14"),
  ("C459A933-E1B8-B0DE-3A7C-EBDD849059CC","Dalton Rodriquez","01.83","1990-12-24"),
  ("045E1194-82C4-354D-463E-30C9279E970B","Quintessa Casey","97.61","2016-4-28");
  
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("C39352CE-89B5-E883-457A-22DDDE78CEDB","Clinton Moss","33.43","2018-10-24"),
  ("C81DB5B5-153B-6FD5-E2F9-885E316172B1","Alyssa Mann","02.05","2009-4-30"),
  ("EFF9E9BC-698C-E68E-A553-4F8983F236BD","Sydney Santiago","31.33","1996-8-25"),
  ("E76B532C-413C-C843-CBEB-9C608E68DC17","Chaney Weaver","61.10","2012-11-13"),
  ("EDDA0257-FEC7-60BA-513B-6435CC15C736","Brandon Simon","01.72","1983-2-26"),
  ("AA589E6A-73A9-4E22-E1D9-C93447EEC55A","Cedric Gentry","06.73","1990-7-12"),
  ("8D989A49-74C7-49E8-AE4B-4257394C6CAD","Cody Rice","39.72","1995-8-21"),
  ("E180BA65-A241-D26E-752E-D37493F4CCE8","Hunter Russell","06.56","2010-8-10"),
  ("3C59D972-E6ED-823E-4E47-52A28BD0667A","Joseph Sykes","09.14","2018-8-1"),
  ("CD3172A5-B76E-844E-91FD-8830A6DCE722","Myra Mclaughlin","56.57","2021-7-14");
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("58DB8D5E-6534-248C-68B9-C297661FFE99","Hayden Manning","59.25","2018-9-13"),
  ("C6E031B3-DE31-D14A-DF8B-DED475CDCB80","Lacey Carroll","06.71","2021-3-22"),
  ("D441459D-1A26-39AD-ED4E-4CDB7131D80E","Vielka Wallace","08.82","2000-9-21"),
  ("010A30A3-57AD-66C3-57DA-55126B885E70","Evelyn Avila","51.66","2018-5-17"),
  ("3C76BBE1-2D84-8B1C-5122-A7A2C1BC79BC","Igor Montgomery","04.12","2012-5-30"),
  ("B40DA4C3-0DE5-B6C5-481D-2DD5D0684EC4","Harrison Holmes","08.13","1980-3-1"),
  ("06EDF75E-B04B-9B10-4477-4E27A691E8B4","Reed Mooney","85.21","2000-5-17"),
  ("6F88B887-A54F-515D-46E7-AC12312DD87A","Brennan Johnson","06.89","1993-11-17"),
  ("7EAAE2EE-5B09-8FA3-DFD9-4453BD54E15D","Colorado Noble","20.36","2013-10-31"),
  ("09EA8AD9-009E-99DD-1A76-0774EF28AAD6","Nolan Savage","13.49","2021-12-8");
  
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("CBEF3993-4D12-5CE7-8DD8-1E4B031EA445","Nita Black","44.97","1999-2-18"),
  ("28DEC080-62C8-DDB1-E488-1E83418477C5","Ashely Erickson","15.45","2019-2-8"),
  ("608B5AEC-5128-9B96-C32A-2D2B59159AF9","Tobias Richardson","61.84","2000-7-10"),
  ("BBEC06C9-65A9-8A0A-B4DB-AE96EC2DC11C","Hasad Hutchinson","00.72","2009-7-22"),
  ("9EABD844-7281-B677-A729-59CE86FEC212","Jolene Barnett","06.12","1983-7-1"),
  ("EE39908C-4294-8018-17DD-82AD351BB632","Simon Buchanan","37.45","1996-3-11"),
  ("BED3875C-4AC5-3F3C-C4A2-33D2B316AE9E","Frances Osborn","07.67","2018-12-13"),
  ("82C551B5-8E89-CE46-6AE2-7EB4C11E3C65","Price Jarvis","05.54","2022-7-11"),
  ("E8BD6AA4-C99B-7509-33C4-0D239ABF4128","Lynn Vargas","27.03","1999-7-31"),
  ("9196AD99-D2C3-54CF-0A19-13006AA2E682","Norman Brown","93.82","1987-3-28");
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("18BF252C-C53C-D9AC-3D18-7D1E3A308189","Erica Alvarez","19.36","2014-9-29"),
  ("581D6D0E-DCCB-C725-3C52-30EEB32AC633","Maisie Parrish","85.83","1995-6-5"),
  ("86600889-8AA7-8E39-B1CA-5B41DCC353AD","Dolan Glover","38.00","2021-3-8"),
  ("1FAAB2BD-727E-2CAA-1157-D9C1CFE3935A","Regina Sears","22.22","2003-5-11"),
  ("D7724152-E357-4F33-6728-2E0A86141B0B","Ria Robbins","03.47","1981-9-11"),
  ("E57F13C6-A2E8-6CAE-582A-95D646BE48A5","Sharon Beach","02.17","2015-5-25"),
  ("EEC1D244-38E7-339A-64D1-28A5D744EB78","Buckminster Lane","22.53","2021-11-24"),
  ("63F831CF-9E25-379D-8D16-EAE67C31FEE4","Marah Craig","05.43","1989-8-17"),
  ("2F204BAB-BAF2-E383-8957-8E316BA59935","Chava Thomas","03.81","1989-3-21"),
  ("CA8B2175-B2E1-6848-E682-E16C6A46EF9A","Jasper Bullock","51.47","1989-7-19");
  
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("785D2458-D0CC-A6A8-5C7D-086684E5249E","Wyoming Hernandez","04.47","2016-7-5"),
  ("888FB201-6742-42E3-5391-6CEE21A91692","Sasha Pope","48.87","1998-3-16"),
  ("D2A560AB-2C40-D563-3A9B-B71F8BD3CE4B","Grace Lopez","39.67","2004-6-7"),
  ("DCC33773-7F0A-72AB-DCAA-918AC2E87876","Bree Dillard","32.53","2014-2-6"),
  ("1C66DEC7-9C70-D9E9-2AC3-00F44CB53304","Kristen Dickerson","07.64","2007-5-23"),
  ("74B43EAE-77E2-7360-CB2E-B53DEB27A921","Silas Garrett","74.98","2006-5-28"),
  ("D128C421-B06B-18CC-F46B-E32E1405A428","Erasmus Haney","38.93","2009-6-30"),
  ("DE5A41B6-5CB9-EB7C-BC5C-DBC949398657","Orla Herman","06.40","1992-4-25"),
  ("9704E2E8-3CE1-0F07-1E2D-FD85D7D2285B","Briar Moon","76.13","2016-1-27"),
  ("68F8D7D2-7410-7584-6DA5-E8AF8BCA874C","Jocelyn Ware","08.85","2022-2-4");
INSERT INTO `client` (`guid`,`name`,`wallet`,`date`)
VALUES
  ("21876AA3-E7E2-A126-BF96-AE2D6205A686","Valentine Galloway","05.23","1988-11-21"),
  ("661DC09C-FAC7-1471-1E84-72B39FDB4B12","Whitney Ratliff","36.30","1981-6-9"),
  ("61E98925-6BAE-C767-EE22-4C0FB8DA38A8","Riley Stanley","08.46","2004-10-20"),
  ("411FF7CD-B448-1B7A-19D2-4DE04873D28C","Randall Livingston","08.65","2003-4-10"),
  ("81932A35-71E1-38A3-DDFA-68E3A998CD3A","Brett Woodward","20.24","2006-10-19"),
  ("903DAD57-3966-FE96-BFFA-9C4749BA3EE6","Jasmine West","08.65","1987-7-10"),
  ("E5D4E588-6C2C-7D71-DCE6-C976AC6B17B0","Xander Vega","01.19","1995-1-7"),
  ("C7ACD978-BAB2-5607-A7F2-5C78AF7D20DE","Yvette Mercer","06.43","1994-3-27"),
  ("B41B1342-9F27-7264-F59A-AE6574312778","Hedy Hays","62.65","1999-7-31"),
  ("1D1C6DAC-6C8C-D276-3B5F-34C5CCDED323","Natalie Good","72.54","2014-11-16");

