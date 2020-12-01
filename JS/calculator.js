$("document").ready(function(){
    const operationMap = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
    };

    $(".btn").on("click", function(){
        const op = $(this).data("op");
        const x = parseFloat($("#first").val());
        const y = parseFloat($("#second").val());
        const result = operationMap[op](x, y);
        $("#result").val(result);
        console.log(result)
    })
})