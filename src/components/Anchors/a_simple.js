export const a_simple = (id, href, text) => {
  const a = document.createElement("a");
  a.id = id;
  a.href = href;
  a.textContent = text;
  return a;
};
