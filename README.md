# Steps to reproduce

This does not happen with Deno v1.43.3 it only happens with Deno v1.43.4 and above.

Install dependencies and run deno cache the project:

1. `pnpm i`
1. `deno task cache`

```ts
import { defineMiddleware } from "astro/middleware";

import type { APIContext } from "astro";
              ^ Module '"astro"' has no exported member 'APIContext'.deno-ts(2305)
```

The types from `astro` are not working. Example: [`./src/middleware.ts`](./src/middleware.ts)

In [`.vscode/settings.json`](./.vscode/settings.json) if you change `"deno.enable": true,` to false it will work fine with Node.

> Note: Tested with Deno 1.43.5 and Deno vscode extension 3.37.1
