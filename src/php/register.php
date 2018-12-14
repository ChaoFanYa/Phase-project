<?php
        $username = @$_POST["username"];
        $password = @$_POST["password"];

        // echo "$username $password" 
        if($username == "" || $password == ""){
            die("参数不全,缺少账号或密码");
        }
        $con = mysql_connect("localhost","root","123456");
        if(!$con){
            die("数据库连接失败" . mysql_error());
        }
        
?>

<?php
//     $username = @$_POST["username"];
//     $password = @$_POST["password"];
//     if($username == "" || $password == ""){
//         die("参数不全,缺少账号或密码");
//     }
    
//     $con = mysql_connect("localhost","root","123456");
//     if(!$con){
//         die("数据库连接失败" . mysql_error());
//     }
//     mysql_select_db("userlist" , $con);
//     if(mysql_error()){
//         die("数据库选中失败".mysql_error());
//     }
//     $sql_insert_item = "INSERT INTO detaillist (username , password) 
//                         VALUES
//                         ( '$username' , '$password');
//                         ";
    
//     $insert_res = mysql_query($sql_insert_item);

//     if(!$insert_res){
//         echo "数据库插入错误" . mysql_error();
//     }
//     echo $insert_res;
    
//     mysql_close($con);
?>