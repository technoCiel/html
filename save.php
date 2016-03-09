<?php 
//print_r($_POST);exit;
require_once("includes/config.php");

$users = new users;
if (isset($_POST['d'])&& isset($_POST['id'])){
	
	if($users->delete($users->table,"id='".$_POST['id']."'"))
	{
		echo 1;
	}
	else{
		echo 0;
	}
	
}
else if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['mobile']) && !isset($_POST['id']))
{
	
	$selectuser = $users->select($users->table,'',"mobile='".$_POST['mobile']."'");
	print_r(count($selectuser));exit;
	if(count($selectuser)>0)
	{
		echo 1;
	}
	else
	{
		if($users->save($users->table,$_POST))
			echo 2;
		else
			echo 0;	
	}
	
}
else
{
	if($users->save($users->table,$_POST,"id='".$_POST['id']."'"))
	{
		echo 1;
	}
	else
	{
		echo 0;
	}
	
}
?>