# Install the MiniConda container

*In this chapter you will learn how te create a container with MiniConda with a `.yml` file*

**UNDER DEVELOPMENT**

**Content**

```@contents
Pages = ["chapter2.md"]
```
## Prerequisites

A PC or laptop running Ubuntu 22.04 with Docker installed is required.

## What you will do.

Step 1: Install the MiniConda container

## compose.yml

```
version: "3.9" # Use the latest version of the Docker Compose file format

services:
  jupyter-notebook:
    image: continuumio/miniconda3
    ports:
      - "8888:8888"
    command: 
      - /bin/bash
      - "-c"
      - |
        conda install jupyter -y --quiet && \
        mkdir -p /opt/notebooks && \
        jupyter notebook \
          --notebook-dir=/opt/notebooks \
          --ip='*' \
          --port=8888 \
          --no-browser \
          --allow-root
    volumes:
      - ./notebooks:/opt/notebooks 
    tty: true
    stdin_open: true
```

## Install MiniConda container

To install MiniConda container follow the next steps:

|Step        | Action      |
|:---------- | :---------- |
| 1 | Open a new terminal.|
| 2 | Update the software list by typing: `sudo apt update`. |
| 3 | Create a subdirectory `Test`: `makedir ~/Test`. |
| 4 | Move to Test: `cd ~/Test`. |
| 5 | Copy the content of compose.yml to the clipboard by clicking on the copy symbol (at the righthand top) under the file compose.yml . |
| 6 | Create the the file by typing: `nano compose.yml`. |
| 7 | Paste the text on clipboard into nano: `Ctrl+Shift+V`. |
| 8 | Save the file: `Ctrl+O`. |
| 9 | Exit nano: `Ctrl+X`. |
| 10 | Create the container being still in the ~/Test directory: `docker-compose -f compose.yml -d`. |
||

In the next chapter you will learn how to achieve the Jupyter API-key you need to login to the container and make use of Jupyter.