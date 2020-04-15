docker login -u mvonhagt -p mv1209v12
docker tag pos_testharness:local mvonhagt/pos_testharness:latest
docker push mvonhagt/pos_testharness:latest
docker rmi mvonhagt/pos_testharness:latest