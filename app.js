const express = require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const { path } = require("express/lib/application");

const app=express();

let title="";
let textray=[];
let tempray=[];
let titleray=[];
let tempray2=[];
let text=" ";
let count;
let text1="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
let text2="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
textray.push(text);
textray.push(text1);
textray.push(text2);
let temptext="";
 for (let j=0;j<textray.length;j++){
        for(let i=0;i<50;i++){
               temptext+=textray[j].charAt(i);
              
        }
        tempray.push(temptext);
        temptext=" ";

    }
let textray2=[...new Set(textray)];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

console.log(titleray)

app.get("/",(req,res)=>{
    title="main";
    count=50;
    for (let j=3;j<textray.length;j++){
        for(let i=0;i<50;i++){
               temptext+=textray[j].charAt(i);
              
        }
        tempray2.push(temptext);
        temptext=" ";

    }
    let tempray3=[...new Set(tempray2)];
    if(tempray.length>0){
        if(titleray.length>=1){
            for(let b=0;b<titleray.length;b++){
                res.render("Blog",{Title:title,Text:tempray[0],Text1:tempray[1],Text2:tempray[2],TitleNew:titleray[b],Text3:tempray3,RAY:titleray});

            }
            
            console.log(tempray2)
            console.log(titleray)
            // tempray2.pop();

        }
        else{
            res.render("Blog",{Title:title,Text:tempray[0],Text1:tempray[1],Text2:tempray[2],TitleNew:titleray[0],Text3:tempray3,RAY:titleray});
            console.log(tempray2)
            // console.log(titleray)

        }

    }
    else{
        res.render("Blog",{Title:title,Text:tempray[0],Text1:tempray[1],Text2:tempray[2]});

    }
})
app.post("/",(req,res)=>{
    title="main";
    res.redirect("/");
})

app.get("/home",(req,res)=>{
    title="home";
    //text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    res.render("Blog",{Title:title,Text:text});
})
app.post("/home",(req,res)=>{
    res.redirect("/home");

})
app.get("/day1",(req,res)=>{
    title="day1";
    res.render("Blog",{Title:title,Text1:text1});
})
app.post("/day1",(req,res)=>{
    res.redirect("/day1");
})

app.get("/day2",(req,res)=>{
    title="day2";
    res.render("Blog",{Title:title,Text2:text2});
})
app.post("/day2",(req,res)=>{
    res.redirect("/day2");

})
// for(let i=0;i<titleray.length;i++){
//     new_page(i,titleray);
// }

    
// function new_page(n,titleray){
//       let titlename="/"+titleray[n]
//       console.log(titlename)
//       app.get(titlename,(req,res)=>{
//         title=titlename;
//         res.render("blog",{Title:title,TitleNew:titlename,Text3:tempray2[n]})
//        })
//        app.post(titlename,(req,res)=>{
//         res.redirect(titlename);
//        })
//  }

app.get("/new",(req,res)=>{
    title=titleray[0];
    console.log(textray2);
    res.render("blog",{Title:title,TitleNew:titleray[0],Text3:textray2,RAY:titleray})
})
app.post("/new",(req,res)=>{
    res.redirect("/new")
})
app.get("/compose",(req,res)=>{
    title="compose";
    res.render("Blog",{Title:title,TitleNew:titleray[0],Text3:tempray2[0],RAY:titleray});
})
app.post("/compose",(req,res)=>{
    let head=req.body.heading;
    let content=req.body.content;
    if(head!=undefined && content !=undefined){
        textray.push(content);
        textray2.push(content);
        titleray.push(head);
        res.redirect("/");

    }
    res.redirect("/compose");
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Server is up and running!")
})