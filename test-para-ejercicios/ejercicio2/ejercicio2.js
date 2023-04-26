
function isPalindrome(text){
    let invested = text
                    .split('')
                    .reverse() 
                    .join('')  
                    ;
  
    if(invested === text){
        return true;
    }else{
        return false;
    }
}

module.exports = isPalindrome;

