importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js")
const firebaseConfig = {
  apiKey: "AIzaSyC53Z54DdgbiTT114NUn4BDboXBtcrZjkA",
  authDomain: "to-do-list-v2-570c9.firebaseapp.com",
  projectId: "to-do-list-v2-570c9",
  storageBucket: "to-do-list-v2-570c9.appspot.com",
  messagingSenderId: "77388561086",
  appId: "1:77388561086:web:d49638e552837ddc9dfcef"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
  console.log("Recibiste mensaje mientras estabas ausente");
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://img5.goodfon.ru/original/1920x1080/4/88/derevo-tsvety-vesna.jpg"
  }


  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})