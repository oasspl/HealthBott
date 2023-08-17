# Healthbot

There are two components to this Healthbot.
* Back-End 
* Front-End *

## Pre-requisites:
* Create a virtual environment pip (Back-End) called venv.
* Ensure that the required packages are installed for npm (Front-End) and pip (Back-End) (Note: 'requirements.txt' is in server_api folder).
* Also make sure that the MongoDB and Neo4j servers are running before starting the servers. *

## Steps to start the servers:

### Back-End

* Go to the Current Directory in a Windows/Linux terminal of the repository on your local machine. (Eg. "D:\Projects\Healthbot")
* Within the repo, go to 'server_api' folder
* Enter the virtual environment by typing 'venv/Scripts/activate' and press Enter
* Then type 'python app.py' to run the server.*

### Front-End

* Go to the Current Directory in a Windows/Linux terminal of the repository on your local machine. (Eg. "D:\Projects\Healthbot")
* Type 'npm start' and press Enter *


Additionally, there is a Dashboard that shows the overview of the responses:
To run it,

* Go to the Current Directory in a Windows/Linux terminal of the repository on your local machine. (Eg. "D:\Projects\Healthbot")
* Type 'streamlit run dashboard.py' and press Enter *
