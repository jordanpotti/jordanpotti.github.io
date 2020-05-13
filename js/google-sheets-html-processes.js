Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@jordanpotti 
jordanpotti
/
jordanpotti.github.io
Private
0
0
0
 Code
 Pull requests 0 Actions
 Projects 0
 Wiki
 Security 0
 Insights
 Settings
jordanpotti.github.io/js/google-sheets-html-people.js /
@jordanpotti jordanpotti Rename google-sheets-html.js to google-sheets-html-people.js
247dd49 1 minute ago
35 lines (32 sloc)  1.1 KB
  
/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=15nU4tmxYX-6_pDI79uxGEG9wCyB2fNeA4ALF4oG7jGA&gid=967627017&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D label A "", B "Level 1 - Defined", C "Level 2 - Managed", D "Level 3 - Optimized"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
