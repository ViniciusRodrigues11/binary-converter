


function onlyNumber(e) {
    var key = (window.event) ? event.keyCode : e.which;
    if ((key == 48 || key == 49)) {

        return true

    }

    else {
        return false;
    }

}


function convert() {

    var bin = document.querySelector("#binary").value
    if (document.querySelector("#binary").value > 1) {

        var dec = parseInt(bin, 2)
        var oct = dec.toString(8)
        var hex = dec.toString(16)

        var htmlElement = `
        <li><h4>Decimal</h4><p>${dec}</p></li>
        <li><h4>Octal</h4><p>${oct}</p></li>
        <li><h4>Hexadecimal</h4><p>${hex}</p></li>    
        `

        document.querySelector("#results").innerHTML = htmlElement


        var copy;
        $("#results > li").on("click", (e) => {
            copy = $(e.currentTarget).children('p').text()
            $('#hiddenInput').attr('value', copy)

            $('#hiddenInput').select()

            document.execCommand('copy')

            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

        })
    }
}


