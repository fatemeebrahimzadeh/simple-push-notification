# simple-push-notification

# 1

cerate swDev.ts in src and sw.js in public folder for service worker subscription

applicationServerKey should be a vapid ket that web push generated at backend but now is a static one that generated with website

swDev is called at index.tsx

# 2

you can push notification with this server worker and have some addEventListoner (e.g. fetch time or install time) 

# 3

cause of we didn't have backend so I use firebase for this project 

1. create a firebase project then go to console
2. get the firebaseConfig from the project that created 
3. put them at firebase.js file and export the instance that created
4. import firebase file in app.tsx and call firebase message and get the token for give it to firebase cload messaging service 
 but it has a error about scope of service worker that use because of that go to 6
6. firebase-messaging-sw.js file should be created for that firebase error 
and its done!
congratulation


refences:
https://medium.com/@a7ul/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679
https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
this is for this priject:
https://www.youtube.com/watch?v=RbTDbadshCQ&list=PL8p2I9GklV46NFHdQMFBjXvxwVqtJpa2N&index=4



warning!
this project doesn't work on production mode because you get a personal token per pc and you should set them in firebase to ger notification 