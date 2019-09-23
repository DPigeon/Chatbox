#bin/sh
docker ps
cd ../ && docker run -t -i -d --name=Chatbox -p 32000:32000 chatbox || docker start Chatbox
docker logs Chatbox
docker ps