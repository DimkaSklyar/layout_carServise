<?php 
if($_POST) 
{ 
	$to = "cactus8@yandex.ru"; //куда отправлять письмо 
	$subject = "ПОДПИСКА"; //тема 
	$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>ПОДПИСКА!</i> </span><br><br> 
	E-mail: <span style="font-weight:bold;color:#339900;font-size:24px;"> '.$_POST['e-mail'].'</span>'; 
	$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
	$headers .= "From: info@my-site.ru\r\n"; // от кого, придумайте ящик или укажите почту своего сайта. 
	$result = mail($to, $subject, $message, $headers); 
	
	if ($result){ 
		echo "<p style='text-transform: uppercase; 
		color: #fff;
		font-size: 1em; 
		background-color: #011e9e; 
		font-weight: 700; 
		padding: .9em; 
		box-shadow: 0 19px 49px 0px rgba(81,74,48,0.3); 
		text-align: center;'>Спасибо!</p>"; 
	} 
} 
?>