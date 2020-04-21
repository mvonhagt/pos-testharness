param ($Repository, $BuildNumber, $DockerUser, $DockerPwd  )

<# -------------
Convert the user and password from secret to redable form (note: this block is not necessry to login... 19/04/20)
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
--------------- #>
<# Pre-requsite to run this poweshell script-> image "mvonhagt/pos_testharness:latest" has to exist 
Note: docker-build-local.ps1 would have built image as per this name
#> 
if ($null -eq $Repository ) {
    $DockerRepositoryLatest = "mvonhagt/pos_testharness:latest"
}
Else {
    $DockerRepositoryLatest = $Repository
}
<#---------------------------------
# Before pushing to docker repository login 
-----------------------------------#>
if ($null -ne $DockerUser  ) {
    docker login -u $DockerUser -p $DockerPwd
}
else {
    docker login -u mvonhagt -p mv1209v12
}

<#---------------------------------
# Now push the :latest image to docker repository
-----------------------------------#>
docker push $DockerRepositoryLatest

<#---------------------------------
# If there is a build number passed (ex: from Jenkins) then also push this to the docker repository
-----------------------------------#>
if ($null -ne $BuildNumber ) {
    $DockerRepositoryWithBuildNo = "mvonhagt/pos_testharness:" + $BuildNumber
    #create a new image for the build number using the latest 
    docker tag $DockerRepositoryLatest $DockerRepositoryWithBuildNo
    docker push $DockerRepositoryWithBuildNo
    # remove image with the build number
    docker rmi $DockerRepositoryWithBuildNo
}
