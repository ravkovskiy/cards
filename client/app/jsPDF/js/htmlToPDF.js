function pdfToHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    source = $('#card')[0];
    specialElementHandlers = {
        '#bypassme': function(element, renderer) {
            return true
        }
    }
    margins = {
        top: 0,
        left: 0,
        width: 500
    };
    pdf.fromHTML (
        source //HTML string or DOM elem ref.
        , margins.left //x coord
        , margins.top  //y coord
        , {
            'width': margins.width //max width of content PDF
            , 'elementHandlers': specialElementHandlers
        },
        function (dispose) {
            //dispose: object with X, Y of the last line add to the PDF
            // this allow the insertion of new lines after html
            pdf.save('pdfinhtml.pdf');
        }
    )
}