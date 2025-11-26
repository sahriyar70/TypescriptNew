interface Config {
  readonly id: number;   // একবার সেট করার পর পরিবর্তন করা যাবে না
  appName: string;
  version: string;
}


const appConfig: Config = {
  id: 101,
  appName: "MyApp",
  version: "1.0.0"
};


appConfig.appName = "MySuperApp";
appConfig.version = "1.1.0";

