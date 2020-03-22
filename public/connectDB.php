<?php
function get_db()
{

   // default Heroku Postgres configuration URL
   $dbUrl = getenv('DATABASE_URL');

   if (empty($dbUrl)) {
      // example localhost configuration URL with postgres username and a database called cs313db
      echo '<script language="text/javascript">';
	  echo 'alert("Database failed to load")';
      echo '</script>';
   }

   $dbopts = parse_url($dbUrl);

   // print "<p>$dbUrl</p>\n\n";

   $dbHost = $dbopts["host"];
   $dbPort = $dbopts["port"];
   $dbUser = $dbopts["user"];
   $dbPassword = $dbopts["pass"];
   $dbName = ltrim($dbopts["path"], '/');

   // print "<p>pgsql:host=$dbHost;port=$dbPort;dbname=$dbName</p>\n\n";

   try {
      $db = new PDO("pgsql:host=$dbHost;port=$dbPort;dbname=$dbName", $dbUser, $dbPassword);
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   } catch (PDOException $ex) {
      print "<p>error: " . $ex->getMessage() . "</p>\n\n";
      die();
   }
      
   return $db;
}?>
