window.CSS.registerProperty({
    name: "--p",
    syntax: "<number>",
    inherits: true,
    initialValue: 2,
});
window.CSS.registerProperty({
    name: "--viewX",
    syntax: "<number>",
    inherits: true,
    initialValue: "0",
});
window.CSS.registerProperty({
    name: "--viewY",
    syntax: "<number>",
    inherits: true,
    initialValue: "0",
});
window.CSS.registerProperty({
    name: "--viewZ",
    syntax: "<number>",
    inherits: true,
    initialValue: "0",
});
window.CSS.registerProperty({
    name: "--viewf",
    syntax: "<angle>",
    inherits: true,
    initialValue: "0deg",
});
window.CSS.registerProperty({
    name: "--views",
    syntax: "<angle>",
    inherits: true,
    initialValue: "0deg",
});
window.CSS.registerProperty({
    name: "--m",
    syntax: "<length>",
    inherits: true,
    initialValue: "0px",
});
//启动函数
window.onload = () => {
    document.getElementById("bed").onclick = () => {
        let v = document.getElementById("view");
        v.classList.remove("M");
        v.classList.add("B");
    }
    document.getElementById("deskBorder").onclick = () => {
        let v = document.getElementById("view");
        v.classList.remove("M");
        v.classList.add("D");
    }
    document.getElementById("table").onclick = () => {
        let v = document.getElementById("view");
        v.classList.remove("M");
        v.classList.add("T");
    }
    document.getElementById("fontWall").onclick = () => {
        let v = document.getElementById("view");
        v.classList.remove("B", "D", "T");
        v.classList.add("M");
    }
}
