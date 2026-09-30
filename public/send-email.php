<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit();
}

// ---------------------------------------------------------
// CPANEL AUTHENTICATED SMTP CONFIGURATION
// ---------------------------------------------------------
$smtpHost = 'mail.ceylonheaventours.com'; // cPanel SMTP Host
$smtpPort = 465;                         // SSL Port (or 587 for TLS)
$smtpUser = 'inquiries@ceylonheaventours.com';
$smtpPass = 'Akeelajceylon143@';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    $data = $_POST;
}

$to = 'inquiries@ceylonheaventours.com';
$subject = isset($data['_subject']) ? $data['_subject'] : 'New Website Inquiry - Ceylon Heaven Tours';
$replyTo = isset($data['_replyto']) ? $data['_replyto'] : (isset($data['Email Address']) ? $data['Email Address'] : '');

$messageBody = "CEYLON HEAVEN TOURS - INQUIRY DETAILS\n";
$messageBody .= "=====================================\n\n";

if (is_array($data)) {
    foreach ($data as $key => $value) {
        if (strpos($key, '_') === 0) continue;
        $messageBody .= ucfirst($key) . ": " . (is_array($value) ? implode(', ', $value) : $value) . "\n";
    }
}

// Function for Authenticated cPanel SMTP Delivery (Guarantees direct delivery to inquiries@ceylonheaventours.com)
function send_cpanel_smtp($host, $port, $user, $pass, $to, $replyTo, $subject, $body) {
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $transport = ($port == 465) ? "ssl://{$host}" : $host;
    $socket = @stream_socket_client("{$transport}:{$port}", $errno, $errstr, 10, STREAM_CLIENT_CONNECT, $context);

    if (!$socket) {
        // Fallback to local socket 127.0.0.1:25 if SSL host fails
        $socket = @stream_socket_client("127.0.0.1:25", $errno, $errstr, 5);
        if (!$socket) return false;
    }

    $read = function() use ($socket) {
        $res = '';
        while ($line = fgets($socket, 512)) {
            $res .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $res;
    };

    $write = function($cmd) use ($socket) {
        fputs($socket, $cmd . "\r\n");
    };

    $read(); // 220 banner
    $write('EHLO ceylonheaventours.com');
    $read();

    // Authenticate if password provided
    if (!empty($pass) && $pass !== 'YOUR_EMAIL_PASSWORD_HERE') {
        $write('AUTH LOGIN');
        $read();
        $write(base64_encode($user));
        $read();
        $write(base64_encode($pass));
        $authRes = $read();
        if (strpos($authRes, '235') === false) {
            fclose($socket);
            return false;
        }
    }

    $write("MAIL FROM: <{$user}>");
    $read();
    $write("RCPT TO: <{$to}>");
    $read();
    $write("DATA");
    $read();

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: Ceylon Heaven Tours <{$user}>\r\n";
    $headers .= "To: <{$to}>\r\n";
    $headers .= "Reply-To: <" . ($replyTo ? $replyTo : $user) . ">\r\n";
    $headers .= "Subject: {$subject}\r\n";

    $write($headers . "\r\n" . $body . "\r\n.\r\n");
    $dataRes = $read();

    $write("QUIT");
    fclose($socket);

    return strpos($dataRes, '250') !== false || strpos($dataRes, 'OK') !== false;
}

$success = false;

// 1. Try Authenticated SMTP first
if (!empty($smtpPass) && $smtpPass !== 'YOUR_EMAIL_PASSWORD_HERE') {
    $success = send_cpanel_smtp($smtpHost, $smtpPort, $smtpUser, $smtpPass, $to, $replyTo, $subject, $messageBody);
}

// 2. Fallback to direct local mailer if SMTP not configured or failed
if (!$success) {
    $headers = array(
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: Ceylon Heaven Tours <inquiries@ceylonheaventours.com>',
        'To: inquiries@ceylonheaventours.com',
        'Reply-To: ' . ($replyTo ? $replyTo : 'inquiries@ceylonheaventours.com'),
        'X-Mailer: PHP/' . phpversion()
    );
    $success = @mail($to, $subject, $messageBody, implode("\r\n", $headers), "-f inquiries@ceylonheaventours.com");
}

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully to inquiries@ceylonheaventours.com']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email via server']);
}
?>
