#bin/sh
echo 'Building the client container...'
cd ../ && docker build -t chatboxclient .