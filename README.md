# Chrome-Medium-Stats-Grabber

# Update - 2023/08/25**
* **OK THAT'S A WRAP - MEDIUM HAS CHANGED THEIR PAGE STRUCTURE AND THIS TOOL NO LONGER WORKS AS INTENDED** 












# previous updates
Update - 2021/08/23
* fixed another similar scraping bug (caused by Medium CSS update) that was stopping extension from creating dataset


Update - 2019/03/08
* fixed similar scraping bug (caused by Medium CSS update) that was stopping extension from creating dataset

Update - 2018/09/25
* fixed scraping bug that was stopping extension from creating dataset

A quick and dirty Google.Chrome extension that grabs story stats from your Medium.com stats page and saves them as a .CSV file. 
* Once installed in Chrome, [direct](https://chrome.google.com/webstore/detail/medium-stats-grabber/gdomhiacoiloiecaholjiegdaklelpig?hl=en-US) or download and goto extensions and tick the 'developer mode' option and then add using the 'Load and unpack extension...' button). 
* Log into your Medium.com site, go to your Stats page and scroll to the last item you want the stats for (as Medium uses infinite scrolling). 
* Hit the little !['M icon'](https://github.com/murraygm/Chrome-Medium-Stats-Grabber/raw/master/mediumstatsgrabber/icon.png) 'M' extension icon and it will generate a .CSV file (with "|" delimiters). 

Data structure looks like so: mediumID|title|link|publication|mins|views|reads|readRatio|fans|pubDate|liveDate

Works for personal and publications.
More info here: [https://medium.com/design-strategy-data-people/getting-your-medium-stats-87a48751fa6d]


