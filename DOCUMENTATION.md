# Lilly Technical Challenge Documentation Template


## Approach
I worked through the objectives in order as the first two are somewhat interlinked. First, I fetched data from the backend server to the frontend and displayed the name and price of each medicine in the 'index.html' file. I then altered which values were being displayed to exlude the values that were either null or blank to ensure that there were no gaps in the data that was being displayed. For objective three, I allowed the user to create a new medicine through the creation of a form and the subsequent transfer of that form data to the backend to be processed. During this challenge, I utilised tutorials whilst attempting to send data between the backend and frontend of the application.


## Problems Faced

I faced a couple of issues throughout this challenge. The first issue was that the form data from objective three was not in the correct format when I attempted to pass it to the backend, and therefore I encounted a TypeError (seen below). To resolve this issue, I checked the parameters of the '/update' endpoint to see which data type they accepted. I was originally altering my FormData to a different type but after seeing that the endpoint accepted FormData I removed that line of code and it resolved the issue.

<img width="940" height="91" alt="image" src="https://github.com/user-attachments/assets/92513473-28d2-4874-b4b1-de59db555953" />

Another major issue that I faced during the implentation of objective three was an Unprocessable Content error (seen below) as the backend couldn't process the form data. After a lot of debugging of my javascript code, I realised that there was a typo in my index.html file ('name = 'price'' in index.html read as 'price = 'price'') and hence I was getting an error. I fixed the typo and the user could now input code into the form and it would be successfully sent to the backend and used by the 'create_med' function.

<img width="940" height="58" alt="image" src="https://github.com/user-attachments/assets/1bac6bf5-ade3-44f0-89e2-153f67a7784b" />


## Evaluation

Overall, this challenge took longer than anticipated. This was mainly due to the nature of the challenge being something I haven't encountered much of before, and therefore I had to complete a small amount of research and read through a few tutorials before I was able to start the challenge. The main issues I faced surrounded sending data between the frontend and backend, although I had very few issues processing the data once it was in the frontend.

If I was able to complete this challenge again with fewer time constraints, I would endeavour to make improvements to the design of the frontend, as well as implementing forms to allow the user to both update and delete medicines. I would also like to add messages to be displayed for the user once they have submitted a form to confirm that it has been submitted, as well as enforcing some type checking on the form's inputs that will notify the user if the data they have submitted in the form is incorrect (the wrong data type for example).
