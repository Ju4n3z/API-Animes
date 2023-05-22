//import { CardTop } from "../components/card.js";
import { CardResultados } from "../components/resultados.js";
import { CardResultados404 } from "../components/resultados404.js";
import { Modal } from "../components/modal.js";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43fb46b3ddmshb564e496bdd54f2p19a28bjsn9174e7cf60a2',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

const agregarCartas = async (id) => {
	let resultados = document.querySelector('#resultados');
	resultados.removeAttribute("style");
	let div1 = document.querySelector('#div1');
	let body = document.querySelector('#body');
	for (let i = 0; i < id.length; i++) {
		const url = `https://myanimelist.p.rapidapi.com/anime/${id[i]}`;
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			let count = Object.keys(result).length
			console.log(count);
			if (count == 1) {
				let carta = new CardResultados404("404", "../images/noencontrado.webp", "No se encontró el anime");
				div1.appendChild(carta);
				carta.setAttribute("class", "card");
				carta.setAttribute("style", "width: 18rem;");
			} else {
				let carta = new CardResultados(result.title_ov, result.picture_url, result.synopsis.slice(0, 50) + "...", id[i]);
				div1.appendChild(carta);
				carta.setAttribute("class", "card");
				carta.setAttribute("style", "width: 18rem;");
				let modal = new Modal(result, id);
				body.appendChild(modal);
				modal.setAttribute("class", "modal fade");
				modal.setAttribute("id", id[i]);
				modal.setAttribute("tabindex", "-1");
				modal.setAttribute("aria-labelledby", "exampleModalLabel");
				modal.setAttribute("aria-hidden", "true");
			}
		} catch (error) {
			console.error(error);
		}
}
}

const funcionPrincipal = async (buscar) => {
	const url = `https://myanimelist.p.rapidapi.com/anime/search/${buscar}/4`;

try {
	const response = await fetch(url, options);
	const result = await response.json();
	let id = [];
	for (let i = 0; i < 2; i++) {
		id.push(result[i].myanimelist_id);
	}
	console.log(id);
	agregarCartas(id);
} catch (error) {
	console.error(error);
}
}

/**
const agregarTop = async (topTitulo, topUrl) => {
	let top = document.querySelector('#topM');
	top.innerHTML = "";
	for (let i = 0; i < 3; i++) {
		let card = new CardTop(topTitulo[i], topUrl[i]);
		top.appendChild(card);
		card.setAttribute("class", "col-3 d-block");
	}
 */

/*(const top3 = (async () => {
	const url = 'https://myanimelist.p.rapidapi.com/anime/top/airing';

try {
	const response = await fetch(url, options);
	const result = await response.json();
	let topTitulo = [];
	let topUrl = [];
	for (let i = 0; i < 3; i++) {
		topTitulo.push(result[i].title);
		topUrl.push(result[i].picture_url);
	}
	agregarTop(topTitulo, topUrl);
} catch (error) {
	console.error(error);
}
})();*/

let formulario = document.querySelector('#formulario');

formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
	let data = Object.fromEntries(new FormData(e.target));
	let dataC = data.buscar.replaceAll(" ", "%20");
	funcionPrincipal(dataC)
})