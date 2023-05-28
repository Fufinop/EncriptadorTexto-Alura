const buttonEncriptar = document.getElementById('buttonEncriptar');
const buttonDesencriptar = document.getElementById('buttonDesencriptar');

buttonEncriptar.addEventListener('click', encriptar);
buttonDesencriptar.addEventListener('click', desencriptar);

function quitarAcentos(texto) {
	return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function copiarAlPortapapeles(texto) {
	const textoACopiar = texto;

	navigator.clipboard
		.writeText(textoACopiar)
		.then(() => {
			console.log('Texto copiado al portapapeles: ' + textoACopiar);
		})
		.catch(error => {
			console.error('Error al copiar el texto: ', error);
		});
}

function encriptar() {
	let textoS = document.getElementById('texto').value;
	let texto = quitarAcentos(textoS.toLowerCase());
	const PE = document.getElementById('PadreEncriptado');

	while (PE.firstChild) {
		PE.removeChild(PE.firstChild);
	}

	let textoCifrar = texto
		.replace(/e/gi, 'enter')
		.replace(/i/gi, 'imes')
		.replace(/a/gi, 'ai')
		.replace(/o/gi, 'ober')
		.replace(/u/gi, 'ufat');

	if (textoCifrar.length !== 0) {
		PE.innerHTML = '<h2 id="tituloMsg">Texto Encriptado</h2>';
		PE.innerHTML += '<p id="parrafo">' + textoCifrar + '</p>';
		PE.innerHTML +=
			'<button id="botonCopiar" onclick="copiarAlPortapapeles(\'' +
			textoCifrar +
			'\')">Copiar</button>';
	} else {
		const codigoHTML =
			'<img src="img/error.png" alt="signo de error" id="boy" />' +
			'<div class="mensajeEncriptado">' +
			'<h2 id="tituloMsg">Ningún mensaje fue encontrado</h2>' +
			'<p id="parrafo">Ingresa el texto que deseas encriptar</p>' +
			'</div>';
		PE.innerHTML = codigoHTML;
	}
}

function desencriptar() {
	let textoS = document.getElementById('texto').value;
	let texto = quitarAcentos(textoS.toLowerCase());
	const PE = document.getElementById('PadreEncriptado');

	while (PE.firstChild) {
		PE.removeChild(PE.firstChild);
	}

	let textoCifrado = texto
		.replace(/enter/gi, 'e')
		.replace(/imes/gi, 'i')
		.replace(/ai/gi, 'a')
		.replace(/ober/gi, 'o')
		.replace(/ufat/gi, 'u');

	if (textoCifrado.length !== 0) {
		PE.innerHTML = '<h2 id="tituloMsg">Texto Desencriptado</h2>';
		PE.innerHTML += '<p id="parrafo">' + textoCifrado + '</p>';
		PE.innerHTML +=
			'<button id="botonCopiar" onclick="copiarAlPortapapeles(\'' +
			textoCifrado +
			'\')">Copiar</button>';
	} else {
		const codigoHTML =
			'<img src="img/error.png" alt="chico con una lupa" id="boy" />' +
			'<div class="mensajeEncriptado">' +
			'<h2 id="tituloMsg">Ningún mensaje fue encontrado</h2>' +
			'<p id="parrafo">Ingresa el texto que deseas desencriptar</p>' +
			'</div>';

		PE.innerHTML = codigoHTML;
	}
}
