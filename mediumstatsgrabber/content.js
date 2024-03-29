// content.js
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

    	var URLBits = document.URL;
		//console.log(document.URL);



		if(URLBits.includes("overview")){
			alert("Please select the 'Stories' view and try again");
		} else {;

			var statType = document.querySelectorAll("h1")[0];
			var statsfrom = "";

	    	var content = "mediumID|title|link|publication|mins|views|reads|readRatio|fans|pubDate|liveDate"+ "\n";
			var rows = document.querySelectorAll(".sortableTable-row.js-statsTableRow");
			rows.forEach(function(row) {
				var mediumID = row.getAttribute("data-action-value");
				var title = row.querySelectorAll(".sortableTable-title a")[0].innerText;
				
				var publicationtxt = row.querySelectorAll("a.sortableTable-link")[0].innerText;
				if(publicationtxt == "View story"){
					if(statType.innerText.includes("Your stats")){
						var publication = "Not in publication";
						
					} else {
						var publicationStats = document.querySelectorAll("h1.hero-title")[0].innerText;
						var publication = publicationStats.substring(0,publicationStats.lastIndexOf(" stats"));
						
					};
					var link = row.querySelectorAll("a.sortableTable-link")[0].href;
				} else {
					var publication = publicationtxt;
					var link = row.querySelectorAll("a.sortableTable-link")[1].href;

				};
				var mins = row.querySelectorAll("span.readingTime")[0].title;
				var values = row.querySelectorAll(".sortableTable-value");
				var views = values[1].innerText;
				var reads = values[2].innerText;
				var readRatio = values[3].innerText;
				var fans = values[4].innerText;
				var pubDate = new Date(parseInt(row.getAttribute("data-timestamp"))).toISOString().slice(0, 10);
				var liveDate = new Date(parseInt(values[0].innerText)).toISOString().slice(0, 10);
				content += mediumID + "|" + title + "|" + link + "|" + publication + "|" + mins + "|" + views + "|" + reads + "|" + readRatio + "|" + fans + "|" + pubDate + "|" + liveDate +"\n";
				

			});

			
			
			if(statType.innerText.includes("Your stats")){
				statsfrom = "MyStats"; 
			} else {
				statsfrom = document.querySelectorAll("h1.hero-title")[0].innerText;
			};
			
			download(statsfrom + "-medium-metrics-" + new Date().toISOString().slice(0, 10) + ".csv", content);
		};
    }
  }
);