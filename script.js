function getNumber(id) {
  return Number.parseFloat(document.getElementById(id).value);
}

function showResult(id, message, type = "") {
  const element = document.getElementById(id);
  element.textContent = message;
  element.className = `result-box ${type}`.trim();
}

function solveQuadratic() {
  const a = getNumber("q_a");
  const b = getNumber("q_b");
  const c = getNumber("q_c");

  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    showResult("q_result", "Error: Please enter valid numerical coefficients.", "error");
    return;
  }

  if (a === 0) {
    showResult("q_result", "Error: coefficient a cannot be zero because the equation would not be quadratic.", "error");
    return;
  }

  const discriminant = b * b - 4 * a * c;
  const epsilon = 1e-12;

  if (discriminant > epsilon) {
    const sqrtD = Math.sqrt(discriminant);
    const x1 = (-b + sqrtD) / (2 * a);
    const x2 = (-b - sqrtD) / (2 * a);

    showResult(
      "q_result",
      `Two Real Roots: x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}. Discriminant = ${discriminant.toFixed(4)}.`,
      "success"
    );
  } else if (Math.abs(discriminant) <= epsilon) {
    const x = -b / (2 * a);

    showResult(
      "q_result",
      `One Repeated Real Root: x = ${x.toFixed(4)}. Discriminant = 0.`,
      "success"
    );
  } else {
    const real = -b / (2 * a);
    const imaginary = Math.sqrt(-discriminant) / Math.abs(2 * a);

    showResult(
      "q_result",
      `Complex Conjugate Roots: x₁ = ${real.toFixed(4)} + ${imaginary.toFixed(4)}i, x₂ = ${real.toFixed(4)} − ${imaginary.toFixed(4)}i. Discriminant = ${discriminant.toFixed(4)}.`,
      "success"
    );
  }
}

function calcPythagoras() {
  const a = getNumber("p_a");
  const b = getNumber("p_b");

  if (!Number.isFinite(a) || !Number.isFinite(b) || a <= 0 || b <= 0) {
    showResult("p_result", "Error: Side lengths must be positive numbers.", "error");
    return;
  }

  const c = Math.sqrt(a * a + b * b);

  showResult(
    "p_result",
    `Hypotenuse c = ${c.toFixed(4)} units.`,
    "success"
  );
}

function calcFactorial() {
  const n = Number.parseInt(document.getElementById("f_n").value, 10);

  if (!Number.isInteger(n) || n < 0 || n > 170) {
    showResult("f_result", "Error: Enter a whole number from 0 to 170.", "error");
    return;
  }

  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  showResult(
    "f_result",
    `${n}! = ${factorial.toLocaleString("en-US")}`,
    "success"
  );
}

function calcFibonacci() {
  const n = Number.parseInt(document.getElementById("fib_n").value, 10);

  if (!Number.isInteger(n) || n < 1 || n > 30) {
    showResult("fib_result", "Error: Enter a whole number from 1 to 30.", "error");
    return;
  }

  const sequence = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(first);
    [first, second] = [second, first + second];
  }

  showResult(
    "fib_result",
    `Fibonacci sequence: ${sequence.join(", ")}`,
    "success"
  );
}
