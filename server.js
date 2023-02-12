const schedule = require('node-schedule');
const express = require('express');
const app = express();




app.get('/api', function(req, res){
  let text = req.params.text;
  console.log(typeof text)
  let n=text.length
  for (let i = 0; i < text.length; i++) {
    schedule.scheduleJob(text, function() {
      console.log(`Running ${text.name} at ${new Date()}`);
    });
  }
  setTimeout(() => {
    let reversedText = text.split('').reverse().join('');
    
    res.send(reversedText `${new Date()}`);
  }, n* 1000);
});

app.listen(3001||portEnv, function() {
  console.log("Server started on port:"+3001||portEnv);
  });

  