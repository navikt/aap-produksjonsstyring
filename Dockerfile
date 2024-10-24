FROM gcr.io/distroless/nodejs20-debian12@sha256:0f5e6997a042dc3715dfae2a1197ef23f92d557b162a3a53cf3d3f469839eb64

ENV NODE_ENV production

RUN addgroup --system --gid 1069 nodejs
RUN adduser --system --uid 1069 nextjs

WORKDIR /app
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
