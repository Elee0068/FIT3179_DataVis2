var vg_1 = "GlobalWineProducers.vg.json"; 
var vg_2 = "TopWineProducers.vg.json";
var vg_3 = "HistWineTrade.vg.json";
var vg_4 = "GlobalWineExport.vg.json";
var vg_5 = "GlobalWineImports.vg.json";

vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#pie", vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#area", vg_3, {"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#extree", vg_4, {"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#imtree", vg_5, {"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
