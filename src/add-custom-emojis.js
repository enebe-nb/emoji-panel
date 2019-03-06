const CATEGORY = require('./constant').CATEGORY;

function appendEmoji(category, name, image) {
    let emoji = document.createElement('span');
    emoji.className = 'ep-e ep-e-custom';
    emoji.setAttribute('data-index', name);
    emoji.setAttribute('data-unified', name);
    emoji.style.backgroundImage = 'url(' + image + ')';
    category.append(emoji);
}

export default (el, custom = {}) => {
    let category = el.querySelector(".ep-emojies-c[data-category-id='" + CATEGORY.CUSTOM + "']");
    for (let name in custom) {
        appendEmoji(category, name, custom[name]);
    }
}