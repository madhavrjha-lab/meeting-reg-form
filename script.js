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

document.querySelector('#schoolInput').addEventListener('change', e => {
	const principalName = document.querySelector('#principalNameInput')
	const principalDesignation = document.querySelector('#principalDesignationInput')

	if (!e.target.value) {
		principalName.value = principalDesignation.value = ''
	} else {
		principalName.value = 'Principal Name of ' + e.target.value
		principalDesignation.value = 'Designation of ' + e.target.value
	}
})
