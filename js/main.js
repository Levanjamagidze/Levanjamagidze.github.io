const reviews=[
{
    id:1,
    name:"Ran Rubinstein",
    job:"VP of Solution",
    img:
    "https://cloudinary-res.cloudinary.com/image/upload/dpr_auto,w_145,h_145,c_fill,g_east/l_system_charts,w_82,h_60,g_north_east,y_10,x_5,f_auto/profile_ran_rubinstein.jpg",
    text:
    "Ran is a cloud infrastructure expert with over 20 years of experience developing and deploying web-scale software solutions at startups and large corporations.",


},
{
    id:2,
    name:"Amit Sharon",
    job:"Chief Operation Officer",
    img:
    "https://cloudinary-res.cloudinary.com/image/upload/f_auto,w_73,h_73,c_thumb,g_face,e_hue:90/c_lpad,h_145,w_145,g_north_west/l_profile_amit_sharon,w_73,h_73,c_thumb,g_face/e_hue:-40/g_north_west,x_72,fl_layer_apply/l_profile_amit_sharon,w_73,h_73,c_thumb,g_face,a_0/e_hue:40/g_south_west,x_72,fl_layer_apply/a_0,l_profile_amit_sharon,w_73,h_73,c_thumb,g_face/e_hue:20/g_south_east,x_72,fl_layer_apply,f_auto/profile_amit_sharon.jpg",
    text:
    "Amit is a seasoned product manager and technologist. Amit has over 20 years of building software products from definition to development & marketing.",

},
{
    id:3,
    name:"Meir Feinberg",
    job:"Technical Content Developer",
    img:
    "https://cloudinary-res.cloudinary.com/image/upload/w_145,h_145,r_max,c_fill,g_east,dpr_auto/l_text:Arial_9:Lorem%20ipsum%20dolor%20sit%20amet%20nec%20diam%20commune%20conclusionemque%20ut%20nec%20mucius%20diceret%20ne%20probatus%20eam,w_70,c_fit,g_north_east,x_10,y_25,co_rgb:444/f_auto/profile_meir_feinberg.jpg",
    text:
    "Meir has tons of experience producing quality documentation for technical products. He’ll help you understand all of Cloudinary’s amazing features.",

},

{
    id:4,
    name:"Nadav Ofir",
    job:"Fullstack Developer",
    img:
    "https://cloudinary-res.cloudinary.com/image/upload/l_profile_nadav_ofir,w_0.5,h_0.5,c_crop,g_north_east,e_grayscale/fl_layer_apply,g_north_east/l_profile_nadav_ofir,w_0.5,h_0.5,c_crop,g_south_west,e_grayscale/fl_layer_apply,g_south_west/h_0.6,w_0.6,c_crop,g_face/h_145,w_145,c_fill/r_max/dpr_auto,f_auto/profile_nadav_ofir.jpg",
    text:
    "Nadav is a talented software developer who got extensive customer orientation.",

},

{
    id:5,
    name:"Millie Axelrod",
    job:"Technical Support Engineer",
    img:
    "https://cloudinary-res.cloudinary.com/image/upload/fl_region_relative,w_2.0,h_2.0,c_crop,g_face/w_145,h_145,r_max,c_fill,bo_2px_solid_rgb:009/co_rgb:009,e_shadow:30,x_3,y_3/w_145,h_145/f_auto/profile_millie_axelrod.jpg",
    text:
    "Millie is Cloudinary's account manager expert. She has over 10 years of office and account management experience at hi-tech startup companies.",

},
];

let img= document.querySelector(".img-author");
let author= document.querySelector(".author");
let job = document.querySelector(".job");
let info = document.querySelector(".title");

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let currentItem= 0;

window.addEventListener('DOMContentLoaded', function(){
showPerson(currentItem);
});

function showPerson(id){
    const item=reviews[id];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
};

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
    currentItem=0;
    }
        showPerson(currentItem);
    
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
    currentItem=reviews.length-1;
    }
        showPerson(currentItem);
    
})