$('.chosen-select').chosen()

document.querySelector('#attendanceTypeInput').addEventListener('change', e => {
	switch (e.target.value) {
		case 'QR':
			document.querySelector('#Form').classList.add('hidden')
			document.querySelector('#QR').classList.remove('hidden')
			break
		case 'Form':
			document.querySelector('#Form').classList.remove('hidden')
			document.querySelector('#QR').classList.add('hidden')
			break
		default:
			document.querySelector('#Form').classList.add('hidden')
			document.querySelector('#QR').classList.add('hidden')
			break
	}
})
