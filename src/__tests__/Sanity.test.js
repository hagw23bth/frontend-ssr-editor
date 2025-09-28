test("sanity check: 1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

test("sanity check: document body exists", () => {
  // jsdom ger oss ett fejkat DOM-träd
  const div = document.createElement("div");
  document.body.appendChild(div);
  expect(document.body.contains(div)).toBe(true);
});
