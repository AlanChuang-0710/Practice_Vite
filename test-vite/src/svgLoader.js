
/* 加載svg方式1 */
// 缺點: 無法改動
// import svgIcon from "@assets/svg/cat.svg";
// const imgElement = document.createElement("img");
// imgElement.src = svgIcon;
// document.body.appendChild(imgElement);

/* 加載svg方式2 */
import svgIconRaw from "@assets/svg/cat.svg?raw";
document.body.innerHTML = svgIconRaw;
const svgArr = document.querySelector("svg > g");
svgArr.onmouseenter = function () {
    // 改svg顏色是要修改fill屬性
    console.log(this);
    this.style.fill = "red";
};
svgArr.onmouseleave = function () {
    console.log(this);
    this.style.fill = "black";
};