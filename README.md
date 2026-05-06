# Лабораторна робота 02

Проєкт демонструє породжувальні патерни проєктування на TypeScript/NestJS.

## Запуск

```bash
npm install
npm run patterns:demo
```

Для запуску NestJS-сервера:

```bash
npm run start:dev
```

Доступні HTTP-демо:

- `GET /factory/demo`
- `GET /abstract-factory/demo`

## Патерни

| Завдання | Патерн | Коротко | Діаграма |
| --- | --- | --- | --- |
| 1 | Factory Method | Різні канали покупки створюють потрібний тип підписки через спільний контракт. | [PNG](resources/task1-factory-method.png) / [Draw.io](resources/task1-factory-method.drawio) |
| 2 | Abstract Factory | Фабрики брендів створюють сімейства сумісних пристроїв: laptop, netbook, ebook, smartphone. | [PNG](resources/task2-abstract-factory.png) / [Draw.io](resources/task2-abstract-factory.drawio) |
| 3 | Singleton | `Authenticator` має одну глобальну інстанцію та блокує зовнішнє створення. | [PNG](resources/task3-singleton.png) / [Draw.io](resources/task3-singleton.drawio) |
| 4 | Prototype | `Virus.clone()` рекурсивно копіює об'єкт разом із дочірніми вірусами. | [PNG](resources/task4-prototype.png) / [Draw.io](resources/task4-prototype.drawio) |
| 5 | Builder | `HeroBuilder` і `EnemyBuilder` покроково збирають персонажів через `CharacterDirector`. | [PNG](resources/task5-builder.png) / [Draw.io](resources/task5-builder.drawio) |

## Скриншоти

Посилання можна використовувати напряму у звіті або GitHub Markdown:

- [Factory Method](resources/task1-factory-method.png)
- [Abstract Factory](resources/task2-abstract-factory.png)
- [Singleton](resources/task3-singleton.png)
- [Prototype](resources/task4-prototype.png)
- [Builder](resources/task5-builder.png)

## Структура

```text
src/
  patterns-demo.ts                  # консольний запуск усіх демо
  app.module.ts                     # підключення NestJS-модулів
  lab_02/
    task1-factory/                  # Factory Method
    task2-abstract-factory/         # Abstract Factory
    task3-singleton/                # Singleton
    task4-prototype/                # Prototype
    task5-builder/                  # Builder
resources/
  *.png                             # готові діаграми/скриншоти
  *.drawio                          # вихідні файли діаграм
```

Основна логіка кожного патерна ізольована у власній папці. Для перших двох завдань є NestJS-контролери та сервіси, а для завдань 3-5 окремі demo-функції, які запускаються через `npm run patterns:demo`.

## Перевірка

```bash
npm run test
npm run build
```
