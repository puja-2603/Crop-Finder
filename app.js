const express = require("express");
const bodyparser = require("body-parser");
const _ = require("lodash");
const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})


// console.log(crops);
const crops = [
    {
      Crops: "Apple",
      Soil_type: "Well-drained",
      months: "March-May",
      fertilizer: "Balanced",
      annual_rainfall: "700-1000 mm",
      temp: "10-30"
    },
    {
      Crops: "Barley",
      Soil_type: "Loamy",
      months: "October",
      fertilizer: "Nitrogen",
      annual_rainfall: "500-700 mm",
      temp: "15-25"
    },
    {
      Crops: "Betel Nut",
      Soil_type: "Sandy",
      months: "Throughout",
      fertilizer: "Organic",
      annual_rainfall: "2500-3000 mm",
      temp: "20-35"
    },
    {
      Crops: "Buckwheat",
      Soil_type: "Sandy loam",
      months: "August",
      fertilizer: "Phosphorus",
      annual_rainfall: "500-750 mm",
      temp: "10-25"
    },
    {
      Crops: "Cashew",
      Soil_type: "Sandy",
      months: "November",
      fertilizer: "Potassium",
      annual_rainfall: "1000-2500 mm",
      temp: "25-30"
    },
    {
      Crops: "Chillies",
      Soil_type: "Well-drained",
      months: "Throughout",
      fertilizer: "Balanced",
      annual_rainfall: "500-750 mm",
      temp: "20-30"
    },
    {
      Crops: "Coconut",
      Soil_type: "Sandy, loamy",
      months: "Throughout",
      fertilizer: "Organic",
      annual_rainfall: "1500-3000 mm",
      temp: "20-30"
    },
    {
      Crops: "Coffee",
      Soil_type: "Well-drained",
      months: "October",
      fertilizer: "Nitrogen",
      annual_rainfall: "2000-3000 mm",
      temp: "20-28"
    },
    {
      Crops: "Cotton",
      Soil_type: "Loamy, sandy",
      months: "May-June",
      fertilizer: "Nitrogen",
      annual_rainfall: "600-800 mm",
      temp: "25-35"
    },
    {
      Crops: "Ginger",
      Soil_type: "Loamy",
      months: "February",
      fertilizer: "Organic",
      annual_rainfall: "1500-3000 mm",
      temp: "20-30"
    },
    {
      Crops: "Gram",
      Soil_type: "Well-drained",
      months: "October",
      fertilizer: "Phosphorus",
      annual_rainfall: "400-600 mm",
      temp: "25-30"
    },
    {
      Crops: "Groundnut",
      Soil_type: "Well-drained",
      months: "May-June",
      fertilizer: "Balanced",
      annual_rainfall: "500-800 mm",
      temp: "25-35"
    },
    {
      Crops: "Jute",
      Soil_type: "Loamy, alluvial",
      months: "February",
      fertilizer: "Nitrogen",
      annual_rainfall: "1500-2500 mm",
      temp: "25-35"
    },
    {
      Crops: "Lemon",
      Soil_type: "Well-drained",
      months: "Throughout",
      fertilizer: "Organic",
      annual_rainfall: "600-1000 mm",
      temp: "15-30"
    },
    {
      Crops: "Maize",
      Soil_type: "Well-drained",
      months: "June-July",
      fertilizer: "Nitrogen",
      annual_rainfall: "500-800 mm",
      temp: "20-30"
    },
    {
      Crops: "Millet",
      Soil_type: "Sandy loam",
      months: "July",
      fertilizer: "Phosphorus",
      annual_rainfall: "500-800 mm",
      temp: "25-35"
    },
    {
      Crops: "Mustard",
      Soil_type: "Loamy",
      months: "October",
      fertilizer: "Nitrogen",
      annual_rainfall: "400-600 mm",
      temp: "10-30"
    },
    {
      Crops: "Oilseed",
      Soil_type: "Well-drained",
      months: "October",
      fertilizer: "Balanced",
      annual_rainfall: "Varies",
      temp: "Varies"
    },
    {
      Crops: "Pineapple",
      Soil_type: "Sandy, loamy",
      months: "Throughout",
      fertilizer: "Organic",
      annual_rainfall: "1500-2500 mm",
      temp: "20-30"
    },
    {
      Crops: "Pulses",
      Soil_type: "Well-drained",
      months: "November",
      fertilizer: "Nitrogen",
      annual_rainfall: "400-600 mm",
      temp: "Varies"
    },
    {
      Crops: "Rice",
      Soil_type: "Clayey",
      months: "May-June",
      fertilizer: "Nitrogen",
      annual_rainfall: "1000-2500 mm",
      temp: "25-35"
    },
    {
      Crops: "Rubber",
      Soil_type: "Laterite",
      months: "Throughout",
      fertilizer: "Balanced",
      annual_rainfall: "2500-5000 mm",
      temp: "25-35"
    },
    {
      Crops: "Saffron",
      Soil_type: "Sandy",
      months: "October",
      fertilizer: "Phosphorus",
      annual_rainfall: "600-800 mm",
      temp: "-10 to 35"
    },
    {
      Crops: "Sugarcane",
      Soil_type: "Well-drained",
      months: "November",
      fertilizer: "Nitrogen",
      annual_rainfall: "1500-2000 mm",
      temp: "21 to 27"
    },
    {
        Crops:"Wheat",
        Soil_type: "Clay loam",
        months: "November to March",
        fertilizer: "Potassium Chloride",
        annual_rainfall: "500-750 mm",
        temp:"20 to 25"
    },
    {
        Crops:"Potato",
        Soil_type:"Well-drained",
        months:"October",
        fertilizer:"Ammonium sulphate,Ammonium nitrate",
        annual_rainfall:"1200-2000 mm",
        temp:"20 to 24"
    },
    {
        Crops:"Soyabean",
        Soil_type:"Fertile loam",
        months:"June",
        fertilizer:"Potassium",
        annual_rainfall:"600-650 mm",
        temp:"21"
    }
];


