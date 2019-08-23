var client = require("request-promise-native");

module.exports = async function (context, req) {
    var apiKey = process.env["BloggerApiKey"]
    var bloggerUrl = "https://www.googleapis.com/blogger/v3/blogs/22825020/posts?key=" + apiKey;
    await client.get(bloggerUrl)
    .then(function ($) {

        var data = JSON.parse($);
        context.log('Successfully retrieved ' + data.items.length + ' posts...');

        var selected = data.items.map(function(i) {
            return {
                published: i.published,
                title: i.title,
                url: i.url
            };
        })
        
        context.res = {
            status: 200,

            body: JSON.stringify(selected)
        }
    })
    .catch(function (err) {
        console.error(err);
        context.res = {
            status: 400,
            body: "Something went wrong."
        }
});
};