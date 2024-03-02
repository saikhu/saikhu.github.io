---
layout: page
title: Docker Guide for AI Model Development and Deployment
description: This is theoretical concepts of the Docker with hands-ons commands.
img: assets/img/projects/p_4/project_04_docker.jpg
importance: 1
category: fun
date: 2023-12-07
---

Docker Examples Guide

From basic concepts of Docker to start working on docker for the computer vision tasks, training, testing, evaluation and deployment.

Check out the GitHub repository for more details: [Docker Guide for AI Model Development and Deployment](https://github.com/saikhu/Docker-Guide-for-AI-Model-Development-and-Deployment)

In this project I tried to explain from the basic concept of Docker how it is different than the VM's to practical examples of the computer vision.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_4/container_vs_vm.png" title="The difference between a container and VM" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The difference between a container and VM.
</div>



1.  Theoretical concepts, and basic commands to use Docker for example.

    Installation and verify the installation.
    {% raw %}
    ```bash
    # Uuninstall all conflicting packages
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # Add the repository to Apt sources:
    echo \
    "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    # Install the latest version,
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    # Verify that the Docker Engine installation
    sudo docker run hello-world

    docker --version
    # If you get an error, please try: sudo docker --version
    ```
    {% endraw %}


2.  Practical examples 

    The example folder contains the Docker usages examples, the main focus is to use Docker for the AI Models Development and Deployment.

    There are there three examples:

    -  🔰 Simple Docker Example: How to use simple container using Dockerfile and manipulate the image (Picture)
    -  🏹 Intermediate Example: How to run the OpenCV inference using Live camera feed and detect the face, then show the Live feed on web browser using Python Flask.
    -  🔱 Advanced Example: Comming Soon !

    
    Check out the GitHub repository for more details: [Docker Guide for AI Model Development and Deployment](https://github.com/saikhu/Docker-Guide-for-AI-Model-Development-and-Deployment/blob/main/docker-examples/README.md)

---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_4/output.gif" title="OpenCV inference using Live camera feed and detect the face, then show the Live feed on web browser using Python Flask" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    OpenCV inference using Live camera feed and detect the face, then show the Live feed on web browser using Python Flask.
</div>