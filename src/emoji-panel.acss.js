module.exports = api => {
  api.rawImport(__dirname + '/categories-icons/apple.css');

  api.add({
    '.ep': {
      height: '100%',
      display: 'flex',
      'flex-direction': 'column',

      'user-select': 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none',

    },
    '.ep-container': {
      height: '100%',
    },
    '.ep-categories': {
      padding: '3px 0',
      display: 'flex',
      position: 'relative',
      'background-color': '#fff',
    },
    '.ep-slide': {
      position: 'absolute',
      height: '3px',
      'will-change': 'margin-left',
      transition: 'margin-left ease-in-out',
      'background-color': '#93D3CC',
      bottom: '0',
    },
    '.ep-c': {
      cursor: 'pointer',
      flex: '1 1',
      'text-align': 'center',
      color: 'silver',
      opacity: '1',
      ':hover': {
        opacity: '0.8',
      }
    },
    '.ep-c-text': {
      display: 'none',
    },
    '.ep-emojies': {
      flex: '1 1',
      'background-color': '#F0F0F0',
      position: 'relative',
      height: 'calc(100% - 40px)',
      'overflow-y': 'auto',
      '.ep-e': {
        margin: '6px',
        cursor: 'pointer',
      }
    },
    '.ep-emojies-c': {
      display: 'flex',
      'flex-wrap': 'wrap',
      'align-content': 'flex-start',
      ':last-child': {
        position: 'absolute',
        'min-height': '100%',
      }
    },
    '.ep-e-custom': {
      'background-size': 'contain',
    },
  });

  api.raw('.ep::-webkit-scrollbar {       \
      width: 6px!important                \
    }                                     \
    .ep::-webkit-scrollbar-thumb {        \
      background-color: rgba(0,0,0,.2)    \
    }                                     \
    .ep::-webkit-scrollbar-track {        \
      background: rgba(255,255,255,.08)   \
    }                                     \
  ');
}
