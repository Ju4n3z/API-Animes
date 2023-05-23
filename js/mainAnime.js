import { CardTop } from "../components/card.js";
import { CardResultados } from "../components/resultados.js";
import { CardResultados404 } from "../components/resultados404.js";
import { Modal } from "../components/modalA.js";

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
	div1.innerHTML = "";
	let body = document.querySelector('#body');
	let tipo = "";
	let genero = "";
	for (let i = 0; i < id.length; i++) {
		const url = `https://myanimelist.p.rapidapi.com/anime/${id[i]}`;
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			let count = Object.keys(result).length
			if (count == 1) {
				let carta = new CardResultados404("404", "https://cdn.mangaku.my.id/gambar/2021/03/89abf8310ba9efe6aa5eecbd-af34c07df513c05ae2e4d48793fb0106.jpg", "No se encontró el anime");
				div1.appendChild(carta);
				carta.setAttribute("class", "card");
				carta.setAttribute("style", "width: 18rem;");
			} else {
				if (result.information.demographic != undefined) {
					tipo = result.information.demographic[0].name;
				} else {
					tipo = "No definido";
				}
				if (result.information.genres != undefined) {
					genero = result.information.genres[0].name;
				} else {
					genero = result.information.genre[0].name;;
				}
				let carta = new CardResultados(result, id[i]);
				div1.appendChild(carta);
				carta.setAttribute("class", "card");
				carta.setAttribute("style", "width: 18rem;");
				let modal = new Modal(result, tipo, genero);
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
	for (let i = 0; i < 4; i++) {
		id.push(result[i].myanimelist_id);
	}
	agregarCartas(id);
} catch (error) {
	console.error(error);
}
}


const agregarTop = async (topTitulo, topUrl) => {
	let top = document.querySelector('#topM');
	top.innerHTML = "";
	for (let i = 0; i < 3; i++) {
		let card = new CardTop(topTitulo[i], topUrl[i]);
		top.appendChild(card);
		card.setAttribute("class", "col-3 d-block");
	}
}

const top3 = (async () => {
	let topA = document.querySelector('#topA');
	topA.removeAttribute("style");
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
})();

let formulario = document.querySelector('#formulario');

formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
	let data = Object.fromEntries(new FormData(e.target));
	let dataC = data.buscar.replaceAll(" ", "%20");
	funcionPrincipal(dataC)
})