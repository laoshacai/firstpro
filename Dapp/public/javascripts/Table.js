
//添加按扭点击事件
document.getElementById("add-btn").onclick = function () {
    document.getElementById("add-tr").style.display = "table-row";
}

//下一页点击事件
document.getElementById('nextPage').onclick = function () {
    window.location.href = '/'
}
//删除按扭点击事件
Array.from(document.getElementsByClassName("del-btn")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/del/' + idx;
    }
})

//修改按扭点击事件
Array.from(document.getElementsByClassName("mod-btn")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/mod/' + idx;
    }
})
