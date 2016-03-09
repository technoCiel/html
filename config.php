<?php   
define('HTTP_DOMAIN','http://localhost/jqajax');

  define('FTP_DOMAIN', 'D:/xampp/htdocs/jqajax');

  define('FTP_AVATAR_DIR', FTP_DOMAIN.'images/Avatar/');
  define('HTTP_AVATAR_DIR', HTTP_DOMAIN.'images/Avatar/');

  require_once('models/db.php');
  require_once('includes/database.php');
  session_name('Auth');
  session_start();
?>