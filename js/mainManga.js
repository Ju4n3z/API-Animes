import { CardTop } from "../components/card.js";
import { CardResultados } from "../components/resultados.js";
import { CardResultados404 } from "../components/resultados404.js";
import { Modal } from "../components/modalM.js";

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
    let genero = "";
	for (let i = 0; i < id.length; i++) {
        const url = `https://myanimelist.p.rapidapi.com/manga/${id[i]}`;
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			let count = Object.keys(result).length
			if (count == 1) {
				let carta = new CardResultados404("404", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/792b3b5a-ebda-4d24-b3f5-86862fd5b710/de4e8bl-38ae3669-fb52-48ce-a970-d0f95c13eb04.jpg/v1/fill/w_715,h_1010,q_75,strp/404_by_neetoku_de4e8bl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMCIsInBhdGgiOiJcL2ZcLzc5MmIzYjVhLWViZGEtNGQyNC1iM2Y1LTg2ODYyZmQ1YjcxMFwvZGU0ZThibC0zOGFlMzY2OS1mYjUyLTQ4Y2UtYTk3MC1kMGY5NWMxM2ViMDQuanBnIiwid2lkdGgiOiI8PTcxNSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-ID5eAzw2hLyaT9jxh1JNCdMp0p3gcitVSa_4whKGC0", "No se encontró el anime");
				div1.appendChild(carta);
				carta.setAttribute("class", "card");
				carta.setAttribute("style", "width: 18rem;");
			} else {
                if (result.information.genres != undefined) {
                    genero = result.information.genres[0].name;
                } else {
                    genero = result.information.genre[0].name;;
                }
				let carta = new CardResultados(result, id[i]);
				div1.appendChild(carta);
				carta.setAttribute("class", "card");
				carta.setAttribute("style", "width: 18rem;");
				let modal = new Modal(result, genero);
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
	const url = `https://myanimelist.p.rapidapi.com/manga/search/${buscar}/4`;

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
    let topA = document.querySelector('#topA');
	topA.removeAttribute("style");
	let top = document.querySelector('#topM');
	top.innerHTML = "";
	for (let i = 0; i < 3; i++) {
		let card = new CardTop(topTitulo[i], topUrl[i]);
		top.appendChild(card);
		card.setAttribute("class", "col-3 d-block");
	}
}

const top3 = (async () => {
	const url = 'https://myanimelist.p.rapidapi.com/manga/top/all';

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