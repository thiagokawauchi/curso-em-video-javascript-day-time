function loadTime () {
	let date = new Date()
	let hours = date.getHours()

	document.querySelector('#hours').innerHTML = `Agora são ${hours} horas.` 

	if (hours >= 5 && hours < 12) {
		document.querySelector('#daytime-image').src = './ex014-assets/morning.jpeg'
		document.body.style.backgroundColor = '#e8d7a0'
	} else if (hours >= 12 && hours < 18) {
		document.querySelector('#daytime-image').src = './ex014-assets/afternoon.jpg'
		document.body.style.backgroundColor = '#f59b42'
	} else {
		document.querySelector('#daytime-image').src = './ex014-assets/night.jpg'
		document.body.style.backgroundColor = '#272845'
	}
}
