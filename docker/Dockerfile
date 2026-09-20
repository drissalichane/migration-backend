# n8n + .NET toolchain image for the migration pipeline.
#
# Two changes from the original alpine-based image:
#
# 1. Debian base instead of node:20-alpine.
#    .NET on Alpine is musl-based and has long-standing native-library loading
#    quirks. The .NET Upgrade Assistant hangs there indefinitely at
#    "Initializing and loading extensions..." (observed spinning for 180s+ with a
#    TTY attached, killed by timeout), while the same tool and repo complete in
#    ~30-50s on a glibc host. Moving to Debian also removes the need for
#    DOTNET_SYSTEM_GLOBALIZATION_INVARIANT, since real ICU is available.
#
# 2. SDK 9.0 and 10.0 alongside 8.0.
#    The original installed only --channel 8.0, so every net9.0 migration failed
#    Part 2's build with:
#      error NETSDK1045: The current .NET SDK does not support targeting .NET 9.0
#    The dashboard offers net8.0 / net9.0 / net10.0, so all three must be
#    buildable AND runnable (tests need the matching runtime, not just the SDK).
#    Note .NET 8 and 9 both reach EOL 2026-11-10; 10.0 is the current LTS.
FROM node:20-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
        git bash curl ca-certificates libicu72 python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Each channel lands in the same install dir and coexists side by side.
RUN curl -sSL https://dot.net/v1/dotnet-install.sh -o /tmp/dotnet-install.sh && \
    chmod +x /tmp/dotnet-install.sh && \
    bash /tmp/dotnet-install.sh --channel 8.0  --install-dir /usr/local/dotnet && \
    bash /tmp/dotnet-install.sh --channel 9.0  --install-dir /usr/local/dotnet && \
    bash /tmp/dotnet-install.sh --channel 10.0 --install-dir /usr/local/dotnet && \
    rm /tmp/dotnet-install.sh

ENV PATH="$PATH:/usr/local/dotnet:/home/node/.dotnet/tools"
ENV DOTNET_ROOT="/usr/local/dotnet"
ENV DOTNET_CLI_TELEMETRY_OPTOUT=1
ENV DOTNET_NOLOGO=1

RUN npm install -g n8n

# Bake the Upgrade Assistant in rather than installing it on first workflow run.
# The container runs with --rm, so a runtime install is repeated on every start
# and silently costs the first job several minutes.
USER node
RUN /usr/local/dotnet/dotnet tool install -g upgrade-assistant

WORKDIR /home/node
EXPOSE 5678
CMD ["n8n"]
