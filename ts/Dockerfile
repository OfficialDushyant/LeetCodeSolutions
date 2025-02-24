# ts/Dockerfile
FROM node:22.6.0

WORKDIR /usr/src/app

# Install Yarn globally
# RUN npm install -g yarn

# Install dependencies if a package.json exists, then keep the container running
CMD ["bash", "-c", "if [ -f package.json ]; then yarn install; fi && tail -f /dev/null"]