<h1> Login</h1>

<form action="/api/login" method="post">

	<h3>Email :</h3><input type="name" name="mail_user"/><br/>

	<h3>Password :</h3><input type="name" name="password_user"/><br/>

	<input type="submit" name="submit"/><br/>


</form>

<?php
if (isset($_COOKIE['user'])) {
	$data = $_COOKIE['user'];
	$response = json_decode($data, true);
	$name = $response['name_user'];
	echo $name;	
} else {
	echo 'pas de user';
}
 ?><?php /**PATH C:\Users\mathi\Documents\ProjetWeb\projet\resources\views/login.blade.php ENDPATH**/ ?>