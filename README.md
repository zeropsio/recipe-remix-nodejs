# Zerops x Remix - Nodejs

![Header Image](header.png)

A Node.js Remix app deployment example for [Zerops](https://zerops.io) - a developer first cloud platform.

## Deploy to Zerops

1. Open [Zerops Dashboard](https://app.zerops.io/dashboard/projects) and locate the **import project** button on the left sidebar
2. Copy & paste the YAML setup below and confirm

```yaml
project:
  name: zerops-remix

services:
  - hostname: remixnodejs
    type: nodejs@20
    buildFromGit: https://github.com/zeropsio/recipe-remix-nodejs
    ports:
      - port: 3000
        httpSupport: true
    enableSubdomainAccess: true
    minContainers: 1
```

Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
