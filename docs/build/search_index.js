var documenterSearchIndex = {"docs":
[{"location":"appendix/#Bijlage","page":"Appendix","title":"Bijlage","text":"","category":"section"},{"location":"appendix/","page":"Appendix","title":"Appendix","text":"info: Info\nZorg ervoor dat je toestemming hebt van een ouder of verantwoordelijke volwassene voordat je iets downloadt op je computer. Als je hulp nodig hebt tijdens het downloaden en installeren, vraag dan aan een ouder of verantwoordelijke volwassene om je te helpen.","category":"page"},{"location":"appendix/#Introduction","page":"Appendix","title":"Introduction","text":"","category":"section"},{"location":"appendix/","page":"Appendix","title":"Appendix","text":"Ik heb zelf een Lenovo Legion Y520 Windows 10 laptop met Ubuntu 22.04 geïnstalleerd op een Samsung portable SSD T5 schijf. Ik start mijn machine op vanaf deze schijf.","category":"page"},{"location":"blog/#Blog","page":"Blog","title":"Blog","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"2024","text":"","category":"section"},{"location":"blog/#/24/2024Placing-Ed-Donner's-repository-in-a-separate-folder-is-a-good-practice.","page":"Blog","title":"12/24/2024Placing Ed Donner's repository in a separate folder is a good practice.","text":"","category":"section"},{"location":"blog/","page":"Blog","title":"Blog","text":"I recommend storing Ed Donner's repository in a separate folder. This allows you to upload and save his notebook files independently, making it easier to track your work.","category":"page"},{"location":"blog/#/20/2024-Set-up-of-the-course","page":"Blog","title":"12/20/2024 - Set up of the course","text":"","category":"section"},{"location":"blog/","page":"Blog","title":"Blog","text":"Today set up of the basic structure for the LLM course.","category":"page"},{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/#YouTube","page":"References","title":"YouTube","text":"","category":"section"},{"location":"references/#Diversen","page":"References","title":"Diversen","text":"","category":"section"},{"location":"chapter1/#Install-Docker","page":"1 Install Docker","title":"Install Docker","text":"","category":"section"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"I use docker mainly because it gives me a cleaner environment and less trouble.","category":"page"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"UNDER DEVELOPMENT","category":"page"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"Content","category":"page"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"Pages = [\"chapter1.md\"]","category":"page"},{"location":"chapter1/#Prerequisites","page":"1 Install Docker","title":"Prerequisites","text":"","category":"section"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"A PC or laptop running Ubuntu 22.04 is required.","category":"page"},{"location":"chapter1/#What-you-will-do.","page":"1 Install Docker","title":"What you will do.","text":"","category":"section"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"Step 1: Install Docker","category":"page"},{"location":"chapter1/#Install-Docker-2","page":"1 Install Docker","title":"Install Docker","text":"","category":"section"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"To install Docker follow the next steps:","category":"page"},{"location":"chapter1/","page":"1 Install Docker","title":"1 Install Docker","text":"Step Action\n1 Open a new terminal.\n2 Update the software list by typing: sudo apt update.\n3 Remove older versions of Docker by typing: sudo apt remove docker docker-engine docker.io.\n4 Install Docker: curl -sSL https://get.docker.com | sh.\n5 Make sure you will have root rights: sudo usermod -aG docker $USER.\n6 Controle the version of Docker Engine: sudo docker version. Must be versie 20.10.22 of higher.\n7 Restart your computer by tying: sudo reboot.\n ","category":"page"},{"location":"chapter2/#Install-the-MiniConda-container","page":"2 Install the MiniConda container","title":"Install the MiniConda container","text":"","category":"section"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"In this chapter you will learn how te create a container with MiniConda with a .yml file","category":"page"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"UNDER DEVELOPMENT","category":"page"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"Content","category":"page"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"Pages = [\"chapter2.md\"]","category":"page"},{"location":"chapter2/#Prerequisites","page":"2 Install the MiniConda container","title":"Prerequisites","text":"","category":"section"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"A PC or laptop running Ubuntu 22.04 with Docker installed is required.","category":"page"},{"location":"chapter2/#What-you-will-do.","page":"2 Install the MiniConda container","title":"What you will do.","text":"","category":"section"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"Step 1: Install the MiniConda container","category":"page"},{"location":"chapter2/#compose.yml","page":"2 Install the MiniConda container","title":"compose.yml","text":"","category":"section"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"version: \"3.9\" # Use the latest version of the Docker Compose file format\n\nservices:\n  jupyter-notebook:\n    image: continuumio/miniconda3\n    ports:\n      - \"8888:8888\"\n    command: \n      - /bin/bash\n      - \"-c\"\n      - |\n        conda install jupyter -y --quiet && \\\n        mkdir -p /opt/notebooks && \\\n        jupyter notebook \\\n          --notebook-dir=/opt/notebooks \\\n          --ip='*' \\\n          --port=8888 \\\n          --no-browser \\\n          --allow-root\n    volumes:\n      - ./notebooks:/opt/notebooks \n    tty: true\n    stdin_open: true","category":"page"},{"location":"chapter2/#Install-MiniConda-container","page":"2 Install the MiniConda container","title":"Install MiniConda container","text":"","category":"section"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"To install MiniConda container follow the next steps:","category":"page"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"Step Action\n1 Open a new terminal.\n2 Update the software list by typing: sudo apt update.\n3 Create a subdirectory Test: makedir ~/Test.\n4 Move to Test: cd ~/Test.\n5 Copy the content of compose.yml to the clipboard by clicking on the copy symbol (at the righthand top) under the file compose.yml .\n6 Create the the file by typing: nano compose.yml.\n7 Paste the text on clipboard into nano: Ctrl+Shift+V.\n8 Save the file: Ctrl+O.\n9 Exit nano: Ctrl+X.\n10 Create the container being still in the ~/Test directory: docker-compose -f compose.yml -d.\n ","category":"page"},{"location":"chapter2/","page":"2 Install the MiniConda container","title":"2 Install the MiniConda container","text":"In the next chapter you will learn how to achieve the Jupyter API-key you need to login to the container and make use of Jupyter.","category":"page"},{"location":"chapter4/#How-to-get-ChatGPT's-API-key","page":"4 How to get ChatGPT's API key","title":"How to get ChatGPT's API key","text":"","category":"section"},{"location":"chapter4/","page":"4 How to get ChatGPT's API key","title":"4 How to get ChatGPT's API key","text":"UNDER DEVELOPMENT","category":"page"},{"location":"overview/#Overview-Linux-Terminal-commando's","page":"Overview Linux Terminal commando's","title":"Overview Linux Terminal commando's","text":"","category":"section"},{"location":"overview/#Overview-Node-RED","page":"Overview Linux Terminal commando's","title":"Overview Node-RED","text":"","category":"section"},{"location":"overview/#Overzicht-MicroPython","page":"Overview Linux Terminal commando's","title":"Overzicht MicroPython","text":"","category":"section"},{"location":"overview/#Summary","page":"Overview Linux Terminal commando's","title":"Summary","text":"","category":"section"},{"location":"overview/","page":"Overview Linux Terminal commando's","title":"Overview Linux Terminal commando's","text":"Top","category":"page"},{"location":"chapter3/#Start-the-MiniConda-container","page":"3 Start the MiniConda container","title":"Start the MiniConda container","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"UNDER DEVELOPMENT","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Unfortunately, every time you will have to start the MiniConda container. However, the first time you need to retrieve the Jupyter API-key. When we login the the key we will see the content of the ~/Test/notebooks directory. The jupyter directtory called notebooks will be created for you.","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"content","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Pages = [\"chapter3.md\"]","category":"page"},{"location":"chapter3/#Prerequisites","page":"3 Start the MiniConda container","title":"Prerequisites","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"A PC or laptop running Ubuntu 22.04 with Git installed is required.","category":"page"},{"location":"chapter3/#What-you-will-do.","page":"3 Start the MiniConda container","title":"What you will do.","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step 1: Create a directory ~/Test, where you create the file compose.yml.","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step 2: Create a directory ~/Test_Ed, where you clone Ed's repository.","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step 3: Get the Jupyter API-key","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step 4: Open a Notebook.","category":"page"},{"location":"chapter3/#compose.yml","page":"3 Start the MiniConda container","title":"compose.yml","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"version: \"3.9\" # Use the latest version of the Docker Compose file format\n\nservices:\n  jupyter-notebook:\n    image: continuumio/miniconda3\n    ports:\n      - \"8888:8888\"\n    command: \n      - /bin/bash\n      - \"-c\"\n      - |\n        conda install jupyter -y --quiet && \\\n        mkdir -p /opt/notebooks && \\\n        jupyter notebook \\\n          --notebook-dir=/opt/notebooks \\\n          --ip='*' \\\n          --port=8888 \\\n          --no-browser \\\n          --allow-root\n    volumes:\n      - ./notebooks:/opt/notebooks \n    tty: true\n    stdin_open: true","category":"page"},{"location":"chapter3/#Step-1:-Create-a-directory-/Test,-where-you-create-the-file-compose.yml.","page":"3 Start the MiniConda container","title":"Step 1: Create a directory ~/Test, where you create the file compose.yml.","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Docker will use the comose.yml file to create the MiniConda container. You can access this containeer with your browser on port 8888.","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step Action\n1 Create ~/Test: mkdir ~/Test\n2 Goto the directory: cd ~/Test\n3 Create the file: nano compose.yml\n4 Go to the file compose.yml and click on the copy-symbol at the right-hand corner to copy the content to the clipboard.\n5 Paste the content into the file: Ctrl+Shift+V.\n6 Create the container: docker-compose -f compose.yml -d.\n7 Display the name of the container: docker container ls.\n ","category":"page"},{"location":"chapter3/#Step-2:-Create-a-directory-/Test_Ed,-and-clone-Ed-Donner's-repo.","page":"3 Start the MiniConda container","title":"Step 2: Create a directory ~/Test_Ed, and clone Ed Donner's repo.","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"You will need a copy of Ed Donner's repository, with the notebook files. A notebook file can be uploaded to the MiniConda container and, so you can work with the notebooks.","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step Action\n1 Start a container, make use of autocompletion with the tab-button: docker start test_jupyter-notebook.\n2 Enter the container (use autocomplete button Tab, after typing test): docker exec -it test_jupyter-notebook_1 bash\n3 Get the key by copying the key to the clipboard after highliting the key after token=': jupyter server list.\n4 Enter the container: localhost:8888.\n5 Paste the key in the first field and press Enter.\n6 Leave ther container: Ctrl+D\n7 Goto ~/Test_Ed: cd ~/Test_Ed.\n8 Clone Ed's repository: git clone https://github.com/ed-donner/llm_engineering.git.\n ","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"When we start the MiniConda contaier we will first retrieve the Jupyter API-key. Then we login the the key we will try to open a Notebook from ~/Test_Ed directory.","category":"page"},{"location":"chapter3/#Step-3:-Get-the-Jupyter-API-key","page":"3 Start the MiniConda container","title":"Step 3: Get the Jupyter API-key","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"You need the token the first time you login. Yo retrieve the token to copy the part after 'token=', with the command: jupyther server list.","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step Action\n1 Start a container, make use of autocompletion with the tab-button: docker start test_jupyter-notebook.\n2 Enter the container: test_jupyter-notebook.\n3 Type: jupyther server list.\n4 Copy and save the token in a save place.\n ","category":"page"},{"location":"chapter3/#Step-4:-Open-a-Notebook.","page":"3 Start the MiniConda container","title":"Step 4: Open a Notebook.","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Step Action\n1 Start a container, make use of autocompletion with the tab-button: docker start test_jupyter-notebook.\n2 Connect to the container using the browser: localhost:8888.\n3 Click on the Upload-button.\n4 Navigate to the Test_Ed folder.\n5 Open the folder, and open the llm_engineering folder.\n6 Open the week1 folder.\n7 Select the day1.ipnd file. The screen changed.\n8 Open the file by double clicking.\n9 Now you can work with the Notebook file.\n10 Load the other Notebooks of week1. When you look at ~/Test/notebooks you will see the uploaded files, which you can save with: Ctrl+S.\n ","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"My experience is that I only have to enter the Jupter-key once! When I connect to the container I allways get an overviw of the Notebooks I uploaded. I am not finished yet with this chapter!","category":"page"},{"location":"chapter3/#Some-Docker-commands","page":"3 Start the MiniConda container","title":"Some Docker commands","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"Command Comment\ndocker container ls list al running (active) containers.\ndocker container ls -a List all the containers (also the not running ones). In the first column shows the id's of the containers.\ndocker container rm testjupyter-notebook1 Delete a container.\ndocker container rm ef6f974a579f Delete a container by its id.\ndocker image ls List all repositories (images).\ndocker exec -it <container name or id> /bin/bash Enter a container.\n ","category":"page"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"We are not finished yet. To work with ChatGPT we first have to put its API-key in a file named: .env.","category":"page"},{"location":"chapter3/#Summary","page":"3 Start the MiniConda container","title":"Summary","text":"","category":"section"},{"location":"chapter3/","page":"3 Start the MiniConda container","title":"3 Start the MiniConda container","text":"The chapter describes the process of starting a MiniConda container, specifically for working with Jupyter notebooks. It begins by stating that users must start the MiniConda container each time they want to work, but highlights that the Jupyter API key needs to be retrieved only during the initial login. Upon logging in with the key, users will gain access to the contents of the ~/Test/notebooks directory.","category":"page"},{"location":"chapter5/#Create-the-.env-file-for-API-keys","page":"5 Create the .env file for API keys","title":"Create the .env file for API keys","text":"","category":"section"},{"location":"chapter5/","page":"5 Create the .env file for API keys","title":"5 Create the .env file for API keys","text":"UNDER DEVELOPMENT","category":"page"},{"location":"#LLMs","page":"Introduction","title":"LLMs","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"UNDER DEVELOPMENT","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This course is a supplement to Ed Donner's course on Udemy: 'LLM Engineering: Master AI & Large Language Models (LLMs)' for developers whose work with Ubuntu 22.04'.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"info: Info\nLook at Blog for the latest remarks!","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Content","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Pages = [\"index.md\"]","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"My name is Rob Bontekoe and I am attendig Ed Donner's Udemy course LLM Engineering: Master AI & Large Language Models (LLMs).","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"<img src=\"data:image/jpeg;base64,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\" alt=\"Docker logo\" width=\"120\">","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Logo Ed Donner's course","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"I work with Ubuntu 22.04 Desktop version. I asked Ed whether I could attend the course using MiniConda. He said: \"Hey Rob, I haven't tested miniconda myself, but another student mentioned that he used miniconda and everything went great. I'd actually be super grateful if you could give it a whirl and let me know - then I can update the instructions with this as an approach. Thanks so much Ed.\"","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"I also prefer to use Docker, because it gives you less trouble on your system. Looking at https://docs.anaconda.com/anaconda/install/ I saw in step 4 https://docs.anaconda.com/working-with-conda/applications/docker/ the next Docker instruction:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"docker run -i -t -p 8888:8888 continuumio/miniconda3 /bin/bash \\\n-c \"/opt/conda/bin/conda install jupyter -y --quiet && mkdir \\\n/opt/notebooks && /opt/conda/bin/jupyter notebook \\\n--notebook-dir=/opt/notebooks --ip='*' --port=8888 \\\n--no-browser --allow-root\"","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Because I prefer to use docker-compose I translated the command with Gemini into a compose.yml file which I can use with docker-compose to create de container automatically. ","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The advantage was that I only had to restart the container and could use a one time generated api key to enter Jupyter notebooks.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"version: \"3.9\" # Use the latest version of the Docker Compose file format\n\nservices:\n  jupyter-notebook:\n    image: continuumio/miniconda3\n    ports:\n      - \"8888:8888\"\n    command: \n      - /bin/bash\n      - \"-c\"\n      - |\n        conda install jupyter -y --quiet && \\\n        mkdir -p /opt/notebooks && \\\n        jupyter notebook \\\n          --notebook-dir=/opt/notebooks \\\n          --ip='*' \\\n          --port=8888 \\\n          --no-browser \\\n          --allow-root\n    volumes:\n      - ./notebooks:/opt/notebooks \n    tty: true\n    stdin_open: true","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"I hope you appreciate this approach. ","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Rob Bontekoe","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"info: This course is licensed under the MIT License.\nAn MIT license is a type of software license, also known as an open-source license. It's one of the most permissive licenses available, meaning it grants users a wide range of freedoms to use, modify, and distribute the software.","category":"page"}]
}
