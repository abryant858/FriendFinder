// Route to get to home page
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
  
  // Route to get to survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
  });
  
  