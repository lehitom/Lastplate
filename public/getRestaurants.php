<?php
	require("connectDB.php");
	$db = get_db();
	$sql = "SELECT res_id, res_name, address FROM restaurants r INNER JOIN locations l ON l.location_id = r.location_id WHERE l.zipcode = ? ORDER BY res_id DESC";
	
$test = $db->prepare($sql);
$test->bind_param("s", $_GET['q']);
$test->execute();
$test->store_result();
$test->bind_result($rid, $rname, $adr);
$test->fetch();
$test->close();

echo "<table>";
echo "<tr>";
echo "<th>Restaurant ID</th>";
echo "<td>" . $rid . "</td>";
echo "<th>Restaurant Name</th>";
echo "<td>" . $rname . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "</tr>";
echo "</table>";
?>

