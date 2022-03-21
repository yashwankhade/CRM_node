var dbConn  = require('../../config/db.config');

var salarys = function(salarys){
    this.salary_Company_Id     =   salarys.Company_Id;
    this.salary_Bank_Details  =   salarys.Bank_Details;
    this.salary_Account_no    =   salarys.Account_no;
    this.salary_Salary        =   salarys.Salary ;
    this.salary_HRA           =   salarys.HRA;
    this.salary_Other_allowance     =   salarys.Other_allowance;
    this.salary_Misc.expences       =   salarys.Misc.expences;
    this.salary_PF            =   salarys.PF;
    this.salary_Esic          =   salarys.Esic;
    this.salary_Prof.tax      =   salarys.Prof.tax;
    this.salary_Pf.tax        =   salarys.Pf.tax;
    this.salary_Yearly_incentive      =   salarys.Yearly_incentive;
    this.salary_diwali_bonus        =   salarys.diwali_bonus;
}

// get all salarys
salarys.getAllsalarys = (result) =>{
    dbConn.query('SELECT * FROM salarys', (err, res)=>{

        if(err){
            console.log('Error while fetching salarys', err);
            result(null,err);
        }else{
            console.log('salarys fetched successfully');
            result(null,res);
        }
    })
}

// get salary by ID from DB
salarys.getsalaryByID = (id, result)=>{
    dbConn.query('SELECT * FROM salarys WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching salarys by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new salary
salarys.createsalary = (salaryReqData, result) =>{
    dbConn.query('INSERT INTO salarys SET ? ', salaryReqData, (err, res)=>{
        if(err){
            console.log('Error while creating new salary');
            result(null, err);
        }else{
            console.log('salary created successfully');
            result(null, res)
        }
    })
}

// update salary
salarys.updatesalary = (id, salaryReqData, result)=>{
    dbConn.query("UPDATE salarys SET salary_Company_Id=?,salary_Bank_Details=?,salary_Account_no=?,salary_Salary=?,salary_HRA=?,salary_Other_allowance=?,salary_Misc.expences=?,salary_Other_allowance=?,salary_Misc.PF=?,salary_Prof.tax=?,salary_Pf.tax=?,salary_Yearly_incentive=?,salary_Diwali_Bonus=? WHERE cId = ?", [salaryReqData.salary_Company_Id,salaryReqData.salary_Bank_Details,salaryReqData.salary_Account_no,salaryReqData.Salary,salaryReqData.salary_HRA,salaryReqData.salary_Other_allowance,salaryReqData.salary_Misc.expences,salaryReqData.salary_PF,salaryReqData.salary_Esic,salaryReqData.salary_Prof.tax,salaryReqData.salary_Pf.tax,salaryReqData.salary_Yearly_incentive,salaryReqData.salary_diwali_bonus, id], (err, res)=>{
        if(err){
            console.log('Error while updating the salary');
            result(null, err);
        }else{
            console.log("salarys updated successfully");
            result(null, res);
        }
    });
}

// delete salary
salarys.deletesalary = (id, result)=>{
    dbConn.query('DELETE FROM salarys WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the salarys');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = salarys;