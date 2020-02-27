import translations from './translations.js';
let lang = String(navigator.language || navigator.userLanguage).split('-')[0];
const currentTranslations = {...translations};
const supported = ['en'];
if (!supported.includes(lang)) {
	lang = supported[0];
}
function localize(key = '') {
	const string = currentTranslations[lang][key]||key;
	const regex = new RegExp('\\\\n', 'g');
	return string.replace(regex, '\n');
}
export default localize;
