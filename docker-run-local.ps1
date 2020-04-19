docker stop pos_testharness-local
docker run --rm -p 80:80 -d --name pos_testharness-local pos_testharness:local
