<?php
//if ($_SERVER['REQUEST_METHOD'] === 'GET'){
$f=fopen("gen.php", "w");
$dat=json_decode($_GET["data"], true);
echo $dat["html"]."<style>".$dat["css"]."</style>"."<script>".$dat["js"]."</script>";
fwrite($f, $dat["html"]."<style>".$dat["css"]."</style>"."<script>".$dat["js"]."</script>");
fclose($f);
?>
