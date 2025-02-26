# Create and start the MiniConda container

*Unfortunately, every time you will have to start the MiniConda container. However, the first time you need to retrieve the Jupyter API-key. When we login the the key we will see the content of the ~/Test/notebooks directory. The jupyter directtory called notebooks will be created for you.*

**content**

```@contents
Pages = ["chapter2.md"]
```

## Prerequisites

A PC or laptop running Ubuntu 22.04 with Git installed is required.

## What you will do

Step 1: Create a directory ~/Test, where you create the file `compose.yml`.

Step 2: Create a directory ~/Test_Ed, where you clone Ed's repository.

Step 3: Get the Jupyter API-key

Step 4: Open a Notebook.

Step 5: Run conda to update packages.


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
| 7 | Display the name of the container: `docker container ls`. |
||

## Step 2: Create a directory `~/Test_Ed`, and clone Ed Donner's repo.

You will need a copy of Ed Donner's repository, with the notebook files. A notebook file can be uploaded to the MiniConda container.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Create the directory: `mkdir ~/test_Ed`. |
| 2 | Goto the directory: `cd ~/Test_Ed`. |
| 3 | Clone Ed's repository: `git clone https://github.com/ed-donner/llm_engineering.git`. |
||

## Step 3: Get the Jupyter API-key

You need the token the first time you login. To retrieve the token to copy the part after 'token=', with the command: `jupyther server list`.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Start a container, make use of autocompletion with the tab-button after typing test: `docker start test_jupyter-notebook`. |
| 2 | Open a terminal and enter the container by typing: `docker exec -it test_jupyter-notebook_1 bash`. |
| 3 | Type: `jupyter server list`. ``\\``![fig_3_3.png](assets/fig_3_3.png)|
| 4 | Copy (Ctrl+Shift+C) and save the token in a save place. |
| 5 | You also have to add the dotenv module: `pip3 install python-dotenv`. |
| 6 | And the OpenAI module: `pip3 install OpenAI`. |
| 7 | Exit the container: `Ctrl+D`. |
||

## Step 4: Open a Notebook.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Start a container, make use of autocompletion with the tab-button as soon as you type `test`: `docker start test_jupyter-notebook`. |
| 2 | Connect to the container using the browser: `localhost:8888`. |
| 3 | Click on the Upload-button. ``\\``![fig_3_5](assets/fig_3_5.png) |
| 4 | Select the `Test_Ed` folder, and open it: `Double click`. ``\\``![fig_3_6](assets/fig_3_6.png) |
| 5 | Open the `llm_engineering` folder. ``\\``![fig_3_2](assets/fig_3_2.png) |
| 6 | Open the `week1` folder. ``\\``![fig_3_4](assets/fig_3_4.png) |
| 7 | Select the `day1.ipynb` file. Load the file: `double click`, and save the file: `Ctrl+S`. |
| 8 | Now you can work with the Notebook file. |
| 10 | Load the other Notebooks of week1. When you look at `ls ~/Test/notebooks` you will see the uploaded files.  Actually, the same as you see in the browser. ``\\``![fig_](assets/fig_3_1.png)``\\``*What you will see in the browser* |
||

!!! info
    My experience is that I only have to enter the Jupter-key once! When I connect to the container I allways get an overview of the Notebooks I uploaded. Correction: I noticed that after a while you have retrieve a new API key to enter the container.

## Step 5 - Run conda to update packages

A special file, called environment.yml, contains the packages you need for Ed Donner's course. Because Ed frequently updates his course, you will need to repeat these steps periodically.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Goto the /Test_Ed/ folder: `cd ~/Test_Ed`. |
| 2 | Goto the llm_engineering folder: `cd llm_engineering`. |
| 3 | Show the content of the file environment: `cat environment.yml` |
| 4 | Highlight the content and copy it to the clipboard: `Ctl+Shift+C` |
| 5 | Goto the /Test/notebooks folder: `cd ~\Test\notebooks` |
| 6 | Create a file environment.yml: `sudo touch environment.yml` |
| 7 | Start Nano with the file: `sudo nano environment.yml` |
| 8 | Paste clipboard into the file: `Ctrl+Shift+V` |
| 9 | Save the file: `Ctrl+O` |
| 10 | Leave Nano: `Ctrl+X` |
| 11 | Open the container: `docker exec -it test_jupyter-notebook_1 bash` |
| 12 | Goto the /opt/notebooks folder: `cd /opt/notebooks` |
| 13 | Display the files: `ls` ``\\``![fig 3.7](assets/fig_3_7.png)
| 14 | Check whether the file environment.xml exists. |
| 15 | Update the Anaconda environment: `conda install environment.yml` |
| 16 | Activeer de omgeving: `conda activate llms`. (base) is replaced by (llms) |
||

!!! info "Important!"
    You should alway activate the environment with `conda activate llms` after you start the container!

    Enter the container with: `docker exec -it test_jupyter-notebook_1 bash`, then type: `conda activate llms`.

    Then, leave the container with: `Ctrl+D`.




## Some Docker commands
| Command      | Comment |
| :---------- |  :---------- |
| docker container ls | list al running (active) containers. |
| docker container ls -a | List all the containers (also the not running ones). In the first column shows the id's of the containers. |
| docker container rm test\_jupyter\_notebook_1 | Delete a container. Use the Tab-key for auto-completion after typing test! |
| docker container rm ef6f974a579f | Delete a container by its id. |
| docker image ls | List all repositories (images). |
| docker exec -it <container name or id> /bin/bash | Enter a container. |
||

We are not finished yet. To work with ChatGPT you first have to put its API-key in a file named: `.env`.

## Summary

The chapter describes the process of starting a MiniConda container, specifically for working with Jupyter notebooks. It begins by stating that users must start the MiniConda container each time they want to work, but highlights that the Jupyter API key needs to be retrieved only during the initial login. Upon logging in with the key, users will gain access to the contents of the ~/Test/notebooks directory.