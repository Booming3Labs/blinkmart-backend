一.本地运行blinkmart-backend

    1.安装pgsql，并自行创建railway数据库

    2.根目录添加.env文件
        HOST=0.0.0.0
        PORT=1337
        APP_KEYS=c42MCpymnvOvdMyeQaf1ew==,bSmjd8CEktWoOT/FXyfReg==,MM3tdxS6hBaHj12KkT4FgA==,jDLZs5eQJzTBC1/xJi8fPQ==
        API_TOKEN_SALT=kRF2LS2Z56Qn+f8iIKBJXA==
        ADMIN_JWT_SECRET=f0HKP3CraVg2+5GmbByJmA==
        TRANSFER_TOKEN_SALT=d9WkdaVMgQY2d1dLKBBZCQ==
        JWT_SECRET=Owbiye+4gyo0ZW4q/Yz6rQ==
        # Database
        DATABASE_CLIENT="postgres"
        PGHOST="localhost"
        PGPORT="5432"
        POSTGRES_DB="railway"
        PGUSER="postgres"
        DATABASE_PASSWORD="root"
        DATABASE_SSL="false"

二、apifox接口文档
https://apifox.com/apidoc/shared-9603509a-2e6e-4143-a55a-775e7bd8e321


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
