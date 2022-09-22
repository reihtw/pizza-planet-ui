/**
 * Fetch the orders and append to the table
 * 
 * ****************************
 * Please change 'json/orders.json' 
 * with your service endpoint below
 * ****************************
 */
 fetch('http://127.0.0.1:5000/report/')
 .then(response => response.json())
 .then(report => {
     let reportTemplate = createReportTemplate(report);
     let div = $("#report div");
     div.append(reportTemplate);
 });

/**
* Find the template tag and populate it with the data
* @param report
*/
function createReportTemplate(report) {
 let template = $("#report-template")[0].innerHTML;
 return Mustache.render(template, report);
}
