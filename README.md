# AwesomePosts

INTRODUCTION
This project is initiated with react-native init
It has below functionnalities:
  - Welcome page + call to action to Post list page
  - Post list page: it fetches posts in https://jsonplaceholder.typicode.com using Redux-Saga
  - The posts are paginated, meaning when scrolling the FlatList it will load the next 10 posts
  - A spinner appears while loading
  - Error message will be displayed if fetching the Api fails

INSTALLATION
- Clone the git repo
- Run yarn

For iOS: react-native run:ios

NEXT STEP
We could centralize language, and create high order component to embed the error and spinner management

COMMIT LIST
a974f47938f29ee51484b1f22324655b624e640a (HEAD -> master) Add loading spinner while fetching
d47ea977575eee9eaaf480f1652928f8dab43ec3 (origin/master) Manage errors for get posts
c586e902b595af3138fb0271c51faa4b060d2518 Create styles for WelcomeScreen and PostScreen
9ccb139b8489ab40e7bcf4237b87e4c6b5c148d8 Style the PostItem and create centralize Metrics
fedab912f7909d4ab4666970631133ce9d0390fb Create centralized Theme and change navigation headerBackButton
606e97501bb4dad15f9e4ce95864b69777160406 Centralization of the Post PropTypes
7377076385b53dc5f56fd25fd3761665e8259c07 Correct propType check for PostItem
e78ca3423cdfd6e578fb71a339c118780f3dc644 Setup Redux Persist to persist posts
4c086cf9a3f4f8ab31ede36d00bea6f2d3398144 Paginate the posts list FlatList
bb546d24d790e5c072d637337cf53aaf506c16f9 Sort PostItem alphabetically
52634a6e64891d31c1376af28f998800ffe0a9d0 Create FlatList of PostItem
1a098015d111d225071e947f9592b11c448fa8ec Setup of redux sagas for posts
07ed49f71c5eb66b6f841701def79b2092a658a1 Create Api connexion to json placeholder
227490e99c27807827c6a26c9a71534001523c6b Correct PostListScreen redux connexion with Class component
3049bc7167944b3db2471b40aa07703d50ac1c7d Setup of Redux
7b0ab221f8959b71a85c918e826396b617c84840 Create the stack navigation between WelcomeScreen and PostListScreen
d946c35db721d4959cfe758db6d93d7f91ae17f7 First commit: initialization of the app with react-native cli
