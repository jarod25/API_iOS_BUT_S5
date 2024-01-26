#!/bin/bash

APP_NAME="projet-ios-jk-sg-backend"

SHORT_BRANCH_NAME=$(echo "$GIT_BRANCH" | sed -e 's/origin\///g')

if [ "$SHORT_BRANCH_NAME" == "main" ]
then
    IMAGE_TAG="latest"
else
    IMAGE_TAG="$SHORT_BRANCH_NAME"
fi

docker build -t "docker.lagarde.bzh/$APP_NAME:$IMAGE_TAG" .
docker push "docker.lagarde.bzh/$APP_NAME:$IMAGE_TAG"
