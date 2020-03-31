# Housekeeping

Weird bugs, TODOs, and all the other dirty business.

## tsconfig.json notes

=======================

### Name

Jest / Mocha mysterious error during build

#### Description

Weird build error attributed to a lack of the "types" option in tsconfig.json

```json
    "types": ["node"],
```

#### More

source: https://www.labeightyfour.com/2019/05/17/compiler-errors-with-mocha-and-typescript/

•••••••••••••••••••••••••••••

### tsconfig exclude block

### Description

We're excluding src/scaffolfs because of the typescript project templates.

```json

  "exclude": ["node_modules", "src/scaffolds"],
```

#### More

none
