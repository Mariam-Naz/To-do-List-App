
exports.getDate = function(){
    const options = {
        year : 'numeric',
        month : 'long',
        weekday : 'long',
        day : 'numeric'
    }
   const today = new Date();
    const day = today.toLocaleDateString('en-US',options);
    
    return day;
    }