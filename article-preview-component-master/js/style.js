const shareBtns = document.querySelectorAll(".share__btn");

shareBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.closest(".card__footer").classList.toggle("share-active");
  });
});

// 点击页面任意处关闭分享弹框
document.body.addEventListener("click", () => {
  document.querySelectorAll(".card__footer").forEach((footer) => {
    footer.classList.remove("share-active");
  });
});
