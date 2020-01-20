# base image
FROM node:alpine as build

# set working directory
WORKDIR '/app'

# install and cache app dependencies
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . .

# run tests
# RUN ng test --watch=false
# RUN ng e2e --port 4202

# generate build
RUN ng build --prod --output-path=dist

############
### prod ###
############

# base image
FROM nginx

# expose port 80
EXPOSE 80

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# run nginx
CMD ["nginx", "-g", "daemon off;"]