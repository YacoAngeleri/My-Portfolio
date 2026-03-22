<?php

/* En GitHub Pages el <form> de index.html usa FormSubmit; si voy a usar PHP, cambio el action a mail.php. */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	header('Location: index.html', true, 302);
	exit;
}

$sendto = 'yacoang@gmail.com';
$subject = 'Formulario de contacto de mi portafolio';

/** Evita inyección de cabeceras en campos de texto */
function sanitize_line(string $value): string
{
	return str_replace(["\r", "\n", "\0"], '', trim($value));
}

$nombre = sanitize_line((string) ($_POST['nombre'] ?? ''));
$email = sanitize_line((string) ($_POST['email'] ?? ''));
$asunto = sanitize_line((string) ($_POST['asunto'] ?? ''));
$mensaje = trim((string) ($_POST['mensaje'] ?? ''));

if ($nombre === '' || $email === '' || $asunto === '' || $mensaje === '') {
	header('Location: index.html?envio=error', true, 302);
	exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	header('Location: index.html?envio=error', true, 302);
	exit;
}

$cuerpo =
	"Nombre: {$nombre}\n" .
	"Email: {$email}\n" .
	"Asunto: {$asunto}\n" .
	"Mensaje:\n{$mensaje}\n";

$fromHeader = 'Portfolio contacto <' . $sendto . '>';

$headers = [
	'MIME-Version: 1.0',
	'Content-Type: text/plain; charset=UTF-8',
	'From: ' . $fromHeader,
	'Reply-To: ' . $email,
	'X-Mailer: PHP/' . PHP_VERSION,
];

// Comando para enviar el mail 
$sent = @mail($sendto, $subject, $cuerpo, implode("\r\n", $headers));

?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formulario enviado</title>
</head>
<body>
	<?php if ($sent): ?>
		<p>Enviado correctamente. <a href="index.html">Volver al inicio</a></p>
	<?php else: ?>
		<p>No se pudo enviar el mensaje en este momento. Intente de nuevo más tarde o escriba directamente a
			<a href="mailto:<?php echo htmlspecialchars($sendto, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($sendto, ENT_QUOTES, 'UTF-8'); ?></a>.
		</p>
		<p><a href="index.html">Volver al inicio</a></p>
	<?php endif; ?>
</body>
</html>