import panelTemplate from './template.ahtml';
import setEventsForTemplate from './set-events-for-template';
import addCustomEmojis from './add-custom-emojis';

export default (options) => {
  const panelEl = document.createElement('div');
  panelEl.setAttribute('class', 'ep-container');
  panelEl.innerHTML = panelTemplate;
  addCustomEmojis(panelEl, options.customEmojis);
  setEventsForTemplate(panelEl, options);

  return panelEl;
};
