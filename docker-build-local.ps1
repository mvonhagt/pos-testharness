docker stop  pos_testharness-local
docker rmi pos_testharness:local
docker build -t pos_testharness:local .
