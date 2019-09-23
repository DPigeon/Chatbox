#bin/sh
echo 'Connecting to the server...'
cd ../ && docker run -t --name=Chatbox-Client client || docker start Chatbox-Client