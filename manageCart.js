let myCart = []; // khai báo một mảng rỗng (biến toàn cục)

// Hàm để thêm sản phẩm vào cart
function addToCart() {
    let name, quantity, price;
    let isValid = false;
    while (!isValid) {
        name = prompt(`Input Name : `);
        quantity = parseInt(prompt(`Input Quantity : `));
        price = parseFloat(prompt(`Input Price: `));

        // Check điều kiện nhập vào, tên, số lượng, giá > 0 và là number
        if (name && !isNaN(quantity) && quantity > 0 && !isNaN(price) && price > 0) {
            isValid = true;// nếu thoả mãn điều kiện
            // lưu thông tin vào đối tượng product
            let product = {
                name: name,
                quantity: quantity,
                price: price
            };
            // sau đó push product vào array myCart
            myCart.push(product);
            alert(`Add to card successful.`)
        } else {
            alert(`Invalid Input. Please Try Again.`)
        }

    }


}
//Hàm để xoá sp khổi giỏ hàng
function removeProduct() {
    let prName = prompt(`Input Product Name : `);
    let isFound = false;
    let index = 0;
    // DÙng vòng lặp for of để lặp qua các phần tử trong mảng
    // từ đó tìm phần tử có name = input 
    for (let product of myCart) {
        if (product.name.toLowerCase() === prName.toLocaleLowerCase()) {
            //splice(vị trí, số lượng)
            myCart.splice(index, 1);
            isFound = true;
            alert(`Remove Product ${prName} Successful.`);
            break;
        }
        index++;
    }
    if (!isFound) {
        alert(` Product Name is not exist`);
    }

}
// Hàm tính tổng giá trị đơn hàng
function totalPrice() {
    let total = 0;
    for (let product of myCart) {
        total += product.price * product.quantity
    }
    return total.toFixed(3);

}
// Hàm in thông tin 
function showCart() {
    // Nếu giỏ hàng rỗng, thông báo
    if (myCart.length === 0) {
        alert(`There's nothing in Cart`);
        return;

    }
    let displayInfo = ``;
    for (let product of myCart) {
        displayInfo += `Product Name ${product.name}, Quantity : ${product.quantity}, Price : ${product.price}\n`;

    }
    displayInfo += `Total Price : ${totalPrice()}`;
    alert(displayInfo);

}