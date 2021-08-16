# typeorm-migration-sketch

Демо работы с миграциями в typeORM

Подключение к БД настраивается в `ormconfig.json`, должна быть создана БД `test`, без таблиц.
В `entities` описана одна сущность `Goods`.

1. Создать миграцию:
`npm run typeorm -- migration:generate -n initGoods`
в `migrations` должен появиться ts-файл миграции.

1. Просмотреть миграции:
`npm run typeorm -- migration:show`

1. Выполнить миграцию:
`npm run typeorm -- migration:run`

1. Откатить миграцию:
`npm run typeorm -- migration:revert`

Есть способ частично проверить соответствие сущностей и схемы БД - сгенерировать сущности из БД с помощью `typeorm-model-generator` и сравнив типы через типофункцию.

1. Выполнить:
`npx typeorm-model-generator -h localhost -p 5432 -d test -u postgres -x postgres -e postgres -o ./generated -s public`
Будут получены entity в `generated/entities`
2. открыть `tests/good.entity.spec.ts`. Если Сущности БД и проекта совпадают, то ошибок отображаться не будет, если нет - ts обнаружит ошибку и `req` будет подчеркнут с ошибкой:
> Type 'Goods' is not assignable to type '[Goods, Goods, "not equal"]'.

**Проблема №2** Выглядит, что этот механизм можно использовать для тестов, но tsc файл компилирует, даже если есть ошибка, пока не разобрался
