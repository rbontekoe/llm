# Blog

## 2025

### 02/26/2025 - IMPORTANT: changes to docker-compose commands

Creating a container with the command 'docker-compose -f compose.yml -d' no longer works. I asked Gemini for help: Have the docker-compose commands changed recently? Gemini replied with:

Yes, there have been recent changes to the Docker Compose commands. Here are some key points:

#### Docker Compose V2:
- Docker Compose V2 is now integrated into the Docker CLI. This means that instead of using docker-compose, you now use docker compose. This is a significant change in syntax.
- This integration brings several benefits, including improved performance and a more consistent user experience.

#### Release-updates:
- Docker Compose is constantly undergoing updates with bug fixes, performance improvements, and new features. So, it is important to keep an eye on the release notes for the most recent changes.
- You can find the latest release notes on the Docker website.

#### Important Changes:
- There are changes in how Docker Compose handles networks, volumes, and build processes.
- There have also been additions regarding the use of Docker Buildx Bake.

To stay up to date with the most recent changes, I recommend consulting the official Docker documentation and release notes. See also: [Docker](https://docs.docker.com/compose/)

I will make the changes to the course material.

### 01/30/2025 - Finished chapter 4, 5, and 6

I trust this guide will provide further assistance.

## 2024

### 12/29/2024 - Assistence from Ed

I ran into a bit of a breakdown. Ed came up with the idea to use “pip install -r requirements.txt”. I copied his “requirements.txt” to “~/Test/notebooks”. Then I went to the container with “docker exec” and entered the Ed's suggestion. It ran at once, but took a while. I still need to test everything!

### 12/25/2024 Finished chapter 3

I have finished chapter 3. Next step is to find whether the hidden file `.env` can be located on my laptop in the `Test\notebooks` directory.

### 12/24/2024 Placing Ed Donner's repository in a separate folder is a good practice.

I recommend storing Ed Donner's repository in a separate folder. This allows you to upload and save his notebook files independently, making it easier to track your work.

### 12/20/2024 - Set up of the course

Today set up of the basic structure for the LLM course.

