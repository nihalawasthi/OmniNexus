let modal = document.getElementById("myModal");

function openModal() {

	modal.style.display = "block";
	document.body.style.overflow = 'hidden'

	console.log('open')
}

function closeModal () {

	modal.style.display = "none";
	document.body.style.overflow = ''

	console.log('close')
}

window.onclick = function (event) {

	if (event.target == modal) {

		closeModal()
	}
}



// =========================================

//Ben 10 Classic
document.getElementById('nav-tab-content-os').addEventListener('click', (event) => {

	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	let key = 0

	function alienFilterBPOS(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	let filteredAlienBPOS = arrBenPrimeClassicAliens.filter(alienFilterBPOS)

	filteredAlienBPOS.forEach((alien) => {

		let modalContentListBPOS = () => {

			for(let i = 0; i < alien.imgOs.length; i++) {

				var modalListBPO = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOs[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPO
		}

		let modalBenPrimeOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomeIngles}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPOS()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeOs
	})
}) 


//Ben 10 Alien Force
document.getElementById('nav-tab-content-af').addEventListener('click', (event) => {

	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	let key = 0


	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBPAF(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBPAFos(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	//Aplica o filtro e armazena o alien retornado
	let filteredAlienBPAF = arrBenPrimeAfAliens.filter(alienFilterBPAF)
	
	let filteredAlienBPAFos = arrBenPrimeAfClassicAliens.filter(alienFilterBPAFos)
	

	//Joga na tela o valor filtrado
	filteredAlienBPAF.forEach((alien) => {

		let modalContentListBPAF = () => {

			for(let i = 0; i < alien.imgAf.length; i++) {

				var modalListBPAF = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgAf[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPAF
		}

		let modalBenPrimeAf = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPAF()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`

		return modalBenPrimeAf
	})

	filteredAlienBPAFos.forEach((alien) => {

		let modalContentListBPAFos = () => {

			for(let i = 0; i < alien.imgAfClassic.length; i++) {

				var modalListBPAFos = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgAfClassic[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPAFos
		}

		let modalBenPrimeAfOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPAFos()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`

		return modalBenPrimeAfOs
	})
})


//Ben 10 Ultimate Alien
document.getElementById('nav-tab-content-ua').addEventListener('click', (event) => {


	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	document.getElementsByClassName('modal-alt-forms')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	//Iteração para não precisar usar ID repetido nos itens da lista de aliens
	let key = 0


	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBPUA(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBPUAul(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBPUAos(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}
	

	//Aplica o filtro e armazena o alien retornado
	let filteredAlienBPUA = arrBenPrimeUaAliens.filter(alienFilterBPUA)

	let filteredAlienBPUAul = arrBenPrimeUaUltimateAliens.filter(alienFilterBPUAul)

	let filteredAlienBPUAos = arrBenPrimeUaClassicAliens.filter(alienFilterBPUAos)
	

	//Joga na tela o valor filtrado
	filteredAlienBPUA.forEach((alien) => {

		let modalContentListBPUA = () => {

			for(let i = 0; i < alien.imgUa.length; i++) {

				var modalListBPUA = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgUa[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPUA
		}

		let modalBenPrimeUa = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPUA()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeUa
	})

	filteredAlienBPUAul.forEach((alien) => {

		let modalContentListBPUAul = () => {

			for(let i = 0; i < alien.imgUaUlti.length; i++) {

				var modalListBPUAul = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgUaUlti[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPUAul
		}

		let modalBenPrimeUaUlti = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPUAul()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`

		return modalBenPrimeUaUlti
	})

	filteredAlienBPUAos.forEach((alien) => {

		let modalContentListBenPrimeUaOs = () => {

			for(let i = 0; i < alien.imgUaClassic.length; i++) {

				var modalListBenPrimeUaOs = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgUaClassic[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBenPrimeUaOs
		}

		let modalContentListAltFormsBenPrimeUaOs = () => {

			for(let i = 0; i < alien.episodes.epiImg; i++) {
				
				var modalListBenPrimeUsOsHU = document.getElementsByClassName('modal-alt-forms')[0].innerHTML += `

					<li> 

						<p>${alien.episodes.epiName}</p>

						${imgHU(alien.episodes.epiImg[i])}
					
					</li>

				`
				var teste = alien.episodes[i].epiName
			}

			return modalListBenPrimeUsOsHU
		}

		let modalBenPrimeUaOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBenPrimeUaOs()}
			</ul>

			<div class="modal-alt-forms">

				<div class="modal-alt-content">

					
				
				</div>                  

			</div>
		
		`

		return modalBenPrimeUaOs
	})
	
})


//Ben 10 Omniverse
document.getElementById('nav-tab-content-ov').addEventListener('click', (event) => {


	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '

	let pegaSeasonName = event.target.getAttribute('data-season')

	//Iteração para não precisar usar ID repetido nos itens da lista de aliens
	let key = 0


	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBPOV(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBPOVos(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBPOVaf(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBPOVua(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}


	//Aplica o filtro e armazena o alien retornado
	let filteredAlienBPOV = arrBenPrimeOvAliens.filter(alienFilterBPOV)

	let filteredAlienBPOVos = arrBenPrimeOvClassicAliens.filter(alienFilterBPOVos)

	let filteredAlienBPOVaf = arrBenPrimeOvAfAliens.filter(alienFilterBPOVaf)

	let filteredAlienBPOVua = arrBenPrimeOvUaAliens.filter(alienFilterBPOVua)


	//Joga na tela o valor filtrado
	filteredAlienBPOV.forEach((alien) => {

		let modalContentListBPOV = () => {

			for(let i = 0; i < alien.imgOv.length; i++) {

				var modalListBPOV = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOv[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPOV
		}

		let modalBenPrimeOv = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPOV()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeOv
	})

	filteredAlienBPOVos.forEach((alien) => {

		let modalContentListBPOVos = () => {

			for(let i = 0; i < alien.imgOvClassic.length; i++) {

				var modalListBPOVos = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOvClassic[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPOVos
		}

		let modalBenPrimeOvOs = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPOVos()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeOvOs
	})

	filteredAlienBPOVaf.forEach((alien) => {

		let modalContentListBPOVaf = () => {

			for(let i = 0; i < alien.imgOvAf.length; i++) {

				var modalListBPOVaf = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOvAf[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPOVaf
		}

		let modalBenPrimeOvAf = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPOVaf()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeOvAf
	})

	filteredAlienBPOVua.forEach((alien) => {

		let modalContentListBPOVua = () => {

			for(let i = 0; i < alien.imgOvUa.length; i++) {

				var modalListBPOVua = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgOvUa[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBPOVua
		}

		let modalBenPrimeOvUa = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
				<span class="close" onclick="closeModal()">&times;</span>
				<h2>${alien.nomeIngles}</h2>
			</div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBPOVua()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenPrimeOvUa
	})
})


//Ben 10 Reboot
document.getElementById('nav-tab-content-rb').addEventListener('click', (event) => {

	
	document.getElementsByClassName('modal-card-list')[0].innerHTML = ' '
	
	let pegaSeasonName = event.target.getAttribute('data-season')

	let key = 0


	//Filtra todo o array de aliens e retorna o alien com o SeasonName igual ao do alien clicado
	function alienFilterBR(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBRot(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBRok(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}

	function alienFilterBRon(value) {
		if(value.seasonName === pegaSeasonName){
			return value
		}
	}


	//Aplica o filtro e armazena o alien retornado
	let filteredAlienBR = arrBenRebootAliens.filter(alienFilterBR)

	let filteredAlienBRot = arrBenRebootOmnitunadoAliens.filter(alienFilterBRot)

	let filteredAlienBRok = arrBenRebootOmnikixAliens.filter(alienFilterBRok)

	let filteredAlienBRon = arrBenRebootOmninautaAliens.filter(alienFilterBRon)


	//Joga na tela o valor filtrado
	filteredAlienBR.forEach((alien) => {

		let modalContentListBR = () => {

			for(let i = 0; i < alien.imgRb.length; i++) {

				var modalListBR = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRb[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBR
		}

		let modalBenRb = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomeIngles}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBR()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRb
	})

	filteredAlienBRot.forEach((alien) => {

		let modalContentListBRot = () => {

			for(let i = 0; i < alien.imgRbTunado.length; i++) {

				var modalListBRot = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRbTunado[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBRot
		}

		let modalBenRbOt = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomeIngles}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBRot()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRbOt
	})

	filteredAlienBRok.forEach((alien) => {

		let modalContentListBRok= () => {

			for(let i = 0; i < alien.imgRbKix.length; i++) {

				var modalListBRok = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRbKix[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBRok
		}

		let modalBenRbOk = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomeIngles}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBRok()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRbOk
	})

	filteredAlienBRon.forEach((alien) => {

		let modalContentListBRon = () => {

			for(let i = 0; i < alien.imgRbNauta.length; i++) {

				var modalListBRon = document.getElementsByClassName('modal-card-list')[0].innerHTML +=`

					<li class="modal-card" id="${alien.seasonName}${key += 1}">
						
						<img src="${alien.imgRbNauta[i]}" alt="${alien.seasonName}">
						
					</li>

				`
			}

			return modalListBRon
		}

		let modalBenRbOn = document.getElementsByClassName('modal-body')[0].innerHTML = `

			<div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${alien.nomeIngles}</h2>
            </div>

			<ul id="${alien.seasonName}Modal" class="modal-card-list">
				${modalContentListBRon()}
			</ul>

			<div class="modal-alt-forms">

				<div></div>                    

			</div>
		
		`
		return modalBenRbOn
	})
})