var queryURL = "https://api.myjson.com/bins/13d258";
var jsonTree;

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    var jsonTree = response;

    var officeName = []
    var officeClass = []


    for (let i in jsonTree.offices) {
        officeName.push(jsonTree.offices[i].name);
        officeClass.push(jsonTree.offices[i].class);
    }

    for (var i = 0; i < officeName.length; i++) {
        let locations = $(".locations");
        let div = $("<div>");
        div.addClass("fl w-third mw5 mw7-ns center pa3 ph5-ns fullSizeImage slick-slide " + officeClass[i]);
        let link = $("<a>");
        link.attr("href", "office.html?office=" + officeClass[i]);
        let h2 = $("<h2>").html(officeName[i]);
        h2.addClass("f2");
        let span = $("<span>");
        span.addClass("bar little-bar")
        link.append(h2);
        div.append(link);
        div.append(span);
        locations.append(div);

    }
    runslick(() => {
        $(function () {
            $('.locations').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                cssEase: 'ease-in-out',
            });
        });
    })

});

