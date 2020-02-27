
function printPascalTriangle(){
    document.getElementById("pascal").innerHTML = "";
    var rows = document.getElementById("numRows").value;
    var arr = generatePascal(+rows);
    for(var i=0;i<arr.length;i++){
        var div = document.createElement('div');
        div.className ="divblock"
        for(var j=0;j<arr[i].length;j++){
            var span = document.createElement('span');
            span.innerHTML=arr[i][j];
            span.className ="block";
            div.appendChild(span);
        }
        document.getElementById("pascal").appendChild(div);
    }
}
function generatePascal(n){
    var arr = [];
    var tmp;
    for(var i=0;i<n;i++){
        arr[i]=[];
        for(var j=0; j<=i; j++){
            if(j==i){
                arr[i].push(1);
            }else{
                tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
                arr[i].push(tmp);
            }
        }
    }
    return arr;
}