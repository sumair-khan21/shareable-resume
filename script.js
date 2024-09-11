$("#display").hide();
$("#download-pdf").hide();

var form = document.getElementById('all-form');
var resumeDisplay = document.getElementById('display');
if (form && resumeDisplay) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var title = document.getElementById('title').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skill = document.getElementById('skill').value;
        resumeDisplay.innerHTML = '';
        var header = "\n            <header>\n                <h1>".concat(name, "</h1>\n                <p class=\"main\">").concat(title, "</p>\n                <p>Email: ").concat(email, "  |   Phone: ").concat(phone, "</p>\n            </header>\n        ");
        var addressSection = "\n            <section class=\"address\">\n                <h2>Address</h2>\n                <p>".concat(address, "</p>\n            </section>\n            <section class=\"address\">\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n            </section>\n             <section class=\"address\">\n                <h2>Experience</h2>\n                <p>").concat(experience, "</p>\n            </section>\n            <section class=\"address\">\n                <h2>Skill</h2>\n                <p>").concat(skill, "</p>\n            </section>\n        ");
        resumeDisplay.innerHTML = header + addressSection;
        $("#display").show();
        $("#download-pdf").show();
    });
}
else {
    console.error('Form or resume display element not found');
}

document.querySelector("#download-pdf").onclick = function(){
    console.log("Print PDF")
    var HTML_Width = $("#display").width();
    var HTML_Height = $("#display").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#display")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        let PDFName = document.getElementById('name').value + "-" + Math.floor(Math.random()*90000) + 10000;
        pdf.save(`${PDFName}.pdf`);
        // $(".html-content").hide();
    });
}






