## Copying the City's Page Template

I was feeling pretty confident going into this, because I had sucessfully copied Ben's static site template three times and swapped out my template items.

The City wasn't my first choice, but the other news site's I looked at didn't have that beautiful green button of "template" to work from, so I picked the path of least resistence.

Downloading the file was fine, also was able to build it using npm easily (the City also had a really easy and beautiful ReadMe.md page which helped in this process) I even had CoPilot clean up the fonts and remove the logo, per The City's ReadMe instructions. I was pretty proud of myself for downloading a placeholder logo but I definitely should have downloaded the .svg instead of a .png but that's OK, I'm learning.

Once I had successfully replaced the filler text with my own version of filler text and cut some of the donation links, I was ready to deploy and this is where the drama came in.

First, I was told the artifact was out of date (needed to update from @v3 to @v4), which I was like OK if I just cntrl+f, can I manually replace it? And then somehow I ended up putting in new code for validating via Lighthouse? Whatever that is.

Sure, find. The page had no issues being "built" on Github, but it all collapsed after we validated the hyperlinks. Suddenly I needed to connect to an AWS key (which I definitely DON'T have) and some other jargon. My stupid harddrive also loves to create fake copies of pages that have a ._ at the front, which meant I was getting double the error messages because I had junk pages clogging the build. 

So, my first instinct, geniusly, is to just start deleting code from the deploy-stage.yml file. Surely, if I don't tell the computer to look for an AWS code it won't need one, right? That was enough to get it successfully deployed on GitHub, but now the page won't actually load and I get 404 messages.

So what I've learned is downloading templates comes at the risk of having junk in there that is out of date and doesn't exactly save more time. 

I probably could have used CoPilot more during this process, but I generally believe I have better problem-solving skills than the robots, so I wanted to mess it up myself. 