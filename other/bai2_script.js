function calculate() {
    const s1 = parseFloat(document.getElementById("s1").value);
    const s2 = parseFloat(document.getElementById("s2").value);
    const year = parseInt(document.getElementById("year").value);

    let avg;
    if (year === 1) avg = (s1 + s2) / 2;
    else avg = (s1 + s2 * 2) / 3;

    document.getElementById("avg").value = avg;

    let rank = "";
    if (avg >= 8) rank = "Hoc sinh gioi";
    else if (avg >= 6.5) rank = "Hoc sinh kha";
    else if (avg >= 5) rank = "Hoc sinh trung binh";
    else rank = "Hoc sinh yeu";

    document.getElementById("rank").innerText = rank;
}