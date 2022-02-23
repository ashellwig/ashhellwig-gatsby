# Ash Hellwig's Personal Website

![Build and Publish Docker Image](https://github.com/ashellwig/ashhellwig-gatsby/workflows/Build%20and%20Publish%20Docker%20Image/badge.svg)
 [![Netlify Status](https://api.netlify.com/api/v1/badges/972a4bd8-8854-4548-a606-dba514fe8dc8/deploy-status)](https://app.netlify.com/sites/ashhellwig/deploys)

Personal website for Ashton Scott Hellwig (Ash Hellwig) <ahellwig.dev@gmail.com>
utilizing the `Dimension V2` starter for Gatsby.js.

## Usage

You can view my website that is built with this repo at
[https://ash.ashwigltd.com](https://ash.ashwigltd.com), but if you
wish to try building it locally please read the details below.

## Local Development

### Docker Image

```bash
git clone git@github.com:ashellwig/ashhellwig-gatsby.git

cd ashhellwig-gatsby

nvm use # If Using NVM. Requires NodeJS <=14.19

docker build -t ashellwig/ashhellwig-gatsby .
docker run \
    --name ashhellwig-gatsby \
    -p 8080:80 \
    -d \
    ashellwig/ashhellwig-gatsby
```

### Development Server

```bash
git clone git@github.com:ashellwig/ashhellwig-gatsby.git

cd ashhellwig-gatsby

nvm use # If Using NVM. Requires NodeJS <=14.19

npm i

npm run develop
```

### Local "Production" Server

```bash
git clone git@github.com:ashellwig/ashhellwig-gatsby.git

cd ashhellwig-gatsby

nvm use # If Using NVM. Requires NodeJS <=14.19

npm i

npm run build

# Then, point your server (whatever it may be)
# to the /public directory
# (Python 3's HTTP module used as an example)
python -m http.server -d public
```
