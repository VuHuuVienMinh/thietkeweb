$(document).ready(function () {
    // Tạo bảng caro 3x3
    for (let i = 0; i < 9; i++) {
        $('#caro-board').append('<div class="cell"></div>');
    }

    // Thêm sự kiện click cho các ô
    let currentPlayer = 'X';
    $('.cell').on('click', function () {
        if (!$(this).text()) { // Nếu ô chưa được đánh
            $(this).text(currentPlayer); // Thêm ký hiệu người chơi
            $(this).addClass('clicked'); // Thêm hiệu ứng màu
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Chuyển lượt
        }
    });
});
