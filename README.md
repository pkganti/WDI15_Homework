# WDI-15 ([General Assembly, Sydney](https://generalassemb.ly/sydney))
##Homework Repository

### Repository Setup

You only need to do this once, not every time you're submitting homework!

- **Fork this repository**
    + *'Forking' creates a personal, 'forked' copy of this repository on your Github account.*  
    + Hit the **Fork** button in the top right-hand corner of this page.
- **Clone your forked repository to your computer**
    + *'Cloning' takes your 'forked' repository on GitHub and creates a local copy - or 'clone' - on your computer.*
    + Make sure you're browser is open to **your** forked version of this repository on Github (eg [http://github.com/{{YOUR_USERNAME}}/WDI15_Homework](http://hithub.com/{{YOUR_USERNAME}}/WDI15_Homework)).
    + Hit the **Clone or Download** button in the top right-hand corner of the page.
    + Open your computer's terminal to the directory in which you intend to store your homework.
    + `git clone url_of_your_fork_on_github`
- **Add an upstream remote repository**
    +  *Creating an upstream repository links the local repository on your computer to this repository on Github*
    + `cd WDI15_Homework`
    + `git remote add upstream https://github.com/cjbarnaby/WDI15_Homework`
    + `git pull upstream master`

### Do your Homework

You should put each night's homework in a new folder within the appropriate directory of your homework repo. So, for day two, where you have two tasks ("Calculator" and "Strings"), you might do something like this:

1. Open Terminal/iTerm2;
2. Go to your local homework repo (eg, `cd Projects/general-assembly/WDI15_Homework`);
3. From here, go to the folder matching your name within that repo, and the appropriate week (eg, `groucho_marx/week_01`);
4. Create new folders for each of the day's homework tasks: (eg `mkdir calculator` and `mkdir strings`);
5. Create the files necessary to complete the homework in their respective directories;
6. Get to it!

### Add Your Homework

You need to do this every time you're submitting homework.

- **Commit your work to your local repository progressively**
    + `git add .`
    + `git commit -m "YOUR_COMMIT_MESSAGE_GOES_HERE"`
- **Push your changes to your forked repository**
    + `git pull`
    + `git push origin master`
- **Once you're finished, submit a pull request for me to accept your homework**
    + Navigate to your forked version of this repository on Github (eg [https://github.com/{{YOUR_USERNAME_HERE}}/WDI15_Homework](https://github.com/{{YOUR_USERNAME_HERE}}/WDI15_Homework)).
    + Hit the **Pull request** button.
    + Make sure the destination for the pull request is set to my repository, not your own or anyone else's.
    - In the pull request comment, tell me the following:
        + How difficult did you find this (out of 10)? 0 being no problems at all, 10 being impossible;
        + Was there anything that you struggled with?;
        + Is there anything that you'd like some further information on?;
        + Roughly how long did it take?

If you don't mention anything in the Pull Request comments, we will assume you had no problems at all with it!
