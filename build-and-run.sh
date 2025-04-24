#!/bin/bash

# maven clean and build
echo "Start mvn clean package" 
mvn clean package

# maven success
if [ $? -ne 0 ]; then
	echo "mvn error" 
	exit 1
fi

# build docker-image
echo "Start docker build"
docker build -t studyflow-api .

# docker sccuess 
if [$? -ne 0]; then
	echo "docker build error" 
	exit 1
fi

# start docker
echo "Start docker container"
docker run -p 8080:8080 studyflow-api
