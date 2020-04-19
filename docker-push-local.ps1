param ($Repository, $BuildNumber,$DockerUser, $DockerPwd  )
write-host $Repository
write-host $BuildNumber
write-host $DockerUser
write-host $DockerPwd

## Convert the user and password from secret to redable form
$DockerUser = [System.Text.Encoding]::UTF8.GetBytes($DockerUser)
$DockerUser = [System.Convert]::ToBase64String($DockerUser)
$DockerUser  = [System.Convert]::FromBase64String($DockerUser)
$DockerUser =  [System.Text.Encoding]::UTF8.GetString($DockerUser)
$DockerPwd  = [System.Text.Encoding]::UTF8.GetBytes($DockerPwd )
$DockerPwd  = [System.Convert]::ToBase64String($DockerPwd )
$DockerPwd  = [System.Convert]::FromBase64String($DockerPwd)
$DockerPwd =  [System.Text.Encoding]::UTF8.GetString($DockerPwd)
write-host $DockerUser
write-host $DockerPwd

# $DockerEncPassword = ConvertTo-SecureString "$DockerPwd" -AsPlainText -Force
# $Credential = New-Object System.Management.Automation.PSCredential ($DockerUser, $DockerEncPassword)
# Invoke-Command -ComputerName node1 -Credential $Credential -ScriptBlock {Get-Process}

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

# docker login -u mvonhagt -p mv1209v12
docker login -u $DockerUser -p $DockerPwd
# docker tag pos_testharness:local mvonhagt/pos_testharness:latest
# docker push mvonhagt/pos_testharness:latest
# docker rmi mvonhagt/pos_testharness:latest

docker tag pos_testharness:local $DockerRepository
docker push $DockerRepository
docker rmi $DockerRepository
