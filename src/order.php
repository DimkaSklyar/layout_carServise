<?php 
if($_POST) 
{ 
$to = "sabotender@mail.ru"; //куда отправлять письмо 
$subject = "ЗАЯВКА"; //тема 
$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>ЗАЯВКА!</i> </span><br><br> 
Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name'].'</span><br> 
Телефон: <span style="font-weight:bold;color:#339900;">'.$_POST['phone'].'</span><br> 
Комментарий: <span style="font-weight:bold;color:#339900;font-size:24px;"> '.$_POST['comment'].'</span>'; 
$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: <info@авто-трансфер-юг.рф\r\n"; // от кого, придумайте ящик или укажите почту своего сайта. 
$result = mail($to, $subject, $message, $headers); 

if ($result){ 
echo "<p style='text-transform: uppercase; 
font-size: 1.4em; 
background-color: #fecb18; 
font-weight: 700; 
padding: .4em; 
box-shadow: 0 19px 49px 0px rgba(81,74,48,0.3); 
text-align: center;'>Сообщение успешно отправлено.</br> 
Скоро Вам перезвонят</p>"; 
} 
} 
?>