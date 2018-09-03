var queryURL = "https://api.myjson.com/bins/13d258";
var jsonTree;
var listQuestions
var listOfQuestions = ["LinkedIn:","Hometown:","Birthday:","Favorite Movie:","Favorite Pastime:","Favorite Travel Destination:","Favorite 90's Jam:","If you were stranded on an island, what 2 things would you want with you?:","If you could be a sandwich, what sandwich would you be and why? (one sentence):","If you could be one person for an entire day (dead or alive), who would it be and why? (one sentence):","Do you have any skills or talents that most people don’t know about?:","What is one thing that annoys you the most?:","Fun Fact about yourself:", "Personality Type:"]


$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    var keyWord = new URL(document.location).searchParams.get("office");
    $("#officeImage").addClass(keyWord);

    officeEmployees = response.offices[keyWord].employees;
    console.log(officeEmployees);

    if(officeEmployees.length == 0 ){
        let people = $(".people");
        let h4 = $("<h4>").html("Coming soon!");
        people.append(h4)
    }

    for(var i = 0;i<officeEmployees.length;i++){
    //DISPLAY FOR A PERSON
    let people = $(".people");

    let outsideList = $("<li>");
    let img = $("<img>").attr("alt",officeEmployees[i].name);
    img.attr("src","images/"+keyWord+"/"+officeEmployees[i].profile_pic+".jpg");

    let div = $("<div>");
    let h3 = $("<h3>").html(officeEmployees[i].name).addClass("f3");
    let span = $("<span>").addClass("bar little-bar");
    let p = $("<p>").addClass("i measure-wide").html(officeEmployees[i].fav_quote);
    let ul = $("<ul>").addClass("about");

    //about 
    let li14 = $("<li>");
    if(officeEmployees[i].personalityType != ""){
       
        let b14 = $("<b>").html(listOfQuestions[13]+"&nbsp;");
        li14.append(b14);
        li14.append(officeEmployees[i].personalityType);
    }
    
    let li1 = $("<li>");
    let b1 = $("<b>").html(listOfQuestions[0]+"&nbsp;");
    li1.append(b1);
    let aTag = $("<a>").html("www.linkedin.com/in/khall5").attr("href","https://www.linkedin.com/in/khall5").attr("target","_blank");
    li1.append(aTag);
    let li2 = $("<li>");
    let b2 = $("<b>").html(listOfQuestions[1]+"&nbsp;");
    li2.append(b2);
    li2.append(officeEmployees[i].hometown);
    let li3 = $("<li>");
    let b3 = $("<b>").html(listOfQuestions[2]+"&nbsp;");
    li3.append(b3);
    li3.append(officeEmployees[i].birthday);
    let li4 = $("<li>");
    let b4 = $("<b>").html(listOfQuestions[3]+"&nbsp;");
    li4.append(b4);
    li4.append(officeEmployees[i].fav_movie);
    let li5 = $("<li>");
    let b5 = $("<b>").html(listOfQuestions[4]+"&nbsp;");
    li5.append(b5);
    li5.append(officeEmployees[i].fav_pasttime);
    let li6 = $("<li>");
    let b6 = $("<b>").html(listOfQuestions[5]+"&nbsp;");
    li6.append(b6);
    li6.append(officeEmployees[i].fav_travel);
    let li7 = $("<li>");
    let b7 = $("<b>").html(listOfQuestions[6]+"&nbsp;");
    li7.append(b7);
    li7.append(officeEmployees[i].fav_90s_jam);
    let li8 = $("<li>");
    let b8 = $("<b>").html(listOfQuestions[7]+"&nbsp;");
    li8.append(b8);
    li8.append(officeEmployees[i].stranded);
    let li9 = $("<li>");
    let b9 = $("<b>").html(listOfQuestions[8]+"&nbsp;");
    li9.append(b9);
    li9.append(officeEmployees[i].sandwich);
    let li10 = $("<li>");
    let b10 = $("<b>").html(listOfQuestions[9]+"&nbsp;");
    li10.append(b10);
    li10.append(officeEmployees[i].could_be_anyone);
    let li11 = $("<li>");
    let b11 = $("<b>").html(listOfQuestions[10]+"&nbsp;");
    li11.append(b11);
    li11.append(officeEmployees[i].skills);
    let li12 = $("<li>");
    let b12 = $("<b>").html(listOfQuestions[11]+"&nbsp;");
    li12.append(b12);
    li12.append(officeEmployees[i].most_annoyed_by);
    let li13 = $("<li>");
    let b13 = $("<b>").html(listOfQuestions[12]+"&nbsp;");
    li13.append(b13);
    li13.append(officeEmployees[i].fun_fact);

    if(officeEmployees[i].personalityType != ""){
    ul.append(li14);
    }
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);
    ul.append(li5);
    ul.append(li6);
    ul.append(li7);
    ul.append(li8);
    ul.append(li9);
    ul.append(li10);
    ul.append(li11);
    ul.append(li12);
    ul.append(li13);

    div.append(h3);
    div.append(span);
    div.append(p);
    div.append(ul);
    outsideList.append(img);
    outsideList.append(div);
    people.append(outsideList);
    }

    let personDiv = $('.people li');
personDiv.click(function(event) {
    if ($(event.target).is('li')) {
        let aboutList = $(event.target).find( ".about" );
        aboutList.slideToggle(600);
    } else {
        aboutList = $(event.target).parent().find( ".about" );
        aboutList.slideToggle(600);
    }
})
});

