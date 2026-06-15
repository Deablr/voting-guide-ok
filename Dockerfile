# syntax=docker/dockerfile:1

# Build stage
FROM oven/bun:1-slim AS builder

WORKDIR /app

# Copy package manifests first for better layer caching
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source and build the production bundle
COPY . .
RUN bun run build

# Runtime stage
FROM oven/bun:1-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only what is needed to serve the production build
COPY --from=builder /app/package.json /app/bun.lock ./
COPY --from=builder /app/vite.config.ts ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["bun", "run", "preview", "--host", "--port", "3000"]