const statecrop = [
    {
     state: "Andhra Pradesh",
     region: "South Region",
     crop: ["Rice","Groundnut","chillies","cashew"]
    },
    {
     state: "Arunachal Pradesh",
     region: "North-Eastern",
     crop: ["Rice","Maize","Millet","Ginger"]
    },
    {
     state: "Assam",
     region: "North-Eastern",
     crop: ["Rice","Jute"]
    },
    {
     state: "Bihar",
     region: "Eastern region",
     crop: ["Rice","Sugarcane"]
    },
    {
     state: "Chhattisgarh",
     region: " central region",
     crop: ["Rice","Oilseed","Pulses"]
    },
    {
     state: "Goa",
     region: "West Region",
     crop: ["Cashew","Coconut"]
    },
    {
     state: "Gujarat",
     region: "West Region",
     crop: ["Wheat","Cotton","Groundnut"]
    },
    {
     state: "Haryana",
     region: "north region",
     crop: ["Wheat"]
    },
    {
     state: "Himachal Pradesh",
     region: "north region",
     crop: ["Apple","Potato"]
    },
    {
     state: "Jharkhand",
     region: "Eastern region",
     crop: ["Rice","Maize"]
    },
    {
     state: "Karnataka",
     region: "South Region",
     crop: ["coconut","coffee"]
    },
    {
     state: "Kerala",
     region: "South Region",
     crop: ["Rice","coconut","coffee"]
    },
    {
     state: "Madhya Pradesh",
     region: "central region",
     crop: ["Soyabean","Gram"]
    },
    {
     state: "Maharashtra",
     region: "West Region",
     crop: ["Wheat","Cotton","Groundnut"]
    },
    {
     state: "Manipur",
     region: "north eastern",
     crop: ["Rice","Maize","Pulses"]
    },
    {
     state: "Meghalaya",
     region: "north eastern",
     crop: ["pineapple","lemon"]
    },
    {
     state: "Mizoram",
     region: "north eastern",
     crop: ["pineapple","lemon"]
    },
    {
     state: "Nagaland",
     region: "north eastern",
     crop: ["Rice","Maize"]
    },
    {
     state: "Odisha",
     region: "Eastern region",
     crop: ["Rice","Mustard"]
    },
    {
     state: "Punjab",
     region: "north region",
     crop: ["Wheat","Mustard","Sugarcane"]
    },
    {
     state: "Rajasthan",
     region: "north region",
     crop: ["Wheat","Cotton","Groundnut"]
    },
    {
     state: "Sikkim",
     region: "north eastern",
     crop: ["Apple","Ginger","Maize","Buckwheat"]
    },
    {
     state: "Tamil Nadu",
     region: "south Region",
     crop: ["Rice","Coconut","Coffee"]
    },
    {
     state: "Telangana",
     region: "south Region",
     crop: ["Rice","Cotton","Red gram"]
    },
    {
     state: "Tripura",
     region: "north eastern",
     crop: ["Pineapple","rubber","jute"]
    },
    {
     state: "Uttar Pradesh",
     region: "central region",
     crop: ["Wheat","Rice","Mustard","Sugarcane"]
    },
    {
     state: "Uttarakhand",
     region: "central region",
     crop: ["Apple","Rice","Tea"]
    },
    {
     state: "WEST BENGAL",
     region: "Eastern region",
     crop: ["Rice","jute","mustard"]
    },
    {
     state: "Andaman and Nicobar Islands",
     region: "south Region",
     crop: ["Coconut","betal nut"]
    },
    {
     state: "Chandigarh",
     region: "north region",
     crop: ["Wheat","Maize","Vegetable"]
    },
    {
     state: "Dadra and Nagar Haveli and Daman and Diu",
     region: "west Region",
     crop: ["mango","coconut","vegetable"]
    },
    {
     state: "Lakshadweep",
     region: "south region",
     crop: ["coconut","vegetables"]
    },
    {
     state: "Delhi",
     region: "north region",
     crop: ["wheat","vegetable","mustard"]
    },
    {
     state: "Puducherry",
     region: "south region",
     crop: ["rice","cashew","coconut"]
    },
    {
     state: "Ladakh",
     region: "north region",
     crop: ["Barley","mustard"]
    },
    {
     state: "Jammu and Kashmir",
     region: "north region",
     crop: ["apple","rice","safron"]
    }
];

