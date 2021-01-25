var Sequelize = require('sequelize');
const express = require("express"); 
//Setting up the config
var sequelize = new Sequelize('employee', 'root', 'password', {
    host: 'localhost',
   // port: 3306,
    dialect: 'mysql'
});/*
sequelize.authenticate().complete(function (err) {
    if (err) {
       console.log('There is connection in ERROR');
    } else {
       console.log('Connection has been established successfully');
    }
   });*/
   
   sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  const emp = sequelize.define('employee', { emp_id:{ 

    // Sequelize module has INTEGER Data_Type. 
    type:Sequelize.INTEGER, 

    // To increment user_id automatically. 
    autoIncrement:true, 

    // user_id can not be null. 
    allowNull:false, 

    // For uniquely identify user. 
    primaryKey:true
}, emp_name: Sequelize.TEXT,emp_salary:Sequelize.INTEGER, designaion: Sequelize.STRING });
  sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    emp.bulkCreate([
     // { note: 'pick up some bread after work', tag: 'shopping' },
      //{ note: 'remember to write up meeting notes', tag: 'work' },
     {emp_id:1, emp_name: 'mrunal', emp_salary: 25000, designaion:'engineer' },
      { emp_name: 'varad', emp_salary: 35000, designaion:'manager' },
      { emp_name: 'pratika', emp_salary: 20000, designaion:'engineer' },
      { emp_name: 'nikita', emp_salary: 20000, designaion:'engineer' },
      { emp_name: 'isha', emp_salary: 15000, designaion:'trainee' },
      { emp_name: 'amit', emp_salary: 20000, designaion:'engineer' }
    ]).then(function() {
      return emp.findAll();
    }).then(function(emp) {
      console.log(emp);
    });
  });

 

const app = express();


app.get('/employee', (req, res) => {
    return emp.findAll()
      .then((emp) => res.send(emp))
      .catch((err) => {
        console.log('There was an error querying employees', JSON.stringify(err))
        return res.send(err)
      });
  });
  

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});