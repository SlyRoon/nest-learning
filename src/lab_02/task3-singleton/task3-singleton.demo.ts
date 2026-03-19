import { Authenticator } from './authenticator';

export function runTask3SingletonDemo(): void {
  console.log('=== Task 3: Singleton / Authenticator ===');

  const first = Authenticator.getInstance();
  const second = Authenticator.getInstance();
  const third = Authenticator.getInstance();

  console.log('Instance #1:', first.describe());
  console.log('Instance #2:', second.describe());
  console.log('Instance #3:', third.describe());

  console.log('first === second:', first === second);
  console.log('second === third:', second === third);
  console.log(
    'All references point to one object:',
    first === second && second === third,
  );

  try {
    Reflect.construct(
      Authenticator as unknown as new () => Authenticator,
      [],
    );
    console.log('Unexpected: external construction succeeded.');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.log('External construction blocked:', message);
  }
}
