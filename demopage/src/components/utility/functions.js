export const dateConverter = (str) =>{
    const obj={
      date:"",
      month:"",
      year:""
    }
    const date = new Date(str*1000);
    const c=date.toLocaleDateString("en-US"); //   12/6/21 month date year
    const a=c.split("/");
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];    
    obj.month=months[a[0]-1] ;
    obj.date=a[1];
    obj.year=a[2]
    return obj;     
  }