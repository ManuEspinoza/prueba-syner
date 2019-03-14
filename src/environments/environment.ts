// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_URL: 'http://localhost:4200',
  // firebase: {
  // apiKey: 'AIzaSyCV6OUPuTWfTsOEf4aqpmV30swelOmelD0',
  // authDomain: 'marketsdata-vision.firebaseapp.com',
  // databaseURL: 'https://marketsdata-vision.firebaseio.com',
  // projectId: 'marketsdata-vision',
  // storageBucket: 'marketsdata-vision.appspot.com',
  // messagingSenderId: '619198630822'}
  firebase: {
    apiKey: "AIzaSyBFc6CmLLZYliPnvhk8Bwdoz0dYuveHGRE",
    authDomain: "market-datamanu.firebaseapp.com",
    databaseURL: "https://market-datamanu.firebaseio.com",
    projectId: "market-datamanu",
    storageBucket: "market-datamanu.appspot.com",
    messagingSenderId: "157510666122"
  }
  // firebase: {
  // apiKey: "AIzaSyDGfN_dRku8DIfp14wcQ9oo6yFhwHONXQ0",
  //   authDomain: "market2-c2d8e.firebaseapp.com",
  //   databaseURL: "https://market2-c2d8e.firebaseio.com",
  //   projectId: "market2-c2d8e",
  //   storageBucket: "market2-c2d8e.appspot.com",
  //   messagingSenderId: "510083111011"
  // }
};