FROM gcr.io/distroless/nodejs20-debian12@sha256:0f5e6997a042dc3715dfae2a1197ef23f92d557b162a3a53cf3d3f469839eb64


WORKDIR /app
COPY .next/standalone ./
COPY .next/static ./.next/static

ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
