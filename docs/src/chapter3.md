# Start the MiniConda container

**UNDER DEVELOPMENT**

*When we start the MiniConda contaier we wilf first retrieve the Jupyter API-key. When we login the the key we will see the content of the ~/Test directory. A jupyter directtory called notebooks will be created. In this directory we will use  to `git clone https://github.com/ed-donner/llm_engineering.git` to make a copy of Ed Donner's repository, so rhat we kan easilly upload his Jupyter notebooks.*

|Step        | Action      |
|:---------- | :---------- |
| 1 | Enter the container (use autocomplete button Tab, after typing test): `docker exec -it test_jupyter-notebook_1 bash` |
| 2 | Get the key by copying the key to the clipboard after highliting the key after `token=': jupyter server list`. |
| 3 | Enter the container: `localhost:8888`. |
| 4 | Past the key in the first field and press Enter. |
| 5 | Leave ther container: `Ctrl+D` |
| 6 | Goto ~/Test/notebooks: `cd ~/Test/notebooks`. |
| 7 | Clone Ed's repository: `git clone https://github.com/ed-donner/llm_engineering.git`. |
| 8 | Restart the container and enter it. |
| 9 | Double click on: llm_engineering. |
| 10 | Open the Week1 folder. |
| 11 | Select: Day1.ipynb. |
| 12 | Click on the Upload-Button, this action will make a copy of the file, so you save it apart. |
||

My experience is that I don't have to enter the Jupter-key again! 

We are not finished yet. To work with ChatGPT we first have to put the API-key in a file named: `.env`.