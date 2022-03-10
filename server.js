const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/webpack');
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/posts', async(req, res, next)=>{
  try {
    res.send(await Post.findAll())
  }
  catch (e) {
    next (e)
  }
});

app.post('/api/tasks', async(req, res, next)=>{
  try {
    res.send(await Post.random())
  }
  catch (e) {
    next (e)
  }
});


const init = async()=> {
  try {
    await sequelize.sync({ force: true });
    await Promise.all([
      Post.random(),
      Post.random(),
      Post.random(),
      Post.random(),
    ])


    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();

const tags = ["#life", "#chicken", "#fullstack", "#hashtag", "#prof", "#code", "#job", "#wfh"]

const user = ["@leonard", "@phillip", "@marc", "@justin"]

const randomItem = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const message = function() {
  return [randomItem(tags), randomItem(user)].join(' ')
};

const Post = sequelize.define('post', {
  twit: {
    type: Sequelize.STRING
  }
})

Post.random = function (){
  return this.create({ twit: `Post ${message()} `})
}





