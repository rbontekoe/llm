# Install Docker

*I use docker mainly because it gives me a cleaner environment and less trouble.*

**Content**

```@contents
Pages = ["chapter1.md"]
```

## Prerequisites

A PC or laptop running Ubuntu 22.04 is required.

## What you will do.

Step 1: Install Docker

## Install Docker

To install Docker follow the next steps:

|Step        | Action      |
|:---------- | :---------- |
| 1 | Open a new terminal.|
| 2 | Update the software list by typing: `sudo apt update`. |
| 3 | Remove older versions of Docker by typing: `sudo apt remove docker docker-engine docker.io`. |
| 4 | Install Docker: `curl -sSL https://get.docker.com \| sh`. |
| 5 | Make sure you will have root rights: `sudo usermod -aG docker $USER`. |
| 6 | Controle the version of [Docker Engine](https://docs.docker.com/engine/release-notes/): `sudo docker version`. Must be versie 20.10.22 of higher. |
| 7 | Restart your computer by tying: `sudo reboot`. |
||

## Summary

This guide explains how to install Docker on Ubuntu 22.04.  It involves updating the system's package list, removing any existing Docker installations, installing Docker using a provided command, adding the user to the docker group, verifying the Docker version (must be 20.10.22 or higher), and rebooting the system. The author prefers Docker for a cleaner development environment.
