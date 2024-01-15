const router = require('express').Router();
let News = require('../Models/news.js')

router.route ("/add").post((req,res) => { 
    const newsID = Number(req.body.newsID) ;
    const topic = req.body.topic;
    const imgSrc = req.body.imgSrc;
    const reporterID = Number(req.body.reporterID) ;
    const content = req.body.content;
    const status = "Pending";


    const newNews = new News({
        newsID,
        topic,
        imgSrc,
        reporterID,
        content,
        status
    })

    newNews.save().then(() => {
        res.json("News is added")
    }).catch((err) => {
        console.log(err);
    })
}) 



module.exports = router;