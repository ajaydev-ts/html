var add=function()
{
    // alert("test");
    var a=document.getElementById("fno").value;
    var b=document.getElementById("sno").value
    var c=parseInt(a)+parseInt(b);
    document.getElementById("result").value=c;
    // return c;
}
var sub=function()
{
    var a=document.getElementById("fno").value;
    var b=document.getElementById("sno").value
    var c=parseInt(a)-parseInt(b);
    document.getElementById("result").value=c;

}
var mul=function()
{
    var a=document.getElementById("fno").value;
    var b=document.getElementById("sno").value
    var c=parseInt(a)*parseInt(b);
    document.getElementById("result").value=c;

}
var div=function()
{
    var a=document.getElementById("fno").value;
    var b=document.getElementById("sno").value
    var c=parseInt(a)/parseInt(b);
    document.getElementById("result").value=c;

}