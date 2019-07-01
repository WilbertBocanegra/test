// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  view: {
    stackPages: true
  },
  statusbar: {
    enabled: true,
    androidBackgroundColor: '#fff',
    androidTextColor: 'black'
  },
  photoBrowser: {
    toolbar: false,
    swipeToClose: true,
    navbar: false,
    expositionHideCaptions: true
  },
  navbar: {
    mdCenterTitle: true,
    showOnPageScrollEnd: false,
    showOnPageScrollTop: false
  },
  dialog: {
    // change default "OK" button text
    buttonOk: 'Aceptar',
  },
  card: {
    swipeToClose: false,
  },
  // App routes
  routes: routes,
});

var mainView = app.views.create('.view-main', {
  url: '/'
});


app.on('dialogOpen', function() {
  app.statusbar.setBackgroundColor('#999999');
});

app.on('dialogClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});

app.on('popoverOpen', function() {
  app.statusbar.setBackgroundColor('#999999');
});

app.on('popoverClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});


app.on('cardBeforeOpen', function() {
  app.statusbar.setBackgroundColor('#009688');
});


app.on('cardClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});

app.on('photoBrowserClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});

app.on('photoBrowserOpen', function() {
  app.statusbar.setBackgroundColor('#000000');
});
document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
  app.dialog.create({
    title: '',
    text: '¿Seguro que quieres salir?',
    buttons: [
      {
        text: 'Si',
        onClick: () => {
          navigator.app.exitApp();
        }
      },
      {
        text: 'No',
      },


    ],
    verticalButtons: false,
  }).open();
}
