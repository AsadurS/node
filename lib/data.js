const fs = require('fs');
const path = require('path');

const lib = {};
lib.basedir = path.join(__dirname,'/../.data/');


// write data to file 
lib.create = function(dir, file, data, callback){
    //open file for write 

    fs.open(lib.basedir+dir+'/'+file +'.json', 'wx', function(error,fileDescreptor){
        if(!error && fileDescreptor){
           //convert data to string
            const stringData = JSON.stringify(data);

            fs.writeFile(fileDescreptor,stringData,function(err2){
                if(!err2){
                    fs.close(fileDescreptor, function(err3){
                        if(!err3) callback(false)
                        else callback('error clossisng the file')    
                    })
                }else{
                     callback('can not write the new file')  
                }
            })
        }else {
            callback( error)
        }
    })
}


//read 
lib.read = ((dir, file, callback)=>{
    fs.readFile(lib.basedir+dir+'/'+file +'.json', 'utf8', (error,fileDescreptor)=>{
        callback(error,fileDescreptor)
    })
})

// update existing file 
lib.update = ((dir, file, data, callback)=>{
    fs.open(lib.basedir+dir+'/'+file +'.json','r+',(error,fileDescreptor)=>{
        if(!error && fileDescreptor){
            //conver todat t ser
            const  stringData = JSON.stringify(data);
            //trancate 
            fs.ftruncate(fileDescreptor, (err)=>{
                if(!err){
                    fs.writeFile(fileDescreptor,stringData,function(err2){
                        if(!err2){
                            fs.close(fileDescreptor, function(err3){
                                if(!err3) callback(false)
                                else callback('error clossisng the file')    
                            })
                        }else{
                             callback('can not write the new file')  
                        }
                    })
                }
                else  callback('error for trancatign file ')    
            })
        }
    })
});


//delete existing file

lib.delete = (dir,file,callback)=>{
  fs.unlink(lib.basedir+dir+'/'+file +'.json',(error)=>{
    if(!error) callback('file succesfully delete')
  })
}
module.exports = lib