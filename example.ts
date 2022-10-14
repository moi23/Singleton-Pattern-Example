export default class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  showLog() {
    console.log('log');
  }
}

const exampleSingleton = Singleton.getInstance();
