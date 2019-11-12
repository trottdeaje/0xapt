
$("#submit_ip").click(function () {

    //clears the two div areas so the information clears before next scan
    $("#ip_scanned").empty()
    $("#ip_contents").empty()

    //get the users value from the input tag
    let usr_ip = $("#ip_scan").val()

    //puts the value of the IP address inside of the query 
    let shodan_api = `https://api.shodan.io/shodan/host/${usr_ip}?key=Iu5v1030Aut42SS8w2bE23UeiFLCvswJ`

    //then initiates the get resquest of data
    $.get(shodan_api, function (response) {


        //port title
        let port_title = $("<h1>").attr("style", "").html("Open Port/s")

        $("#ip_contents").append(port_title)


        //gets the information from the ports object
        let ports = response.ports

        //Shows the IP that the user inputted
        let ip = $("<h1>").html("IP Scanned: " + response.ip_str + " ")

        //appends it to the ip_scanned div tag
        $("#ip_scanned").append(ip)

        //for loop to show the values in side of the ports object, which in this case are the port numbers
        for (let index = 0; index < ports.length; index++) {

            let each_port = ports[index];
            let final = $("<p>").html("Port: " + each_port + " is open");
            $("#ip_contents").append(final);

        }



        //location title
        let location_title = $("<h3>").html("Location Data")

        $("#ip_contents").append(location_title)

        //getting the location data
        let data = response.data[1].location;

        //creating a var for each objects data
        let longitude = "Longitude: " + data.longitude.toString();
        let latitude = "Latitude: " + data.latitude.toString()
        let region_code = "Region Code: " + data.region_code;
        let country_name = "Country Name: " + data.country_name;
        let city = "City: " + data.city;
        let postal_code = "Postal Code: " + data.postal_code;
        let country_code = "Country Code: " + data.country_code;
        let area_code = "Area Code: " + data.area_code;

        // putting the data into an array for easier handling, preparing to be used in a for loop
        let contents = [city, region_code, area_code, longitude, latitude, country_name, country_code, postal_code]

        for (let index = 0; index < contents.length; index++) {

            let location_data = contents[index]

            let final = $("<p>").html(location_data);

            $("#ip_contents").append(final);

        }




        //Hostname info 

        let host_title = $("<h3>").html("Hostname/s")

        $("#ip_contents").append(host_title)

        let hostname = response.hostnames;

        for (index = 0; index < hostname.length; index++) {

            hostnames = hostname[index]

            console.log(hostnames)

            let final = $("<p>").html(hostnames);

            $("#ip_contents").append(final);
        }



        //Last server update title

        let last_update_title = $("<h3>").html("Last Server Update")

        $("#ip_contents").append(last_update_title)

        let lastUpdate = $("<p>").html(response.last_update.substring(0, 10))

        $("#ip_contents").append(lastUpdate)


    })


})