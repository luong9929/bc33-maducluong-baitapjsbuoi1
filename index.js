//Bài tập 1 : tính tổng lương   nhân viên 
/* sơ đồ 3 khối
*input : lương 1 ngày , số ngày làm

* process :lấy đc input 
            tính lương = lương 1 ngày * số ngày làm
            log lương ra màn hình
* output : lương

    
*/ 
 var salaryPerDay = 100000;
 var workingDay   = 28     ;

 var totalSalary = salaryPerDay * workingDay ;

 console.log('Tổng lương tháng : ', totalSalary);

 // bài tập 2 : tính giá trị trung bình
 /*
    input : nhập 5 số 

    process : lấy input 
              tính trung bình = tổng 5 số / 5
              log kết quả ra màn hình
    output : kết quả
 */
var num1 = 5;
var num2 = 6;
var num3 = 8;
var num4 = 10;
var num5 = 11;

var result = (num1 + num2 + num3 + num4 + num5) / 5;

console.log('giá trị trung bình : ' ,result )

 // bài tập 3 : đổi tiền
 /*
    input : nhập  số usd , 1 usd = 23500 vnd

    process : lấy input 
              quy đổi usd =  số usd * 23500
              log kết quả ra màn hình
    output : kết quả
 */

var USD = 5 ; 
var VND = 23500;

var rateOfExchange = USD * VND ;

console.log('Quy đổi VND :',rateOfExchange + ' VND' )

// bài tập 4 : tính diện tích & chu vi
 /*
    input : nhập chiều dài , chiều rộng

    process : lấy input 
              chu vi = (chiều dài + chiều rộng ) *2
              diện tích = chiều dài * chiều rộng   
              log kết quả ra màn hình
    output : chu vi , diện tích


 */

var long = 10 ;
var wide  = 6 ;

var perimeter = (long + wide ) * 2 ;
var area      =  long * wide       ; 

console.log('Chu vi :' ,perimeter );
console.log("Diện tích :",area ) ;

// bài tập 5 : tính tổng 2 ký số
 /*
    input : nhập 1 số có 2 chữ số

    process : lấy input 
              lấy số hàng đơn vị = n % 10 
              lấy số hàng chục  = n / 10  
              tổng = số hàng chục + số hàng đơn vị
              log kết quả ra màn hình
    output : tổng 2 ký số


 */

    var num = 38 ;

    var num1 = num % 10 ;
    var num2 = Math.floor(num / 10)  ;

    var sumOfTwoDigits = num1 + num2 ;

    console.log('Tổng 2 ký số : ' ,sumOfTwoDigits )