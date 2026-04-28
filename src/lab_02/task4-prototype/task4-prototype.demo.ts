import { Virus } from './virus';

export function runTask4PrototypeDemo(): void {
  console.log('=== Task 4: Prototype ===');

  const grandChild = new Virus(0.2, 1, 'GrandChild virus', 'RNA');
  const child = new Virus(0.5, 2, 'Child virus', 'RNA', [grandChild]);
  const parent = new Virus(1.0, 5, 'Parent virus', 'DNA', [child]);

  const clonedParent = parent.clone();

  console.log('Original parent:', parent.describe());
  console.log('Cloned parent:', clonedParent.describe());
  console.log('parent === clonedParent:', parent === clonedParent);
  console.log(
    'parent child === cloned child:',
    parent.children[0] === clonedParent.children[0],
  );
  console.log(
    'parent grandchild === cloned grandchild:',
    parent.children[0].children[0] === clonedParent.children[0].children[0],
  );

  clonedParent.children[0].name = 'Changed child in clone';

  console.log('Original child after clone change:', parent.children[0].name);
  console.log('Cloned child after change:', clonedParent.children[0].name);
}
