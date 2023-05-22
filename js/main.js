//import { CardTop } from "../components/card.js";
import { CardResultados } from "../components/resultados.js";

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
	for (let i = 0; i < id.length; i++) {
		const url = `https://myanimelist.p.rapidapi.com/anime/${id[i]}`;
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			let carta = new CardResultados(result.title_ov, result.picture_url, result.synopsis, id[i]);
			div1.appendChild(carta);
			carta.setAttribute("class", "card");
			carta.setAttribute("style", "width: 18rem;");
		} catch (error) {
			console.error(error);
		}
}
}

const funcionPrincipal = async (buscar) => {
	const url = `https://myanimelist.p.rapidapi.com/anime/search/${buscar}/8`;

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
	funcionPrincipal(data.buscar)
})