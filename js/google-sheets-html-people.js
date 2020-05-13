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
var peoplevisualization;

function drawVisualizationPeople() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=15nU4tmxYX-6_pDI79uxGEG9wCyB2fNeA4ALF4oG7jGA&output=html&usp=sharing');
 query.setQuery('SELECT A, B, C, D label A "", B "Level 1 - Defined", C "Level 2 - Managed", D "Level 3 - Optimized"');    query.send(handleQueryResponsePeople);
}

function handleQueryResponsePeople(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var datapeople = response.getDataTable();
    peoplevisualization = new google.visualization.Table(document.getElementById('table-people'));
    peoplevisualization.draw(datapeople, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualizationPeople);
