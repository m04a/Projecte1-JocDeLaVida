<script>
    let input = document.getElementsByTagName("td");
    let array = <?php echo json_encode($Array) ?>;
    let mapa = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");
    let td = document.getElementsByTagName("td");
    let next = make2DArray(tr.length, td.length);
    let reniciar = make2DArray(tr.length,td.length);
    function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
}
    return arr;
}
    console.log(array);
    let arrayint = arrayPasatAInt(array);
    function celesvives(){
    console.log(arrayint);
    for(let i = 0;i < tr.length;i++){
    td = tr[i].getElementsByTagName("td");
    for(let j = 0;j< td.length ;j++){
    let state = arrayint[i][j];
    let sum = 0;
    let Veins = ComptaVeins(arrayint, i, j,sum);

    if (state == 0 && Veins == 3) {
    next[i][j] = 1;
} else if (state == 1 && (Veins < 2 || Veins > 3)) {
    next[i][j] = 0;
} else{
    next[i][j] = state;
}
}
}
    arrayint = next;
    array = next;
    next = reniciar;
    console.log(arrayint);
    Dibujar();
}
    function auto(){
    setInterval(function(){celesvives();},500);
}
    function Dibujar(){
    for(let i = 0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td");
    for(let l = 0;l<td.length;l++){
    if(arrayint[i][l] == 1){
    td[l].getElementsByTagName("input")[0].checked = true;
}else{
    td[l].getElementsByTagName("input")[0].checked = false;
}
}
}
    console.log(arrayint);
}
    function borrar(){
    for(let i = 0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td");
    for(let l = 0;l<td.length;l++){
    td[l].getElementsByTagName("input")[0].checked = false;
}
}
}
    function ComptaVeins(grid, x, y,sum) {
    sum = 0;
    for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
    if(i!=0 || j!=0){
    let col = (x + i + td.length) % td.length;
    let row = (y + j + tr.length) % tr.length;
    sum += grid[col][row];
}
}
}
    console.log(sum);
    return sum;
}
    function arrayPasatAInt(canvia) {
    for(var i=0; i<tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for(var j=0; j<td.length; j++) {
    if(canvia[i] && canvia[i][j] && canvia[i][j] == "on"){
    canvia[i][j] = 1;
}else{
    if(!canvia[i]){
    canvia[i] = {};
}
    canvia[i][j]=0;
}
}
}
    return canvia;
}
</script>