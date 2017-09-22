$Username = "xxx@xxx.com";
$Password = "test";
 
function Send-ToEmail([string]$email) {
 
    $message = new-object Net.Mail.MailMessage;
    $message.From = "xx@xx.com";
    $message.To.Add($email);
    $message.Subject = "subject text here...";
    $message.Body = "body text here...";
 
    $smtp = new-object Net.Mail.SmtpClient("server.com", "587");
    $smtp.EnableSSL = $true;
    $smtp.Credentials = New-Object System.Net.NetworkCredential($Username, $Password);
    $smtp.send($message);
    write-host "Mail Sent" ; 
}

Send-ToEmail  -email "test@gmail.com"