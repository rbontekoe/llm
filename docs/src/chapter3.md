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

Step 1: Create a directory ~/Test_Ed, where you clone Ed's repository.

Step 2: Create a directory ~/Test, where you create the file `compose.yml`.

## Step 1: Create a directory ~/Test_Ed, where you clone Ed's repository.

You will need a copy of Ed Donner's repository. with the notebook file. The notebook file can be uploaded to the MiniConda container and, so you can work with the notebooks.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Create the folder Test_Ed: `mkdir Test_Ed`. |
| 2 | Enter the folder: cd Test_Ed: `cd Test_Ed`. |
| 3 | 

## Step 2: Create a directory ~/Test, where you create the file `compose.yml`.

Docker will use the `comose.yml` file to create the MiniConda container. You access this containeer with your browser on port 8888.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Start a container, make use of autocompletion with the tab-button: `docker start test_jupyter-notebook`. |
| 2 | Enter the container (use autocomplete button Tab, after typing test): `docker exec -it test_jupyter-notebook_1 bash` |
| 3 | Get the key by copying the key to the clipboard after highliting the key after `token=': jupyter server list`. |
| 4 | Enter the container: `localhost:8888`. |
| 5 | Paste the key in the first field and press Enter. |
| 6 | Leave ther container: `Ctrl+D` |
| 7 | Goto ~/Test/notebooks: `cd ~/Test/notebooks`. |
| 8 | Clone Ed's repository: `git clone https://github.com/ed-donner/llm_engineering.git`. |
| 9 | Restart the container and enter it. |
| 10 | Double click on: llm_engineering. |
| 11 | Open the Week1 folder. |
| 12 | Duble click on: Day1.ipynb. Now you can work with this file |
||


*When we start the MiniConda contaier we wilf first retrieve the Jupyter API-key. When we login the the key we will see the content of the ~/Test directory. A jupyter directtory called notebooks will be created. *



My experience is that I only have to enter the Jupter-key once!

We are not finished yet. To work with ChatGPT we first have to put its API-key in a file named: `.env`.

## Some Docker commands
| Command      | Comment |
| :---------- |  :---------- |
| docker container ls | list al running (active) containers. |
| docker container ls -a | List all the containers, also not running. |
| docker container rm test_jupyter-notebook_1 | Delete a container. |
| docker container rm ef6f974a579f | Delete a container by its id. |
| docker image ls | List all repositories (images). |