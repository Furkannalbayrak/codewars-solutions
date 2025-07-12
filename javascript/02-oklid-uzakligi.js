
// Verilen 3 nokta a, b, c
// c noktasından a ve b noktalarından geçen bir doğruya olan en kısa mesafeyi bulunuz

// Notlar
// tüm noktalar [x,y] biçimindedir, burada x >= 0 ve y >= 0
// a ve b aynı ise, o zaman sadece a ve c arasındaki uzaklığı döndürün
// Öklid uzaklığını kullanın

function distanceFromLine(a, b, c) {
  if (a[0] === b[0] && a[1] === b[1]) {
    return Math.sqrt((c[0] - a[0]) ** 2 + (c[1] - a[1]) ** 2);
  } else {
    return Math.abs(
      (b[0] - a[0]) * (a[1] - c[1]) - (a[0] - c[0]) * (b[1] - a[1])
    ) / Math.sqrt(
      (b[1] - a[1]) ** 2 + (b[0] - a[0]) ** 2
    );
  }
}
