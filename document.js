document.addEventListener('DOMContentLoaded', function() {
    console.log('Website baru siap digunakan!');

    const channelSelect = document.getElementById('channel');
    for (let i = 0; i <= 17; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        channelSelect.appendChild(option);
    }

    var date = new Date();
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Tambahkan awalan nol jika jam atau menit kurang dari 10
    if (hours < 10) {hours = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}

    var day = days[date.getDay()];
    var dateNum = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);

    var element = document.querySelector("body");
    var watermark = document.createElement("div");

    // Setel teks watermark dan propertinya
    watermark.textContent = day + ", " + dateNum + " " + month + " " + year;
    watermark.style = "color:white;opacity:.9;font-size:20px;position:fixed;bottom:25px;left:25px;z-index:150";
    element.appendChild(watermark);
});
