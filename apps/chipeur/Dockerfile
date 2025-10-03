# Build the docker image with `npx nx docker-build chipeur`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
FROM docker.io/node:lts-alpine

WORKDIR /app

RUN addgroup --system chipeur && adduser --system -G chipeur chipeur

# Recreate the same file structure because some paths may be hardcoded at compile time (like protos)
COPY dist/apps/chipeur dist/apps/chipeur/
RUN chown -R chipeur:chipeur .

RUN npm --prefix dist/apps/chipeur --omit=dev -f install

CMD [ "node", "dist/apps/chipeur" ]
