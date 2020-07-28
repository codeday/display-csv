# Display CSV

## Getting this webpage running
You'll need to define the following envrionment variables:
 - `TITLE` What you want the webpage to be called. Will be dispalyed in the hero and the tab title
 - `CSV_URL` URL to the CSV you wish to display
 - `TITLE_COLUMN` Assign this to the column name you wish to have presented in the card header
-  `PORT` (Optional, defaults to: 80) Used to change the default port 
-  `TEMPLATE` (Optional, defaults to: "index.html") Used to change the template (from src/templates) the webpage is rendered with. Currently the only option is "slideshow.html"

If you want to hide or rename fields, just remove them from the source CSV.