app.get("/main",function(req,res){
    res.sendFile(__dirname + "/main.html");
})

app.get("/findcrop",function(req,res){
  res.render("findcrop",{statein:0});
})

app.get("/contact",function(req,res){
  res.sendFile(__dirname + "/contact.html");
})
app.post("/findcrop",function(req,res){
    //console.log(req.body);
    let currstate;
   // currstate = req.body.state;
   let crpdt=[];
   let flag = 0;
   for(var i=0;i<statecrop.length;i++){
    if(_.lowerCase(statecrop[i].state) == _.lowerCase(req.body.state)){
        currstate = statecrop[i];
        flag++;
        break;
    }
   }
   if(flag==0)
   {
    res.render("findcrop",{statein:1});
   }
   else{
   let crop_state = currstate.crop;
   for(var i=0;i<crop_state.length;i++){
    for(var j=0;j<crops.length;j++){
        if(_.lowerCase(crop_state[i]) == _.lowerCase(crops[j].Crops)){
            crpdt.push(crops[j]);
        }
    }

   }
   res.render("cropdetail",{states:currstate.state,cropdetails:crpdt});
  }

    
})

app.post("/contact",(req,res) => res.sendFile(__dirname + "/contact.html"));

app.listen(process.env.PORT||8080,function(){
    console.log("Server is running");
})