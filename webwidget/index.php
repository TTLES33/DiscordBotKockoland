<!doctype html>
<html>
  <head>
    <title>Discord Widget</title>
    <style>
      body{
        background: #e3e3e3;
        margin: 0;
        font-family: 'Asap', sans-serif;
      }
      .container{
        background: white;
        width: 13%;
        position: absolute;
        top: 30%;
        left: 45%;
        border-radius: 10px;
      }
      .left{
        float: left;
        box-sizing: border-box;
        width: 50%;
        text-align: center;
      }
      .right{
        float: left;
        box-sizing: border-box;
        width: 50%;
        text-align: center;
      }
      .first{
        overflow: hidden;
        padding: 0;
        padding-bottom: 15px;
        text-align: center;
      }
      .stav_online{
        background: #c1ff8f;
        float: left;
        width: 100%;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-right: 5px;
        margin: 0;
      }
      .invite{
        font-weight: bold;
        color: black;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        text-align: center;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
      }
      .invite:hover{
        font-size: 18px;
      }
    </style>
  </head>
  <body>
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
    ?>
    <!-- TEST -->
    <table>
      <tr>
        <td><?php echo $staff_online; ?></td>
        <td><?php echo $celkem; ?></td>
      </tr>
    </table>
    <!-- Widget data -->
    <div class="container">
      <div class="first" style="padding-top: 20px;">
        <div class="left">Název: </div>  <div class="right">  SkyBlock | Kockoland </div>
      </div>
      <div class="first">
        <div class="left">Uživatelů: </div>  <div class="right">  <?php echo $online; echo " / "; echo $celkem;?></div>
      </div>
      <div class="first">
        <div class="left">Kód Pro Připojení: </div>  <div class="right">  <a href="https://discord.com/invite/BSB8zJqX?utm_source=Discord%20Widget&utm_medium=Connect" class="invite">BSB8zJqX</a></div>
      </div>
      <div class="first">
        <div class="<?php echo ($staff_online > 0)?'stav_online">Management je Online ('.$staff_online. ')':'stav_offline"> × Management není Online × '; ?></div>
      </div>
      <div class="first">
        <a href="https://discord.com/invite/BSB8zJqX?utm_source=Discord%20Widget&utm_medium=Connect"> <img src="discord.png" style=" width: 80%; padding: 10%; padding-bottom: 5px; padding-top: 5px;"></a>
      </div>
    </div>
  </body>
</html>
