import { serve } from "./deps.ts";

const s = serve({ port: 12021 });
console.log("http://localhost:12021/");
for await (const req of s) {
  const ip = req.headers.get("x-forwarded-for") ||
    (req.conn.remoteAddr as Deno.NetAddr).hostname;
  req.respond({ body: `${ip}\n` });
}
