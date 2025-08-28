document.getElementById("loan-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const p = +document.getElementById("amount").value,
        r = (+document.getElementById("interest").value) / 100 / 12,
        n = +document.getElementById("years").value * 12,
        x = Math.pow(1 + r, n),
        m = (p * x * r) / (x - 1);

  if (isFinite(m)) {
    const format = val => "₹" + val.toLocaleString("en-IN", { minimumFractionDigits: 2 });

    document.getElementById("monthly").textContent = format(m);
    document.getElementById("total").textContent = format(m * n);
    document.getElementById("interestTotal").textContent = format(m * n - p);

    document.getElementById("results").style.display = "block";

    // ✅ Alert with monthly payment
    alert("Calculation Completed ✅\nYour Monthly Payment is " + format(m));
  } else {
    alert("Please check your input values!");
  }
});
