#bin/sh
docker ps
docker run -t -i -d --name=Chatbox -p 32000:32000 chatbox || docker start Chatbox
docker logs Chatbox
docker ps