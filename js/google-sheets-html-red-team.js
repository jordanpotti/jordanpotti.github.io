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

function drawVisualizationRedTeam() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=15nU4tmxYX-6_pDI79uxGEG9wCyB2fNeA4ALF4oG7jGA&gid=1600495974&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D');
    query.send(handleQueryResponse);
}

function handleQueryResponseRedTeam(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table-red-team'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualizationRedTeam);
