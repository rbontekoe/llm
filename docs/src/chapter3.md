# Start the MiniConda container

**UNDER DEVELOPMENT**

*When we start the MiniConda contaier we wilf first retrieve the Jupyter API-key. When we login the the key we will see the content of the ~/Test directory. A jupyter directtory called notebooks will be created. In this directory we will use  to `git clone https://github.com/ed-donner/llm_engineering.git` to make a copy of Ed Donner's repository, so rhat we kan easilly upload his Jupyter notebooks.*

|Step        | Action      |
|:---------- | :---------- |
| 1 | Start a container: `docker start test_jupyter-notebook`. |
| 2 | Enter the container (use autocomplete button Tab, after typing test): `docker exec -it test_jupyter-notebook_1 bash` |
| 3 | Get the key by copying the key to the clipboard after highliting the key after `token=': jupyter server list`. |
| 4 | Enter the container: `localhost:8888`. |
| 5 | Past the key in the first field and press Enter. |
| 6 | Leave ther container: `Ctrl+D` |
| 7 | Goto ~/Test/notebooks: `cd ~/Test/notebooks`. |
| 8 | Clone Ed's repository: `git clone https://github.com/ed-donner/llm_engineering.git`. |
| 9 | Restart the container and enter it. |
| 10 | Double click on: llm_engineering. |
| 11 | Open the Week1 folder. |
| 12 | Duble click on: Day1.ipynb. Now you can work with this file |
||

My experience is that I only have to enter the Jupter-key once!

We are not finished yet. To work with ChatGPT we first have to put its API-key in a file named: `.env`.

## Some Docker commands
| Command      | Comment |
| :---------- |  :---------- |
| docker container ls | list al runniing (active) containers. |
| docker container ls -a | List all the containers, also not running. |
| docker container rm test_jupyter-notebook_1 | Delete a container. |
| docker container rm ef6f974a579f | Delete a container by its id. |
| docker image ls | List all repositories (images). |