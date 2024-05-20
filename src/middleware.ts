import { defineMiddleware } from "astro/middleware";

import type { APIContext } from "astro";

function log(context: APIContext) {
  console.log(context);
}

export const onRequest = defineMiddleware((context, next) => {
  log(context);
});
