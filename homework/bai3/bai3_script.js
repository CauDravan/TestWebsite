function saveData() {
    const fullname = document.getElementById("fullname").value;
    const idPro = document.getElementById("idPro").value;
    const namePro = document.getElementById("namePro").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);

    const amount = quantity * price;
    const discount = amount * 0.15; // ví dụ giảm 15%
    const total = amount - discount;

    const item = {
        id: autoId++,
        fullname,
        idPro,
        namePro,
        quantity,
        price,
        discount,
        amount,
        total
    };

    dataList.push(item);
    alert("Saved!");
}

function showData() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    dataList.forEach(item => {
        const row = `
        <tr>
            <td>${item.id}</td>
            <td>${item.fullname}</td>
            <td>${item.idPro}</td>
            <td>${item.namePro}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.discount.toFixed(1)}</td>
            <td>${item.amount}</td>
            <td>${item.total.toFixed(1)}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("idPro").value = "";
    document.getElementById("namePro").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}
