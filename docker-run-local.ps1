docker stop pos-testharness
docker run --rm -p 80:80 -d --name pos-testharness mvonhagt/pos_testharness:latest