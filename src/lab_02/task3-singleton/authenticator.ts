type GlobalSingletonScope = typeof globalThis & {
  __lab02AuthenticatorInstance?: Authenticator;
};

const CONSTRUCTOR_TOKEN = Symbol('AuthenticatorConstructorToken');

export class Authenticator {
  private static readonly constructorToken = CONSTRUCTOR_TOKEN;

  public readonly instanceId: string;
  public readonly createdAtIso: string;

  private constructor(token: symbol) {
    if (token !== Authenticator.constructorToken) {
      throw new Error('Use Authenticator.getInstance() to access the singleton.');
    }

    if (new.target !== Authenticator) {
      throw new Error('Authenticator inheritance is not allowed.');
    }

    this.instanceId = Math.random().toString(36).slice(2, 10);
    this.createdAtIso = new Date().toISOString();

    Object.freeze(this);
  }

  public static getInstance(): Authenticator {
    const globalScope = globalThis as GlobalSingletonScope;

    if (!globalScope.__lab02AuthenticatorInstance) {
      globalScope.__lab02AuthenticatorInstance = new Authenticator(
        Authenticator.constructorToken,
      );
    }

    return globalScope.__lab02AuthenticatorInstance;
  }

  public describe(): string {
    return `Authenticator(instanceId=${this.instanceId}, createdAtIso=${this.createdAtIso})`;
  }
}
