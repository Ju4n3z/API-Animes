const options = {
	method: 'GET',
	params: {limit: '3'},
	headers: {
		'X-RapidAPI-Key': '43fb46b3ddmshb564e496bdd54f2p19a28bjsn9174e7cf60a2',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

//import { CardTop } from "../components/card.js";

/*const top3 = (async () => {
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
	console.log(topTitulo);
	console.log(topUrl);
	let top = document.querySelector('#topM');
	top.innerHTML = "";
	for (let j = 0; j < 3; j++) {
		let card = new CardTop(topTitulo[j], topUrl[j]);
		top.appendChild(card);
		card.setAttribute("class", "col-3 d-block");
	}
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