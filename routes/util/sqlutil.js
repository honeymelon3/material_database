//var user = {username:'lisan',department:'solidbullet',company:'22',phone:'13816398256',password:'solidbullet',metal:'1',graphene:'1',invasion:'1'};

function insertSql(user){
var sql ='insert into db_user('
    for(var item in user){
	   if(item == "username"){
		   sql = sql + item;
		   }else{
			sql= sql+ ','+item;	   
		   };	
		//console.log(user[item]);
		 }
	sql =sql+',auth) values ('
	for(var item in user){
	   if(item == "username"){
		   sql = sql + '\'' +user[item] +'\'';
	   }else{
		sql= sql+ ',\''+user[item]+'\'';	   
	   };	

	 }
	sql =sql+',0)';
	return sql;
	}
	
exports.insertSql = insertSql;
