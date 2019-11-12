//attempt to give back results by using the viewdns api

//WORKS JUST NEEDS A NEW API KEY FROM VIEWDNS FROM AFTER 250 QUERIES


alert("You must have the following to use this tool: Chrome browser, Access-Control-Allow-Origin Extenstion: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf")

$("#submit_dns").click(function () {

    //clears the two div areas so the information clears before next scan
    $("#dns_scanned").empty()
    $("#dns_contents").empty()

    //get the users value from the input tag
    let usr_domain = $("#dns_scan").val()


    //display that the user has entered
    let domain_title = $("<h3>").attr({
        style: "text-align:center;padding-top:10px;"
    }).html("Domain: " + usr_domain)

    $("#dns_contents").append(domain_title)

    //creates a brand new query search for each individual type of dns recordd

    let view_api_A = `https://api.viewdns.info/dnsrecord/?domain=${usr_domain}&recordtype=A&apikey=140f52607d22f4a79cd9931e57862ba98416eef7
    &output=json`

    let view_api_CNAME = `https://api.viewdns.info/dnsrecord/?domain=${usr_domain}&recordtype=A&apikey=140f52607d22f4a79cd9931e57862ba98416eef7
    &output=json`

    let view_api_MX = `https://api.viewdns.info/dnsrecord/?domain=${usr_domain}&recordtype=MX&apikey=140f52607d22f4a79cd9931e57862ba98416eef7
    &output=json`

    let view_api_TXT = `https://api.viewdns.info/dnsrecord/?domain=${usr_domain}&recordtype=TXT&apikey=140f52607d22f4a79cd9931e57862ba98416eef7
    &output=json`

    let view_api_SOA = `https://api.viewdns.info/dnsrecord/?domain=${usr_domain}&recordtype=SOA&apikey=140f52607d22f4a79cd9931e57862ba98416eef7
    &output=json`


    let view_api_NS = `https://api.viewdns.info/dnsrecord/?domain=${usr_domain}&recordtype=NS&apikey=140f52607d22f4a79cd9931e57862ba98416eef7&output=json`


    //create a funciton that will show all records using the specified api url
    Master_Lookup = (api_url) => {

        $.get(api_url, function (response) {

            let data = response

            //get the domain name
            let domain = data.query.domain

            console.log(domain)


            //get the dns type
            let recordtype = data.query.recordtype
            console.log("Record Type: " + recordtype)

            let NameServerTitle = $("<h4>").attr({
                style: "padding-top:10px",
            }).html("- Record: " + recordtype + " -");

            $("#dns_contents").append(NameServerTitle);


            //show the dns servers found

            //get contents inside of the records object
            let servers = data.response.records

            //console.log(servers)


            for (let index = 0; index < servers.length; index++) {

                //the data that needs to be shown on the page
                let final_data = servers[index].data

                let final = $("<p>").html(final_data);

                $("#dns_contents").append(final);

                console.log(servers[index].data)
            }

        })

    }

    Master_Lookup(view_api_NS)
    Master_Lookup(view_api_A)
    Master_Lookup(view_api_TXT)
    Master_Lookup(view_api_MX)
    Master_Lookup(view_api_SOA)
    Master_Lookup(view_api_CNAME)

})