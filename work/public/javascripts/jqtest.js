$(function () {
    //实现点击效果
    $("#nextPage").click(function () {
        //请求数据
        $.ajax({
            type: "post",
            url: "/nextPage",
            success: function (data) {
                document.getElementById('showNextPage').innerHTML = data.map((i, ind) => `
                <tr>
                <td>
                ${i.name}
                </td>
                <td>
                ${i.ch}
                </td>
                <td>
                ${i.ma}
                </td>
                <td>
                ${i.en}
                </td>
                <td>
                ${i.am}
                </td>
                <td>
                    <button data-id=${ind} class="mod-btn">修改</button>
                    <button data-id=${ind} class="del-btn">删除</button>
                </td>
            </tr>
`).join('');
            }
        })
    })
});