FROM node:latest

LABEL Mainainer: Mohammad H. Shahin \
	github.com/mhshahin

RUN cd /home/node && \
	git clone https://github.com/HackaIran/hackairan.com.git && \
	mv hackairan.com/* . && \
	rm -rf hackairan.com && \
	npm i -g webpack && \
	npm i -g webpack-cli && \
	npm i && \
	sed -i 's/localhost/mongo/' config/config.js

WORKDIR /home/node

EXPOSE 80

CMD ["npm","start"]
