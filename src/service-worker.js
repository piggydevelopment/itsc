import { precacheAndRoute } from 'workbox-precaching';

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('fetch', (event) => {
//     // Add any custom caching rules here
// });
self.addEventListener("install", event => {
    console.log("Service worker installed");
 });
 self.addEventListener("activate", event => {
    console.log("Service worker activated");
 });