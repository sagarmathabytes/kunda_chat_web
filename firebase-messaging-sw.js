importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyANli_9iZXW8l2N2Gwqtt1Azu-bxBqKrNI",
  authDomain: "kundaapp-d3e16.firebaseapp.com",
  databaseURL: "https://kundaapp-d3e16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kundaapp-d3e16",
  storageBucket: "kundaapp-d3e16.firebasestorage.app",
  messagingSenderId: "500714937837",
  appId: "1:500714937837:web:42ec97533cc26be29a9be4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("🔔 Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
