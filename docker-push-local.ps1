param ($Repository, $BuildNumber)
write-host $Repository
write-host $BuildNumber

if ($Repository -eq $null) {
$DockerRepository = "mvonhagt/pos_testharness:"
}Else{
$DockerRepository = $Repository
}

if ($BuildNumber -eq $null) {
$DockerRepository = $Repository+":latest"
}Else{
$DockerRepository = $Repository+":"+$BuildNumber
}

docker login -u mvonhagt -p mv1209v12
# docker tag pos_testharness:local mvonhagt/pos_testharness:latest
# docker push mvonhagt/pos_testharness:latest
# docker rmi mvonhagt/pos_testharness:latest

docker tag pos_testharness:local $DockerRepository
docker push $DockerRepository
docker rmi $DockerRepository
