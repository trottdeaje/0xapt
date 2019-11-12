//attempt to give back results by using the shodan api
//shodan api key: Iu5v1030Aut42SS8w2bE23UeiFLCvswJ
//create a drop down menu that has different types of scans, that when one is selected will run $(foobarr).empty() and load up another scanner
//create a section for OSINT and information collection, name, email, phonenum, etc
//create a section that shows the users latest request information
//use viewdns api

//then later -> attempt to use the port scanner api https://viewdns.info/api/docs/port-scanner.php


//change the color of the button specified
change_on_hover = (id) => {

    $(id).mouseover(function () {

        $(id).css("border-color", "rgb(21, 3, 187)");
    })

    $(id).mouseout(function () {

        $(id).css("border-color", "transparent");

    })

}

//specific selected buttons
change_on_hover("#tv")
change_on_hover("#books")
change_on_hover("#music")
change_on_hover("#img")
change_on_hover("#soft_games")
change_on_hover("#other")



//open link in new tab
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}



//perfom action once 
$("body").click(function (event) {

    let data = event.target;

    console.log(data);

    if (data.id === "music") {

        //value of the userinput form
        let usr_ip = $("#ip_scan").val()

        //creating query to being search
        let query = encodeURI(`${usr_ip} +(mp3|wav|ac3|ogg|flac|wma|m4a) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)`)

        //puts together final query
        let final = "https://www.google.com/search?q=" + query

        //open query in new tab
        openInNewTab(final)

        console.log(final)

    } else if (data.id === "books") {

        //value of the userinput form
        let usr_ip = $("#ip_scan").val()

        //creating query to being search
        let query = encodeURI(`${usr_ip} +(MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)`)

        //puts together final query
        let final = "https://www.google.com/search?q=" + query

        //open query in new tab
        openInNewTab(final)

        console.log(final)


    } else if (data.id === "img") {

        //value of the userinput form
        let usr_ip = $("#ip_scan").val()

        //creating query to being search
        let query = encodeURI(`${usr_ip} +(jpg|png|bmp|gif|tif|tiff|psd) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)`)

        //puts together final query
        let final = "https://www.google.com/search?q=" + query

        //open query in new tab
        openInNewTab(final)


        console.log(final)

    } else if (data.id === "tv") {

        //value of the userinput form
        let usr_ip = $("#ip_scan").val()

        //creating query to being search
        let query = encodeURI(`${usr_ip} +(mkv|mp4|avi|mov|mpg|wmv) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)`)

        //puts together final query
        let final = "https://www.google.com/search?q=" + query

        //open query in new tab
        openInNewTab(final)


        console.log(final)

    } else if (data.id === "soft_games") {

        //value of the userinput form
        let usr_ip = $("#ip_scan").val()

        //creating query to being search
        let query = encodeURI(`${usr_ip} +(exe|iso|tar|rar|zip|apk) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)`)

        //puts together final query
        let final = "https://www.google.com/search?q=" + query

        //open query in new tab
        openInNewTab(final)


        console.log(final)

    } else if (data.id === "other") {

        //value of the userinput form
        let usr_ip = $("#ip_scan").val()

        //creating query to being search
        let query = encodeURI(`${usr_ip} -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)`)

        //puts together final query
        let final = "https://www.google.com/search?q=" + query

        //open query in new tab
        openInNewTab(final)

        console.log(final)

    } else {
        console.log("Interesting...")
    }

})