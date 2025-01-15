let Result = document.getElementById("result");

function clearResult() {
    Result.value = " ";
}

function insertValue(value) {
    Result.value += value;
}

function deleteResult() {
    Result.value = Result.value.slice(0, -1);
}

function calculate() {
    try {
        Result.value = eval(Result.value);
    }
    catch (error) {
        Result.value = "error";
    }
}

