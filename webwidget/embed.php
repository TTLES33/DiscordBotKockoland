<?php
$servername = "database-ttles.cr2b8qefitxx.us-east-2.rds.amazonaws.com";

$username = "admin";

$password = "pristupoveheslo";

$dbname = "kockoland";


  $conn = new mysqli($servername, $username, $password, $dbname);

  if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
  }

  //get column value by id
  function valueById($id){
    global $conn;
    $result = $conn->query("SELECT * FROM KOCKOLAND_STATS WHERE id=$id");

    if($result->num_rows > 0){
      $row = $result->fetch_assoc();
      return $row["hodnota"];
    }else{
      //returns -1 on error
      return -1;
    }
  }

  //online users query
  $online = valueById(6);

  //total users query
  $celkem = valueById(7);

  //staff online query
  $staff_online = valueById(8);

  //staff total query
  $staff_celkem = valueById(9);

  $conn->close();

//staff online
if($staff_online >= 5){
  //5+
  $staffonlinemsg = "Právě je online $staff_online členů managementu";
}elseif($staff_online == 1){
  //=1
  $staffonlinemsg = "Právě je online $staff_online člen managementu";
}else{
  //2-4
  $staffonlinemsg = "Právě jsou online $staff_online členové managementu";
}
?>
    <style>
      .staff{
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .staff_online{
        background: #c1ff8f;
      }
      .staff_offline{
        background: lightcoral;
      }
      .discordstatus td.value{
        font-weight: bold;
      }
      .discordlogo{
        text-align: center;
      }
      .discordlogo img{
        max-height: 130px;
      }
    </style>
    <!-- Widget data -->
    <table class="discordstatus">
      <tr><td>Název:</td><td class="value" style="color: red;">Kockoland | Discord</td></tr>
      <tr><td>Pozvánka:</td><td class="value"><a href="https://discord.gg/XXVRDFU">XXVRDFU</a><td></tr>
      <tr><td>Uživatelů:</td><td class="value"><?php echo $online; ?> / <?php echo $celkem; ?><td></tr>
      <tr><td colspan="2" class="staff staff_<?php echo ($staff_online > 0)?'online':'offline'; ?>"><?php echo ($staff_online > 0)?$staffonlinemsg:'Žádný člen managementu není online'; ?></td></tr>
    </table>
    <div class="discordlogo"><img src="/img/discordlogo.png" alt="Discord Logo" /></div>
