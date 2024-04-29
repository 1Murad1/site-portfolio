export const emailValidation = {
	required: 'Required',
	validate: value => {
		if (value.match(/[а-яА-Я]/)) {
			return `Mail must contain Latin letters`
		} else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			return 'Enter correct email'
		}
		return true
	},
}

export const phoneValidation = {
	required: 'Required',
	validate: value => {
		if (!value.match(/^\+(?:[0-9]?){6,14}[0-9]$/)) {
			return 'Please enter a correct phone number +1234567890'
		}
		return true
	},
}

export const nameValidation = {
	required: 'Required',
	validate: value => {
		if (value.match(/[#@%?*]/) || value.length < 1 || value.length > 100) {
			return 'Enter from 1 to 40 characters, verification: # @ % ? *'
		}
		return true
	},
}

export const messageValidation = {
	validate: value => {
		if (
			(value && value.length < 2) ||
			(value && value.match(/[#@%?*]/)) ||
			(value && value.length > 235)
		) {
			return 'Enter between 2 and 235 characters, excluding: # @ % ? *'
		}
		return true
	},
}
