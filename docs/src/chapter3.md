# Start the MiniConda container

**UNDER DEVELOPMENT**

*Unfortunately, every time you will have to start the MiniConda container. However, the first time you need to retrieve the Jupyter API-key. When we login the the key we will see the content of the ~/Test/notebooks directory. The jupyter directtory called notebooks will be created for you.*

**content**

```@contents
Pages = ["chapter3.md"]
```

## Prerequisites

A PC or laptop running Ubuntu 22.04 with Git installed is required.

## What you will do.

Step 1: Create a directory ~/Test, where you create the file `compose.yml`.

Step 2: Create a directory ~/Test_Ed, where you clone Ed's repository.

Step 3: Open a Notebook.

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

## Step 1: Create a directory ~/Test, where you create the file `compose.yml`.

Docker will use the `comose.yml` file to create the MiniConda container. You can access this containeer with your browser on port 8888.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Create `~/Test`: `mkdir ~/Test` |
| 2 | Goto the directory: `cd ~/Test` |
| 3 | Create the file: `nano compose.yml` |
| 4 | Go to the file compose.yml and click on the copy-symbol at the right-hand corner to copy the content to the clipboard. | 
| 5 | Paste the content into the file: `Ctrl+Shift+V`. |
| 6 | Create the container: `docker-compose -f compose.yml -d`. |
| 7 | Display the name of the container: `docker container ls`.
| 8 | Enter the container to get Jupyter's token: `docker exec -it <name of the container> bash` |
| 9 | Display te token: `jupyter server list`. |
| 10 | Save the token somewhere you can retrieve it. |
| 11 | Start the container, so you can retrieve it with your browser: `localhost:8888`. |
| 12 | Enter the token in the first field and press the Enter-button. |
| 13 | Leave the browser. |

## Step 2: Create a directory ~/Test_Ed, and clone Ed Donner's repo: `mkdir Test_Ed`.

You will need a copy of Ed Donner's repository. with the notebook file. The notebook file can be uploaded to the MiniConda container and, so you can work with the notebooks.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Start a container, make use of autocompletion with the tab-button: `docker start test_jupyter-notebook`. |
| 2 | Enter the container (use autocomplete button Tab, after typing test): `docker exec -it test_jupyter-notebook_1 bash` |
| 3 | Get the key by copying the key to the clipboard after highliting the key after `token=': jupyter server list`. |
| 4 | Enter the container: `localhost:8888`. |
| 5 | Paste the key in the first field and press Enter. |
| 6 | Leave ther container: `Ctrl+D` |
| 7 | Goto `~/Test/notebooks`: `cd ~/Test/notebooks`. |
| 8 | Clone Ed's repository: `git clone https://github.com/ed-donner/llm_engineering.git`. |
| 9 | Restart the container and enter it. |
| 10 | Double click on: llm_engineering. |
| 11 | Open the Week1 folder. |
| 12 | Duble click on: Day1.ipynb. Now you can work with this file |
||


*When we start the MiniConda contaier we will first retrieve the Jupyter API-key. Then we login the the key we will try to open a Notebook from ~/Test_Ed directory.*

## Step 3: Open a Notebook.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Start a container, make use of autocompletion with the tab-button: `docker start test_jupyter-notebook`. |
| 2 | Connect to the container using the browser: `localhost:8888`. |
| 3 | Click on the Upload-button. |
| 4 | Navigate to the `Test_Ed` folder. |
| 5 | Open the folder, and open the `llm_engineering` folder. |
| 6 | Open the `week1` folder. |
| 7 | Select the `day1.ipnd` file. The screen changed. |
| 8 | Open the file by double clicking. |
| 9 | Now you can work with the Notebook file. |
| 10 | Load the other Notebooks of week1. When you look at `~/Test/notebooks` you will see the uploaded files, which you can save with: `Ctrl+S`. |
||


My experience is that I only have to enter the Jupter-key once! When I connect to the container I allways get an overviw of the Notebooks I uploaded. **I am not finished yet with this chapter!**

We are not finished yet. To work with ChatGPT we first have to put its API-key in a file named: `.env`.

## Some Docker commands
| Command      | Comment |
| :---------- |  :---------- |
| docker container ls | list al running (active) containers. |
| docker container ls -a | List all the containers, also not running. |
| docker container rm test_jupyter-notebook_1 | Delete a container. |
| docker container rm ef6f974a579f | Delete a container by its id. |
| docker image ls | List all repositories (images). |

## Summary