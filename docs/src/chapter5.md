# Create the .env file for API keys

*The `.env` file is where you store the API-keys for your LLMs is located in the `~/Test/notebooks` directory.*

```@contents
Pages = ["chapter5.md"]
```

## Prerequisites

A PC or laptop running Ubuntu 22.04 with Nano or any other kind of text-editor installed is required.

## What tou will do

Step 1: Create the `.env` file in `~\Test\notebooks`.  

## Create the `.env` file

The idea is very simple. Create a `.env` file with tour text-editor and create the key description to retrieve the key with the Python code in the cell.

|Step        | Action      |
|:---------- | :---------- |
| 1 | Goto `notebooks` folder: `cd ~\Test\notebooks`. |
| 2 | Create the file with Nano: `sudo nano .env` |
| 2 | Type the API-key name, followed by your key: OPENAI_API_KEY='<replace with the OpenAI API-key>' |
| 3 | Save the file: `Ctrl+O`. |
| 4 | Leave Nano: `Ctrl+X`. |
| 5 | Check the content of the file: `cat .env`. |
||

## Summary

This guide describes how to create a .env file in the ~/Test/notebooks directory to store API keys for Large Language Models (LLMs).  It requires an Ubuntu 22.04 PC/laptop with a text editor (Nano is recommended). The process involves navigating to the directory, creating the .env file using Nano, adding the API key (e.g., OPENAIAPIKEY='<your_key>'), saving, exiting, and verifying the file's contents.